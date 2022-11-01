import "./footer.css";
import zuri from "../../img/zuri_logo.png";
import I4G from "../../img/I4G.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={zuri} alt="zuri internship" height="30px"  />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="I4G" height="30px" />
        </div>
    )
}

export default Footer;