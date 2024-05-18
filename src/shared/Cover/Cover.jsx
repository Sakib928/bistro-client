import { Parallax } from "react-parallax";
const Cover = ({ banner, title, details }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={banner}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[572px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl py-32 px-48 bg-black/60 text-white">
            <h1 className="text-4xl font-extrabold uppercase">{title}</h1>
            <p>{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
