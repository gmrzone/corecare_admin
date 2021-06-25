const Wrapper = ({ children, heading }) => {
    return (
        <div style={{marginBottom: "40px"}}>
            <h2>{heading}</h2>
            {children}
        </div>
    )
}
export default Wrapper 