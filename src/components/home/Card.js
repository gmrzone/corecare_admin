const Card = ({ head, text }) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="center aligned header">{head}</div>
                <div className="center aligned description">
                <p>{text}</p>
                </div>
            </div>
            <div className="extra content">
                <div className="center aligned author">
                    {/* Add Small Chart */}
                </div>
            </div>
        </div>
    )
}

export default Card