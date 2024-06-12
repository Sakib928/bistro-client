import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const price = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (price) {
      axiosSecure
        .post("/create-payment-intent", {
          price: price,
        })
        .then((res) => {
          console.log(res?.data);
          setClientSecret(res?.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    // time to confirm payment

    const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      }
    );
    if (paymentError) {
      console.log("payment error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id :", paymentIntent?.id);
        setTransactionId(paymentIntent?.id);
        // now save the payment in the process
        const payment = {
          email: user.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuID),
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          toast.success("payment successful");
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };
  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600">{transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
