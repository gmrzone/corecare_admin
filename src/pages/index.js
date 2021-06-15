import MainLayout from "../components/common/MainLayout";
import AreaChart from '../components/home/charts/AreaChart'
import MembersPieChart from '../components/home/charts/MembersPieChart';
import EmployeeChart from '../components/home/charts/EmployeeChart'
import style from '../style/index.module.scss'
import OrderStatsList from '../components/home/OrderStatsList'
const Index = () => {
    return (
        <MainLayout>
            <div className={style['dashboard-container']}>
                <OrderStatsList />
                <div className={style['double-component']}>
                    <AreaChart heading="Orders"/>
                    <AreaChart heading="Sales"/>
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
