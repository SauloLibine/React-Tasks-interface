function Block(props) {
    return (
        <div className="w-[500px] space-y-4">
            {props.children}
        </div>
    );
}

export default Block;