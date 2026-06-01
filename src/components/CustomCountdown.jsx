import Countdown from 'react-countdown';

function CustomCountdown() {
    return (
        <>
            <Countdown date={new Date('2026-08-01T00:00:00')} />
        </>
    )
}

export default CustomCountdown;