import "./profile.css";
import profile_img from "../../img/profile_img.png";
import camera from "../../img/camera.png";

const Profile = () => {
    return (
        <div className="profile">
        
            <div className="profile__img">
                <img src={profile_img} id="profile__img" alt="profile" width="100px"/>
                <div className="edit">
                    <img src={camera} alt="edit profile" width="25px" />
                </div>
            </div>


            <h2 className="username__twitter" id="twitter">Abel_Otegbola</h2>

            <h2 className="username__slack" id="slack">abelotegbola</h2>

        </div>
    )
}

export default Profile;
