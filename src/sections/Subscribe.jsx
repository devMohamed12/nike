import Button from "./../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        sign up form <span className="gradient-text"> updates </span>&
        newsletters
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-white-400 rounded-full">
        <input type="text" placeholder="test@test.com" className="input" />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button text="sign up"/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
