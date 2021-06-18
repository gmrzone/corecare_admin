import MainLayout from "../components/common/MainLayout";
import CreateAction from '../components/common/CreateAction'
import ListTable from '../components/common/ListTable'
import ComponentWrapper from '../components/common/ComponentWrapper'
import DatePicker from '../components/common/DatePicker'
import DateRangePicker from "../components/common/DateRangeFilter";
const Coupons = () => {
    const tableData = [
        {
            id: 1234546,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        },
        {
            id: 2234596,
            code: "FIRSTORDER",
            category: "Cleaner",
            discount: "20%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        },
        {
            id: 3123654,
            code: "CORECR_21",
            category: "All",
            discount: "10%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        },
        {
            id: 4456321,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        },
        {
            id: 5856324,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        },
        {
            id: 6963254,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        },
        {
            id: 7963254,
            code: "CORECR_21",
            category: "All",
            discount: "21%",
            from: "Jun 14 2021",
            to: "Jun 14 2022",
            
        }
    ]
    const tableHead = [
        "Code",
        "Category",
        "Discount",
        "Valid from",
        "Valid to"

    ]
    const tableBody = tableData.map((x) => {
        return  (
            <tr style={{cursor: 'pointer'}} key={x.id}>
                <td>{x.code}</td>
                <td>{x.category}</td>
                <td>{x.discount}</td>
                <td>{x.from}</td>
                <td>{x.to}</td>
            </tr>
        )
    })
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Coupon"/>
            </ComponentWrapper>
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody}/>
            </ComponentWrapper>
                {/* <DatePicker /> */}
                <DateRangePicker />
        </MainLayout>
    )
}

export default Coupons