import React from 'react'
import { TokenProps } from '../../interfaces/IToken'
import { tokens } from '../../tokens'
import styles from './Token.module.scss'

export const Token: React.FC<TokenProps> = ({ setActivePage }) => {
  const tokenSymbol = window.location.pathname.split('/')[2]
  const token = tokens.find((token) => token.symbol === tokenSymbol)
  setActivePage('')

  return (
    <div className={styles.tokenPage}>
      <h1>{token?.name}</h1>
      <p>Тестовое задание не предусматривает реализацию контента здесь.</p>
    </div>
  )
}
