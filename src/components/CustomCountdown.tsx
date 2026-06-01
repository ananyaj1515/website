import Countdown from 'react-countdown';
import '../css/CustomCountdown.css';

function CountdownBox({label, value}: {label: string; value: any}) {
    return (
        <div className="countdown-box">
            <div className="countdown-value">
                {String(value).padStart(2, '0')}
            </div>
            <div className="countdown-label">
                {label.toUpperCase()}
            </div>
        </div>
    );
}

function renderer({days, hours, minutes, seconds, completed}: {days: number; hours: number; minutes: number; seconds: number; completed: boolean}) {
    if (completed) {
        return <h1>Launch Time</h1>
    }
    return (
        <div className="countdown-container">
            <CountdownBox label="Days" value={days} />
            <CountdownBox label="Hours" value={hours} />
            <CountdownBox label="Minutes" value={minutes} />
            <CountdownBox label="Seconds" value={seconds} />
        </div>
    );
}

function CustomCountdown() {
    return (
        <>
            <Countdown date={new Date('2026-08-01T00:00:00')} 
                renderer={renderer}
            />
        </>
    )
}

export default CustomCountdown;