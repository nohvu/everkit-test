import React from 'react'
import styles from './TokenItem.module.scss'
import { Link } from 'react-router-dom'
import { svg } from '../../assets/images/svg'
import { TokenItemProps } from '../../interfaces/ITokenItem'

export const TokenItem: React.FC<TokenItemProps> = (item) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const handleClickVisible = () => {
    setIsVisible((prev) => !prev)
  }
  return (
    <>
      <div className={styles.token}>
        <div className={styles.tokenID}>
          <span>#{item.id}</span>
        </div>

        <div className={styles.tokenLogo}>
          <img src={item.logoURI} alt="Токен" />
        </div>

        <div className={styles.tokenName}>
          <Link to={'/tokens/' + item.symbol}>
            <span>{item.name}</span>
          </Link>
          <span className={styles.blueInfo}>{item.symbol}</span>
        </div>

        <div className={styles.tokenPriceInfo}>
          <span className={styles.blueInfo}>{item.price.toLocaleString('ru-RU')} $</span>

          <div className={styles.tokenPriceChange}>
            <span
              className={
                item.priceChange.hours24 > 0
                  ? styles.green
                  : item.priceChange.hours24 < 0
                  ? styles.red
                  : styles.gray
              }
            >
              {item.priceChange.hours24 > 0 && '+'}
              {item.priceChange.hours24}%
            </span>

            <div className={styles.point}>{svg.point}</div>

            <span
              className={
                item.priceChange.days7 > 0
                  ? styles.green
                  : item.priceChange.days7 < 0
                  ? styles.red
                  : styles.gray
              }
            >
              {item.priceChange.days7 > 0 && '+'}
              {item.priceChange.days7}%
            </span>

            <div className={styles.point}>{svg.point}</div>
            <span
              className={
                item.priceChange.days365 > 0
                  ? styles.green
                  : item.priceChange.days365 < 0
                  ? styles.red
                  : styles.gray
              }
            >
              {item.priceChange.days365 > 0 && '+'}
              {item.priceChange.days365}%
            </span>
          </div>
        </div>

        <div className={styles.volumeInfo}>
          <span>{item.volume.toLocaleString('ru-RU')} $</span>
          <span className={styles.percent}>{item.volumeChangePercentage}%</span>
        </div>

        <div className={styles.tvlInfo}>
          <span>{item.tvl.toLocaleString('ru-RU')} $</span>
          <span className={styles.percent}>{item.tvlChangePercentage}%</span>
        </div>

        <div className={styles.accInfo}>
          {svg.userLogo}
          <span>{item.users.toLocaleString('ru-RU')}</span>
        </div>

        <div className={isVisible ? styles.chevron : ''} onClick={handleClickVisible}>
          {svg.chevron}
        </div>
      </div>

      {isVisible && <p>{item.description}</p>}
    </>
  )
}
