import "./successPopup.css";
import success from "../../img/success.gif";

const SuccessPopup = () => {
    return (
        <div className="success__popup">
            <div className="success__popup--msg">
                <img src={success} alt="success message" width="150px" />
                <h3>Thank you!</h3>
                <p>Your submission has been sent successfully</p>
                <a href="/">Return home</a>
            </div>
        </div>
    )
}

export default SuccessPopup;