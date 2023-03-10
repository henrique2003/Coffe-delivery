import styled from 'styled-components'

import { background_gradient } from '../../assets'

export const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  box-sizing: border-box;
`

export const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  background: url(${background_gradient});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Flex = styled.div`
  display: flex;
  height: 100%;

  @media(max-width: 1200px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  @media(max-width: 1200px) {
    order: 2;
    max-width: 800px;
    margin: 0 auto;
  }
`

export const Title = styled.h1`
  width: 100%;
  line-height: 60px;
  font-size: 48px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.BALLO};
  font-weight: bolder;
  color: ${({ theme }) => theme.COLORS.BASE_TITLE};
`

export const Subtitle = styled.p`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  line-height: 30px;
  margin-top: 10px;
`

export const CoffeImage = styled.div`
  margin-left: 40px;
  max-width: 520px;
  width: 100%;
  margin-top: 40px;
  
  img {
    max-height: 400px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }

  @media(max-width: 1200px) {
    order: 1;
    margin: 0 auto;
    max-width: 800px;

    img {
      min-height: 600px;
    }
  }
`

export const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CoffeList = styled.div`
  margin-top: 150px;

  header {
    display: flex;
    justify-content: space-between;
    
    h3 {
      font-size: 32px;
      font-family: ${({ theme }) => theme.FONTS_FAMILY.BALLO};
      color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
      font-weight: bolder;
      margin-top: 0;
    }

    section {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
  }

  @media(max-width: 800px) {
    margin-top: 80px;
    
    header {
      justify-content: center;
      flex-direction: column;
      margin-bottom: 35px;

      h3 {
        margin-bottom: 15px;
      }

      section {
        margin-top: 0;
      }
    }
  }

  @media(max-width: 600px) {
    margin-top: 50px;

    header {
      section {
        overflow-x: scroll;
        padding-bottom: 15px;
      }
    }
  }
`

export const CoffeListContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeListMessage = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  color: ${({ theme }) => theme.COLORS.BASE_LABEL};
  margin: 200px 0;
`

export const CoffesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-bottom: 50px;

  h3 {
    text-align: center;
  }

  @media(max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
