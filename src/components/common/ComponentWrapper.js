import css from 'styled-jsx/macro'

const {className, styles} = css.resolve`
    .component-wrapper {
        margin: 20px 0px;
        overflow-x: auto;
        scrollbar-width: thin;          
        scrollbar-color: #595959; 
    }
    .component-wrapper::-webkit-scrollbar {
        
        height: 6px;
    }
    .component-wrapper::-webkit-scrollbar-track {
        background: #e6e6e6;
        border-radius: 20px;
    }
    .component-wrapper::-webkit-scrollbar-thumb {
        background-color: #595959; 
        border-radius: 30px;    
        
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