import css from 'styled-jsx/macro'

const {className, styles} = css.resolve`
    .component-wrapper {
        margin: 20px 0px;
        overflow-x: auto;
        scrollbar-width: thin;          
        scrollbar-color: black; 
    }
    .component-wrapper::-webkit-scrollbar {
        
        height: 6px;
    }
    .component-wrapper::-webkit-scrollbar-track {
        background: white;
        border: 1px solid black;
        border-radius: 20px;
    }
    .component-wrapper::-webkit-scrollbar-thumb {
        background-color: black;  
        border-radius: 20px;      
        
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