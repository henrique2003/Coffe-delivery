export interface ICartContextData {
  cart: ICoffe[]
  addItem: (coffe: ICoffe) => void
  removeItem: (id: number) => void
  removeAllItens: () => void
  changeCoffeQuantify: (id: number, quantify: number) => void
}

export interface ICoffe {
  id: number
  title: string
  description: string
  img: {
    src: string
    alt: string
  }
  categorys: string[]
  quantify: number
}
