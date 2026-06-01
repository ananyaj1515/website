import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CustomCountdown from "../components/CustomCountdown";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExploreIcon from '@mui/icons-material/Explore';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Logo from '../assets/logo.png';
import Title from "../components/Title";
import Connect from "../components/Connext";
import Subtitle from "../components/Subtitle";
import CustomInput from "../components/CustomInput";
import SocialFooter from "../components/SocialFooter";

const cards = [
    {id: 1, Icon: AutoStoriesIcon, title: "Expert-led courses"},
    {id: 2, Icon: BarChartIcon, title: "Track progress"},
    {id: 3, Icon: ExploreIcon, title: "Personalised paths"},
    {id: 4, Icon: CardMembershipIcon, title: "Professional development"}
]

function Home() {
    return (
       <div>
            <Navbar/>
            <img src={Logo} alt="Compass Learn Logo" style={{ width: '200px', height: '150px' }} />
            <Title title="Learning that guides you in the" coloredTitle="right direction" subtitle="We're building something special - a smarter way to learn, grow, and navigate your educational journey. School leaders & parents, stay tuned!!
" />
            <CustomCountdown />
            <Connect>
                <Subtitle subtitle='Got thoughts on education? Love tech? Constantly asking "Why is this still done this way?"'/>
                <Subtitle subtitle="Drop your email. Let's talk. No corporate jargon, no awkward networking. Just good conversations — and who knows what might happen next..."/>
                <CustomInput />
                <div style={{flexDirection: 'row'}}>
                    {cards.map(({id, Icon, title}) => (
                        <Card key={id} Icon={Icon} title={title} />
                    ))}
                </div>
            </Connect>
            <SocialFooter />
            
       </div>
    )
}

export default Home;