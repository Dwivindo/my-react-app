const Button = (props) => {
    const {variant, text, type,} = props;

    return (
      <button 
        className={`w-full text-center px-5 py-2 ${variant} font-bold text-white rounded mt-5`}
        type={type}>
        {text}
      </button>
    );
  }

  export default Button;