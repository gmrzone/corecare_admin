
const ListTable = ({ headData, bodyData}) => {
    const renderHead = headData.map(x => {
        return (
            <th key={x} className="three wide">{x}</th>
        )
    })

    return (
        <table className="ui table striped  padded single line unstackable selectable">
            <thead> 
                <tr>
                    {renderHead}
                </tr>
            </thead>
            <tbody>
                {bodyData}
            </tbody>
        </table>
    )
}

export default ListTable