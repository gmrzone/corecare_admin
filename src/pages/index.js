import MainLayout from "../components/common/MainLayout";
import OrderBarChart from '../components/home/charts/OrderBarChart'
import MembersPieChart from '../components/home/charts/MembersPieChart';
import EmployeeChart from '../components/home/charts/EmployeeChart'
const Index = () => {
    return (
        <MainLayout>
            <div>
                <OrderBarChart />
                <MembersPieChart />
                <EmployeeChart />
            </div>
        </MainLayout>
    );
};

export default Index;
