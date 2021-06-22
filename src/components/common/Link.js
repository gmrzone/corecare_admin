import { useHistory } from "react-router-dom";
const Link = ({ to, className, children }) => {
    const history = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        if (history.location.pathname !== to) {
            history.push(to);
        }
    };
    return (
        <a className={className} href="to" onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
