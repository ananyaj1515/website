import type { SvgIconComponent } from '@mui/icons-material';
import '../css/Card.css';

function Card({Icon, title}: {Icon: SvgIconComponent; title: string}) {
    return (
        <div className="card-container">
            <Icon className="card-icon" />
            <div className="card-title">{title}</div>
        </div>
    )
}

export default Card;