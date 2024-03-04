const Button = ({handleClick, children})=>{
    return (
        <button onClick={event => handleClick(event, 'Bea')}>{children}</button>
    )
}

export default Button;