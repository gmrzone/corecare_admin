import style from '../../style/index.module.scss'
const recentActiveOrders = () => {
    return (
        <div className={style['active-orders-container']}>
            <div className={style['active-orders-head']}>
                <h2>Recent Active Orders</h2>
            </div>
            <div className={style['active-orders-body']}>

            </div>
            <div className={style['active-orders-footer']}>
                
            </div>
        </div>
    )
}
export default recentActiveOrders