export interface ICategory {
  id: string
  title: string
}

export interface CategoryProps {
  updateCategory: (event: string) => void
  activeCategory: string
}
