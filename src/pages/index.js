import MainLayout from "../components/common/MainLayout";
import AreaChart from '../components/home/charts/AreaChart'
import MembersPieChart from '../components/home/charts/MembersPieChart';
import EmployeeChart from '../components/home/charts/EmployeeChart'
import style from '../style/index.module.scss'
import OrderStatsList from '../components/home/OrderStatsList'
import DateRangePicker from "../components/common/DateRangeFilter";
const Index = () => {
    return (
        <MainLayout>
            <div className={style['dashboard-container']}>
                <DateRangePicker />
                <OrderStatsList />
                <div className={style['double-component']}>
                    <AreaChart heading="Orders" data={[300, 295, 200, 300, 600, 800, 100, 400, 300, 250, 560, 196]} target={300} chartBG='rgba(54, 162, 235, 0.4)' chartBorder="rgba(0, 7, 102, 0.8)" LineColor='#d93025'/>
                    <AreaChart heading="Sales" data={ [5900, 4950, 1000, 8320, 8600, 4800, 3100, 2400, 10300, 9250, 5560, 4196]} target={5000} chartBG='rgba(255, 99, 132, 0.4)' chartBorder="rgba(0, 7, 102, 0.8)" LineColor='rgba(0, 7, 102, 0.8)'/>
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
