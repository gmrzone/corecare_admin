import MainLayout from "../components/common/MainLayout";
import CreateAction from '../components/common/CreateAction'
import ListTable from '../components/common/ListTable'
import ComponentWrapper from '../components/common/ComponentWrapper'
const Employees = () => {
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Employee"/>
            </ComponentWrapper>
            <ComponentWrapper>
                <ListTable />
            </ComponentWrapper>
        </MainLayout>
    )
}

export default Employees