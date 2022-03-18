const Button = ({ title, handleClick, children }) => {

    const clickButton = () => {
        console.log('Me clickeaste');
    }

    return (
        <div>
            <button onClick={handleClick}>{title}</button>
            <div style={{backgroundColor: 'red'}}>
                {children}
            </div>
        </div>
    )
}

export default Button
