import {
  american_express,
  arabic,
  cappuccino,
  cold_express,
  creamy_express,
  cuban,
  hawaiian,
  hot_chocolate,
  irish,
  latte,
  milk,
  macchiato,
  mocaccino,
  traditional
} from '../assets'

export default [
  {
    id: 0,
    quantify: 0,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: {
      src: traditional,
      alt: 'Café tradicional feito com água quente e grãos moídos'
    },
    categorys: [
      'tradicional'
    ]
  },
  {
    id: 1,
    quantify: 0,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: {
      src: american_express,
      alt: 'Café expresso diluído, menos intenso que o tradicional'
    },
    categorys: [
      'tradicional'
    ]
  },
  {
    id: 2,
    quantify: 0,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    img: {
      src: creamy_express,
      alt: 'Café expresso tradicional com espuma cremosa'
    },
    categorys: [
      'tradicional'
    ]
  },
  {
    id: 3,
    quantify: 0,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: {
      src: cold_express,
      alt: 'Bebida preparada com café expresso e cubos de gelo'
    },
    categorys: [
      'tradicional',
      'gelado'
    ]
  },
  {
    id: 4,
    quantify: 0,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: {
      src: milk,
      alt: 'Café meio a meio de expresso tradicional com leite vaporizado'
    },
    categorys: [
      'tradicional',
      'com leite'
    ]
  },
  {
    id: 5,
    quantify: 0,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: {
      src: latte,
      alt: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
    },
    categorys: [
      'tradicional',
      'com leite'
    ]
  },
  {
    id: 6,
    quantify: 0,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: {
      src: cappuccino,
      alt: 'Bebida com canela feita de doses iguais de café, leite e espuma'
    },
    categorys: [
      'tradicional',
      'com leite'
    ]
  },
  {
    id: 7,
    quantify: 0,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    img: {
      src: macchiato,
      alt: 'Café expresso misturado com um pouco de leite quente e espuma'
    },
    categorys: [
      'tradicional',
      'com leite'
    ]
  },
  {
    id: 8,
    quantify: 0,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: {
      src: mocaccino,
      alt: 'Café expresso com calda de chocolate, pouco leite e espuma'
    },
    categorys: [
      'tradicional',
      'com leite'
    ]
  },
  {
    id: 9,
    quantify: 0,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: {
      src: hot_chocolate,
      alt: 'Bebida feita com chocolate dissolvido no leite quente e café'
    },
    categorys: [
      'tradicional',
      'com leite'
    ]
  },
  {
    id: 10,
    quantify: 0,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: {
      src: cuban,
      alt: 'Drink gelado de café expresso com rum, creme de leite e hortelã'
    },
    categorys: [
      'especial',
      'gh',
      'gelado'
    ]
  },
  {
    id: 12,
    quantify: 0,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: {
      src: hawaiian,
      alt: 'Bebida adocicada preparada com café e leite de coco'
    },
    categorys: [
      'especial'
    ]
  },
  {
    id: 13,
    quantify: 0,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: {
      src: arabic,
      alt: 'Bebida preparada com grãos de café árabe e especiarias'
    },
    categorys: [
      'especial'
    ]
  },
  {
    id: 14,
    quantify: 0,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: {
      src: irish,
      alt: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'
    },
    categorys: [
      'especial',
      'alcoólico'
    ]
  }
]
