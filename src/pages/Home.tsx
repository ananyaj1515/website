import Card from "../components/Card";
import Navbar from "../components/Navbar";
import CustomCountdown from "../components/CustomCountdown";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExploreIcon from '@mui/icons-material/Explore';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const cards = [
    {id: 1, Icon: AutoStoriesIcon, title: "Expert-led courses"},
    {id: 2, Icon: BarChartIcon, title: "Track progress"},
    {id: 3, Icon: ExploreIcon, title: "Personalised paths"},
    {id: 4, Icon: CardMembershipIcon, title: "Certificates"}
]

function Home() {
    return (
       <div>
            <Navbar />
            <h1>Welcome to Compass Learn!</h1>
            <CustomCountdown />
            {cards.map(({id, Icon, title}) => (
                <Card key={id} Icon={Icon} title={title} />
            ))}
       </div>
    )
}

export default Home;