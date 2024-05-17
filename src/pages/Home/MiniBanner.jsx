import banner from "../../assets/home/banner.jpg";
const MiniBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-[572px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl py-16 px-32 bg-white text-black">
            <h1 className="text-3xl">BISTRO BOSS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum praesentium distinctio nulla harum tenetur deserunt
              delectus numquam dolor consectetur asperiores! Modi fugiat animi
              necessitatibus ratione numquam eveniet quaerat autem? Enim.
              Pariatur voluptatem, rem voluptates facere nobis eveniet fugit
              atque sit ut assumenda expedita sed. Enim excepturi voluptatem
              dignissimos, quo eaque neque error repudiandae at? Sapiente
              necessitatibus voluptate deleniti temporibus. Voluptatum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBanner;
