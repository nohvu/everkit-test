import React from 'react'
import styles from './Search.module.scss'
import { tokens } from '../../tokens'
import { TokenItem } from '../../components/TokenItem'

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('')

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className={styles.search}>
      <h1>Поиск</h1>
      <div className={styles.input}>
        <input
          onChange={changeInputValue}
          value={searchValue}
          type="text"
          placeholder="Поиск..."
        />
      </div>
      {/* <p>Тестовое задание не предусматривает реализацию контента здесь.</p> */}

      {searchValue && <h3>Результат поиска:</h3>}
      {tokens
        .filter((el) => el.symbol.toLowerCase() === searchValue.toLowerCase())
        .map((token) => (
          <div key={token.id} className={styles.token}>
            <TokenItem {...token} />
          </div>
        ))}
    </div>
  )
}
