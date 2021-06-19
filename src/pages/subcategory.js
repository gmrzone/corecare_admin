import MainLayout from "../components/common/MainLayout";
import CreateAction from '../components/common/CreateAction'
import ListTable from '../components/common/ListTable'
import ComponentWrapper from '../components/common/ComponentWrapper'
import DateRangePicker from "../components/common/DateRangeFilter";
const Subcategory = () => {
    const tableData = [
        {
            name: "AC Service Consultation",
            category: "AC Expert",
            created: "1 Day ago",
            
        },
        {
            name: "Wallpaper / Stencils",
            category: "Painter",
            created: "1 Day ago",
            
        },
        {
            name: "Sofa Shampooing",
            category: "Cleaner",
            created: "1 Day ago",
            
        },
        {
            name: "Furniture Assembly",
            category: "Carpenter",
            created: "1 Day ago",
            
        },
        {
            name: "Minor Installation",
            category: "Plumber",
            created: "1 Day ago",
            
        },
        {
            name: "Room Heater",
            category: "Electrician",
            created: "1 Day ago",
            
        },
        {
            name: "Switch/Socket",
            category: "Electrician",
            created: "1 Day ago",
            
        }
    ]
    const tableHead = [
        "Name",
        "Category",
        "Created"

    ]
    const tableBody = tableData.map((x, i) => {
        return  (
            <tr style={{cursor: 'pointer'}} key={i}>
                <td>{x.name}</td>
                <td>{x.category}</td>
                <td>{x.created}</td>
            </tr>
        )
    })
    return (
        <MainLayout>
             <ComponentWrapper>
                <CreateAction forPage="Subcategory"/>
             </ComponentWrapper>
             <DateRangePicker />
             <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody}/>
             </ComponentWrapper>
        </MainLayout>
    )
}

export default Subcategory