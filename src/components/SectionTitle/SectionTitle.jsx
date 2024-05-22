const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:w-3/12 mx-auto my-8">
      <p className="text-lg mb-8 italic text-[#D99904]">{subHeading}</p>
      <p className="text-3xl border-y-4 py-4 uppercase">{heading}</p>
    </div>
  );
};

export default SectionTitle;
