import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BASE_BUTTON};
  padding-bottom: 30px;

  @media(max-width: 500px) {
    padding-bottom: 20px;
    margin-top: 0;
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
    
  img {
    max-width: 65px;
    width: 100%;
    max-height: 65px;
  }
  
  @media(max-width: 500px) {
    img {
      max-width: 55px;
      max-height: 55px;
    }
  }
`

export const Title = styled.p`
  color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  font-size: 16px;
  margin: 0;
  
  @media(max-width: 500px) {
    font-size: 14px;
  }
`

export const Actions = styled.div`
  display: flex;
  margin-top: 10px;
  
  @media(max-width: 500px) {
    margin-top: 7px;
    width: 100%;
  }
`

export const Counter = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BASE_BUTTON};
  border-radius: 5px;
  margin-right: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  height: 35px;

  article {
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.PURPLE};
      }
    }

    p {
      font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
      color: ${({ theme }) => theme.COLORS.BASE_TITLE};
      font-size: 16px;
      line-height: 5px;
    }
  }
  
  @media(max-width: 500px) {
    margin-right: 10px;
    padding: 0 5px;
    height: 27px;

    article {
      button {
        svg {
          font-size: 13px;
        }
      }

      p {
        font-size: 14px;
        line-height: 1px;
      }
    }
  }
`

export const CartButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BASE_BUTTON};
  border-radius: 5px;
  outline: none;
  border: none;
  transition: all .2s ease;
  height: 35px;
  padding: 0 10px;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BASE_TEXT};
  display: flex;
  
  span {
    margin-left: 4px;
    margin-top: 11px;
    text-transform: uppercase;
  }
  
  svg {
    text-align: center;
    font-size: 16px;
    margin-top: 9px;
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }
  
  @media(max-width: 500px) {
    height: 27px;
    padding: 0 7px;
    font-size: 11px;

    span {
      margin-top: 7px;
      display: none;
    }

    svg {
      font-size: 14px;
      margin-top: 6px;
    }
  }
`

export const Price = styled.p`
  color: ${({ theme }) => theme.COLORS.BASE_TEXT};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.ROBOTO};
  font-weight: bold;
  font-size: 18px;
  margin-top: 0;
  
  @media(max-width: 500px) {
    font-size: 16px;
    white-space: nowrap;
  }
`
