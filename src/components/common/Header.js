import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Header;
