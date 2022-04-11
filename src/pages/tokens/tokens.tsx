import React from 'react'
import { Category } from '../../components/Category'
import { tokens } from '../../tokens'
import { TokenItem } from '../../components/TokenItem'
import styles from './Tokens.module.scss'

export const Tokens: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('all')

  const updCategory = (name: string) => {
    setActiveCategory(name)
  }

  return (
    <div>
      <div className={styles.tokensCategory}>
        <h1>Токены Everscale</h1>
        <Category
          activeCategory={activeCategory}
          updateCategory={(e) => updCategory(e)}
        />
      </div>

      {activeCategory === 'all'
        ? tokens.map((item) => (
            <div key={item.id} className={styles.token}>
              <TokenItem {...item} />
            </div>
          ))
        : tokens
            .filter((token) => token.categories.includes(activeCategory))
            .map((item) => (
              <div key={item.id} className={styles.token}>
                <TokenItem {...item} />
              </div>
            ))}
    </div>
  )
}
