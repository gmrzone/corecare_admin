import style from '../../style/main-layout.module.scss';
const ProfileBox = () => {
    return (
    <div className={`${style['nav-right-item']} ${style['profile-box']}`}>
        <div className={style['profile-box-container']}>
            <div className={style['opener-icon']}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={style['profile-image']}>
                <img src="/default-profile.png" alt="default-pic" width={30}/>
            </div>
        </div>
        <div style={style['profile-box-dropdown']}>

        </div>
    </div>
    );
};

export default ProfileBox;
