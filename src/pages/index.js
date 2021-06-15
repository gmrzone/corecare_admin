import MainLayout from "../components/common/MainLayout";
import OrderBarChart from '../components/home/charts/OrderBarChart'
import MembersPieChart from '../components/home/charts/MembersPieChart';
import EmployeeChart from '../components/home/charts/EmployeeChart'
import style from '../style/index.module.scss'
const Index = () => {
    return (
        <MainLayout>
            <div className={style['dashboard-container']}>
                <div className={style['double-component']}>
                    <OrderBarChart />
                    <OrderBarChart />
                </div>
                <div className={style['double-component']}>
                    <MembersPieChart />
                    <EmployeeChart />
                </div>
            </div>
        </MainLayout>
    );
};

export default Index;
