import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featureImg from "../../assets/home/featured.jpg";

const Featured = () => {
  const heading = "from our menu";
  const subHeading = "---Check it out---";
  return (
    <div
      style={{
        backgroundImage: `url(${featureImg})`,
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed",
      }}
      className="px-16 py-24 bg-black/60 text-white"
    >
      <SectionTitle heading={heading} subHeading={subHeading}></SectionTitle>
      <div className="flex justify-center items-center gap-8 text-white">
        <div>
          <img src={featureImg} alt="" className="w-[600px] h-[350px]" />
        </div>
        <div>
          <p className="text-sm">March 20, 2023</p>
          <h1 className="uppercase font-bold text-2xl">where can I get some</h1>
          <p className="max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic totam
            architecto natus! Aut aperiam perspiciatis laborum vel hic.
            Laudantium, minus!
          </p>
          <button className="btn mt-6 border-0 border-b-4 border-white text-white">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
