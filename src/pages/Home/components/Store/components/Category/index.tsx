import * as S from './styles'

interface IProps {
  text: string
  currentCategory: string[]
  changeCurrentCategoryItem: (text: string) => void
}

const Category: React.FC<IProps> = ({ text, currentCategory, changeCurrentCategoryItem }) => {
  function handelActive(): string[] {
    return currentCategory.filter(categotyItem => categotyItem === text)
  }

  return (
    <S.Container
      onClick={() => changeCurrentCategoryItem(text)}
      active={!(handelActive().length <= 0)}
    >
      {text}
    </S.Container>
  )
}

export default Category
