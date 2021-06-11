import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
        </>
    )
}

export default Header