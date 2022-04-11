import React from 'react'
import { CategoryProps, ICategory } from '../../interfaces/ICategory'
import { categories } from '../../tokens'
import styles from './Category.module.scss'

export const Category: React.FC<CategoryProps> = ({ activeCategory, updateCategory }) => {
  return (
    <div className={styles.category}>
      <ul>
        {categories.map((category: ICategory) => (
          <li
            onClick={(event) => updateCategory((event.target as Element).id)}
            key={category.id}
            id={category.id}
            className={activeCategory === category.id ? styles.active : ''}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
