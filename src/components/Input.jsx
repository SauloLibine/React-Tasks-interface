function Input(props) {
  return (
    <input 
      className={"border-slate-300 focus:outline-slate-400 px-4 py-2 rounded-md w-full shadow"}
      {...props}
    />
  );
}

export default Input;