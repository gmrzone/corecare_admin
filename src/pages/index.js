import MainLayout from "../components/common/MainLayout";
import OrderBarChart from '../components/home/charts/OrderBarChart'



const Index = () => {
    return (
        <MainLayout>
            <div>
                <OrderBarChart />
            </div>
        </MainLayout>
    );
};

export default Index;
