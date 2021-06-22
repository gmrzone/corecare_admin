import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ListTable from "../components/common/ListTable";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
const Services = () => {
    const tableData = [
        {
            name: "Window AC Service",
            subcategory: "AC Service",
            price: "449.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Wallpaper / Stencils Consultation",
            subcategory: "Wallpaper / Stencils",
            price: "2600.56",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Wood Polishing Consultation",
            subcategory: "Wood Polishing",
            price: "999.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Drill and Hang",
            subcategory: "Drill/Hang",
            price: "256.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Channel Repair",
            subcategory: "Cupboard / Drawer",
            price: "149.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "AC Switchbox Installation",
            subcategory: "Switch/Socket",
            price: "319.00",
            active: "true",
            created: "1 Day ago",
        },
        {
            name: "Geyser Installation",
            subcategory: "Appliances",
            price: "650.00",
            active: "true",
            created: "1 Day ago",
        },
    ];
    const tableHead = ["Name", "Category", "Price", "Active", "Created"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr style={{ cursor: "pointer" }} key={i}>
                <td>{x.name}</td>
                <td>{x.subcategory}</td>
                <td>{x.price}</td>
                <td>{x.active}</td>
                <td>{x.created}</td>
            </tr>
        );
    });
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Service" />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Services;
