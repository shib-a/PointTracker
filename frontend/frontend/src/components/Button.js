const Button = ({children, style, onClick, type})=>{

    return(
        <button style={style} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
export default Button;