import '../css/Title.css';

function Title({title, coloredTitle, subtitle}: {title: string, coloredTitle: string, subtitle: string}) {
    return(
        <div id="title">
            <h1>{title}</h1>
            <div id="colored-title">
                <h1>
                    {Array.from(coloredTitle).map((char, index) => (
                        <span
                            key={`${char}-${index}`}
                            className="colored-letter"
                            style={{ animationDelay: `${index * 0.09}s` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
            </div>
            <div id="subtitle">
                <h2>{subtitle}</h2>
            </div>
        </div>
    )
}

export default Title;