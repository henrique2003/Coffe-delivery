import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { ICartContextData, ICoffe } from './types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CartContext = createContext({} as ICartContextData)

export const CartProvider: React.FC<{ children: JSX.Element }> = ({
  children
}) => {
  const [cart, setCart] = useState<ICoffe[]>([])

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('cart') as string) as ICoffe[]

    if (cartLocal && cartLocal.length > 0) {
      setCart(cartLocal)
    }
  }, [])

  function addItem(coffe: ICoffe): void {
    const cartUpdated = [...cart, coffe]

    localStorage.setItem('cart', JSON.stringify(cartUpdated))

    setCart(cartUpdated)

    toast.success('Adicionado com sucesso')
  }

  function removeItem(id: number): void {
    const cartFiltred = cart.filter(coffe => coffe.id !== id)

    localStorage.setItem('cart', JSON.stringify(cartFiltred))

    setCart(cartFiltred)

    toast.success('Removido com sucesso')
  }

  function changeCoffeQuantify(id: number, quantify: number): void {
    const updatedCart = cart.map(coffe => {
      if (coffe.id === id) {
        coffe.quantify = quantify
      }

      return coffe
    })

    localStorage.setItem('cart', JSON.stringify(updatedCart))

    setCart(updatedCart)
  }

  function removeAllItens(): void {
    setCart([])
    localStorage.removeItem('cart')
    toast.success('Removidos com sucesso')
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, removeAllItens, changeCoffeQuantify }}>
      {children}
    </CartContext.Provider>
  )
}
