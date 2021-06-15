import SmallLineChart from "./charts/smallLineChart";
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
                    <SmallLineChart />
                </div>
            </div>
        </div>
    )
}

export default Card