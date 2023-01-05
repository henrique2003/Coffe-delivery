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
  height: 500px;

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
  word-break: break-all;
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
    margin-bottom: 40px;
    max-width: 800px;

    img {
      max-height: 600px;
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
