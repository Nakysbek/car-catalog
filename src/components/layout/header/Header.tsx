import React from 'react';
import Link from "next/link";
import styles from './Header.module.scss'
import {useRouter} from "next/router";

const Header = () => {

    const {pathname} = useRouter()

    return (
        <header className={styles.header}>
            <Link href={'/'} className={pathname === '/' ? styles.active : ''}>
                Home
            </Link>
            <Link href={'/about'} className={pathname === '/about' ? styles.active : ''}>
                About page
            </Link>
        </header>
    );
};

export default Header;