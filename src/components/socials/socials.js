import "./socials.css"
import slack_icon from "../../img/slack.png";
import github_icon from "../../img/github_icon.png"

const Socials = () => {
    return (
        <div className="socials">
            <a href="htpps://hng9.slack.com"><img src={slack_icon} alt="slack" title="slack" width="25px" /></a>
            <a href="https://github.com/abel-otegbola/hng9profile-project"><img src={github_icon} alt="github" title="github" width="25px" /></a>
        </div>
    )
}

export default Socials;