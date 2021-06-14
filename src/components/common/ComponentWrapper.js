import css from 'styled-jsx/macro'

const {className, styles} = css.resolve`
    .component-wrapper {
        margin: 20px 0px;
    }
`
const ComponentWrapper = ({ children }) => {
    return (
        <div className={className + " component-wrapper"}>
            {children}
            {styles}
        </div>
    )
}

export default ComponentWrapper