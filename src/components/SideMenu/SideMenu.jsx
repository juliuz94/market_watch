import React from 'react'

import styles from './SideMenu.module.css';

function SideMenu() {
    return (
        <div className={styles.sidebar}>
            <h6>Global indicators</h6>
            <ul>
                <li>
                    <a href="/historical-prices">Historical Prices</a>
                </li>
                <li>
                <a href="/pmi">PMI</a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
