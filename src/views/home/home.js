import Links from '../../components/links/links';
import Profile from '../../components/profile/profile';
import Socials from '../../components/socials/socials';
import Share from '../../components/share/share';

const Home = () => {
    return (
        <div className="home">
            <Share />
            <Profile />
            <Links />
            <Socials />
        </div>
    )
}

export default Home;