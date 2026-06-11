function Button(props) {
    return (
        <button
            className={"bg-slate-600 text-white px-4 py-2 rounded-md font-medium shadow " + props.className}
            {...props}
        >
            {props.children}
        </button>
    );
}

export default Button;