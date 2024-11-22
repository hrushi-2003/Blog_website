const Quote = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className=" flex flex-col justify-center h-screen">
        <div className="flex items-center max-w-lg text-3xl font-bold">
          "The customer service i received is exceptional. The support team went
          above and beyond to address my concerns"
        </div>
        <div className="mt-3">
          <div className="semi-bold text-xl">Elon Musk</div>
          <div className="font-thin">CEO | Tesla</div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
