import React from 'react'
import { menu } from '../../menu'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
import { MenuProps } from '../../interfaces/IMenu'

export const Menu: React.FC<MenuProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<string>()
  return (
    <>
      <div onClick={() => setIsMenuOpen('open')} className={styles.burger}>
        <img
          alt="icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png"
        />
      </div>
      <div
        style={isMenuOpen === 'close' ? { display: 'none' } : { display: '' }}
        onClick={() => setIsMenuOpen('close')}
        className={styles.exit}
      >
        <span>[x]</span>
      </div>
      <div
        style={isMenuOpen === 'close' ? { display: 'none' } : { display: '' }}
        className={styles.menu}
      >
        <div className={styles.logo}>
          <img alt="Логотип Сайта" src="./Logo.png" />
        </div>

        <div className={styles.menuItems}>
          <ul>
            {menu.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <Link to={'/' + item.id}>
                  <li
                    id={item.id}
                    className={activePage === item.id ? styles.active : ''}
                    onClick={(event) => setActivePage((event.target as Element).id)}
                  >
                    {item.icon}
                    {item.title}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>

        <div className={styles.language}>
          <span>Русский</span>
        </div>
      </div>
    </>
  )
}
