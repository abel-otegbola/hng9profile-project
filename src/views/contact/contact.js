import { useState } from "react";
import { validate } from "../../helpers/validate";
import "./contact.css"

const Contact = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [agreement, setAgreement] = useState(false)
    const [errMsg, setErrMsg] = useState({})


    const handleValidation = (e) => {
        e.preventDefault()
        setErrMsg(validate(firstname, lastname, email, message, agreement))
    }


    return (
        <form className="contact" action="/">

            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            
            <div className="fullname">
                <div className={`inputField ${errMsg.fn_err ? "error" : ""}`}>
                    <label htmlFor="first_name">First name</label>
                    <input type="text" id="first_name" placeholder="Enter your first name" onChange={(e) => setFirstname(e.target.value)} />
                    <p className="err_msg">{errMsg.fn_err && errMsg.fn_err}</p>
                </div>
                
                <div className={`inputField ${errMsg.ln_err ? "error" : ""}`}>
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" id="last_name" placeholder="Enter your last name" onChange={(e) => setLastname(e.target.value)} />
                    <p className="err_msg">{errMsg.ln_err && errMsg.ln_err}</p>
                </div>
            </div>
            
            <div className={`inputField ${errMsg.email_err ? "error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="yourname@email.com" onChange={(e) => setEmail(e.target.value)} />
                    <p className="err_msg">{errMsg.email_err && errMsg.email_err}</p>
            </div>
            
            <div className={`inputField ${errMsg.msg_err ? "error" : ""}`}>
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" placeholder="Send me a message and I'll reply as soon as possible..." onChange={(e) => setMessage(e.target.value)}></textarea>
                    <p className="err_msg">{errMsg.msg_err && errMsg.msg_err}</p>
            </div>

            <div className="agreement">
                <input type="checkbox" id="agreement" onChange={(e) => setAgreement(e.target.checked)}/>
                <label htmlFor="agreement">You agree to providing your data to Abel Otegbola who may contact you. </label>
            </div>

            <button type="submit" id="btn_submit" disabled={(agreement) ? false : true} onClick={(e) => handleValidation(e)}>Send message</button>

        </form>
    )
}

export default Contact;