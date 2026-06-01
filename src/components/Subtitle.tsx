import '../css/Subtitle.css';

function Subtitle({subtitle}: {subtitle: string}) {
    return (
        <div className="subtitle">
            <h2>{subtitle}</h2>
        </div>
    )
}

export default Subtitle;