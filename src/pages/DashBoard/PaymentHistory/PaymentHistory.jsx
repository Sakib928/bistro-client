// import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const [history, setHistory] = useState([]);
  // useEffect(() => {
  //   axiosSecure.get(`/payment/${user.email}`).then((res) => {
  //     console.log(res?.data);
  //     setHistory(res.data);
  //   });
  // }, [axiosSecure, user]);
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <h1 className="text-3xl">Total Payments : {payments?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => {
              return (
                <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>{payment.price}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
