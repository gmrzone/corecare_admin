
import css from 'styled-jsx/macro';
import MainLayout from '../components/common/MainLayout'

const desktop_size = 40;
const mobile_size = 20;

const { className, styles } = css.resolve`
  .saiyed { color: green }

  .surname {
    font-size: ${mobile_size}px;
  }

  @media (min-width: 992px) {
    .surname {
      font-size: ${desktop_size}px;
    }
  }
`
const Index = () => {
    return (
        <MainLayout>
            <div>
                <h1 className={className + " saiyed"}>Afzal</h1>
                <p className={className + " surname"}>Saiyed</p>
                {styles}
            </div>
        </MainLayout>
    )
}

export default Index