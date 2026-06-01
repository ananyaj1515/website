import "../css/Connect.css";

function Connect({children}: {children?: React.ReactNode}) {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Connect;