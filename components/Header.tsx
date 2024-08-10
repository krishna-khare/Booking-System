import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
               <a href="#"><img src="3 line.jpg"alt="Logo"/></a>
            </div>
            <div className={styles.actions}>
                <a href="#"><svg>...</svg></a>
                <a href='#'><img src="search.png" alt="Search"/></a>
                <a href='#'><img src="cart.png" alt="Search"/></a>
                <a href="https://krishna-khare.github.io/Portfolio/"><img src="kk-image.jpg" alt="User" /></a>
            </div>
        </header>
    );
};

export default Header;
