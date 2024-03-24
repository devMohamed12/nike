
const Button = ({ text, icon, classes }) => {
  return (
    <button
      className={`
      flex justify-center items-center gap-3 max-md:mx-auto
       px-5 py-4 font-montserrat text-lg text-white leading-none  rounded-full bg-red-gradient
       relative z-10
       before:absolute before:content-""    before:inset-0  before:-z-10   before:bg-red-gradient-hover before:rounded-full
       before:overflow-hidden before:opacity-0 before:transition-opacity before:duration-1000 before:ease-in-out
       
       hover:before:opacity-100

       ${classes}
`}
    >
      {text}

      {icon && <img src={icon} className="rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
