import '../css/CustomInput.css';

function CustomInput() {
    return (
        <div className="custom-input">
            <input className="email-input" type="text" placeholder="Enter your email" />
            <button className="button">Submit</button>
        </div>
    )
}

export default CustomInput;