export const validate = (firstname, lastname, email, message) => {
    let errMsg = {}
    if(firstname.length === 0) {
        errMsg.fn_err = "Please enter a firstname"
    }
    if(lastname.length === 0) {
        errMsg.ln_err = "Please enter a lastname"
    }
    if(!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
        errMsg.email_err = "Email is not valid"
    }
    if(message.length === 0) {
        errMsg.msg_err = "Please enter a message"
    }
    return errMsg;
}