const Button = ({children, style, onClick})=>{

    return(
        <button style={style} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;