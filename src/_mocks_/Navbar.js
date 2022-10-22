/* eslint-disable*/
import { BrowserRouter, Link } from 'react-router-dom';
import s from './Navbar.module.css';

const NavBar = () => (
  <BrowserRouter>
    <header className={s.header}>
      <Link className={s.homeLink} to="/">
        <h2 className={s.title}>Top Movies</h2>
      </Link>
    </header>
  </BrowserRouter>
);

export default NavBar;
