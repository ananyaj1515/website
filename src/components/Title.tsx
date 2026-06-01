import '../css/Title.css';

function Title({title, coloredTitle, subtitle}: {title: string, coloredTitle: string, subtitle: string}) {
    return(
        <div id="title">
            <h1>{title}</h1>
            <div id="colored-title">
                <h1>{coloredTitle}</h1>
            </div>
            <div id="subtitle">
                <h2>{subtitle}</h2>
            </div>
        </div>
    )
}

export default Title;