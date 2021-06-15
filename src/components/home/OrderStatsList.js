import style from '../../style/index.module.scss';
import Card from './Card'
const OrderStatusList = () => {
    return (
        <div className={style['orders-stats']}>
            <Card head="Total Orders" text="9846"/>
            <Card head="Fullfilled Orders" text="8003"/>
            <Card head="Pending Orders" text="1569"/>
            <Card head="Active Orders" text="301"/>
        </div>
    )
}

export default OrderStatusList