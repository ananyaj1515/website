import '../css/CustomInput.css';

function CustomInput() {
    return (
        <div className="custom-input">
            <input className="email-input" type="text" placeholder="Enter your email" />
            <button className="button">Notify Me</button>
        </div>
    )
}

export default CustomInput;