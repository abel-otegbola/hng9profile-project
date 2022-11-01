import "./share.css";
import share_icon from "../../img/Icon.png";
import dots_icon from "../../img/dots.png";

const Share = () => {
    return (
        <div className="share">
            <img src={share_icon} className="share__icon" alt="share" width="20px" title="Share link" />
            <img src={dots_icon} className="option__icon" alt="option" width="20px" title="option link" />
        </div>
    )
}

export default Share;