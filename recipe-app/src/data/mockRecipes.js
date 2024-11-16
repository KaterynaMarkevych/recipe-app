import image1 from "../assets/popular_recipe1.svg";
import image2 from "../assets/popular_recipe2.jpg";
import image3 from "../assets/popular_recipe3.jpg";
import userphoto101 from '../assets/Ellipse.svg';
const recipes = [
  {
    id: "recipe1",
    name: 'Буряковий борщ',
    image: image1,
    ingredients: ['2шт буряк', '5шт картопля', '1 морква', '1 цибуля', '1 куряче філе','30г томатної пасти', '2.5л води','зелень'],
    rating: 4.5,
    time: 'від 30 хвилин до 1 години',
    portions:'4-6',
    cuisine_type: {
      diet: {
          безглютенова: true,
          безмолочна: true,
          vegetarian: false,
          vegan: false,
          низьковуглевондна: true
      },
      cuisine: {
        Італійська: false,
        Французька: false,
          Українська: true,
          Японська: false,
          Китайська: false,
          Індійська: false,
          Мексиканська: false
      }
    },
    description: 'Смачний український борщ з м’ясом і овочами.',
    nutrition: {
      calories: 250,
      protein: 7,
      fats: 8,
      carbs: 35,
    },
    instructions: [
      "Підготуйте овочі: наріжте буряк, капусту, моркву, цибулю та картоплю.Буряк очистити, та відварити до напівготовності хвилин 30. Остудити та натерти на крупній тертці",
      "Філе порізати на шматочки, картоплю почистити і подрібнити. М'ясо з картоплею додати до каструлі де варився буряк, варити хвилин 15-20.",
      "Цибулю подрібнити. Буряк цибулю тушкувати на вершковому маслі, в кінці додати томат.",
      "Зтушкований буряк додати до кастрюлі, додати спеції за смаком, долити води.",
      "Готуйте до готовності овочів, додайте зелень при подачі за бажанням."
    ],
    user: [
      {
        id: 101,
      name: "Diana Nelson",
      profilePhoto: "/images/user101.jpg",
      bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
      followers: 245,
      following: 180,
      recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe2",
    name: 'Плов',
    image: image2,
    ingredients: ['рис', 'морква', 'цибуля', 'м’ясо', 'спеції'],
    rating: 4.8,
    description: 'Традиційний узбецький плов з рисом і м’ясом.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 300,
      protein: 12,
      fats: 10,
      carbs: 40,
    },
    instructions: [
      "Наріжте моркву і цибулю.",
      "Підсмажте м’ясо, додайте овочі.",
      "Додайте рис і спеції, залийте водою.",
      "Тушкуйте на слабкому вогні до готовності."
    ],
    user: [
      {
      id: "user2",
      name: "Андрій Петров",
      bio: "Традиційні рецепти з душею. Знаю всі секрети ідеального борщу.",
      followers: 530,
      following: 250,
      recipesCount: 45,
      recipes: ["recipe2", "recipe4", "recipe8"],
      profilePhoto: "/images/user2.jpg",}
    ]
    
  },
  {
    id: "recipe3",
    name: 'Вареники з картоплею',
    image: image3,
    ingredients: ['борошно', 'картопля', 'цибуля', 'сметана'],
    rating: 4.3,
    description: 'Смачні вареники з картоплею та підсмаженою цибулею.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 220,
      protein: 5,
      fats: 6,
      carbs: 35,
    },
    instructions: [
      "Приготуйте тісто з борошна і води.",
      "Зваріть і розімніть картоплю з обсмаженою цибулею.",
      "Сформуйте вареники з начинкою.",
      "Зваріть вареники у підсоленій воді до готовності."
    ],
    authorId: "user1",
  },
  {
    id: "recipe4",
    name: 'Олів’є',
    image: '/images/olivier.jpg',
    ingredients: ['картопля', 'морква', 'огірок', 'горошок', 'ковбаса'],
    rating: 4.6,
    description: 'Класичний новорічний салат Олів’є.',
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user2",
  },
  {
    id: "recipe5",
    name: 'Салат Цезар',
    image: '/images/caesar.jpg',
    ingredients: ['курка', 'салат', 'пармезан', 'соус цезар', 'помідори'],
    rating: 4.7,
    description: 'Популярний салат з куркою, сиром і спеціальним соусом.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      },
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user3",
  },
  {
    id: "recipe6",
    name: 'Піца Маргарита',
    image: '/images/margherita.jpg',
    ingredients: ['борошно', 'помідори', 'моцарела', 'базилік'],
    rating: 4.9,
    description: 'Класична італійська піца з томатами і моцарелою.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user3",
  },
  {
    id: "recipe7",
    name: 'Біфстроганов',
    image: '/images/beefstrog.jpg',
    ingredients: ['яловичина', 'цибуля', 'сметана', 'гриби'],
    rating: 4.4,
    description: 'Апетитне м’ясо з грибами в сметанному соусі.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user1",
  },
  {
    id: "recipe8",
    name: 'Томатний суп',
    image: '/images/tomato_soup.jpg',
    ingredients: ['помідори', 'цибуля', 'базилік', 'часник'],
    rating: 4.2,
    description: 'Легкий і корисний суп з томатів і базиліку.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user2",
  },
  {
    id: "recipe9",
    name: 'Шашлик',
    image: '/images/shashlik.jpg',
    ingredients: ['свинина', 'цибуля', 'спеції', 'оцет'],
    rating: 4.9,
    description: 'Соковитий шашлик з маринованою свининою.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ], 
    authorId: "user3",
  },
  {
    id: "recipe10",
    name: 'Капусняк',
    image: '/images/kapusnyak.jpg',
    ingredients: ['капуста', 'картопля', 'сало', 'морква', 'цибуля'],
    rating: 4.5,
    description: 'Традиційний український суп з капустою і салом.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user3",
  },
  {
    id: "recipe11",
    name: 'Сирники',
    image: '/images/syrnyky.jpg',
    ingredients: ['сир', 'борошно', 'яйце', 'сметана'],
    rating: 4.8,
    description: 'Пишні сирники з домашнього сиру.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      "Відваріть і наріжте овочі та ковбасу.",
      "Змішайте всі інгредієнти.",
      "Додайте майонез і перемішайте.",
      "Приправте за смаком і подавайте."
    ],
    authorId: "user3",
  },
  {
    id: "recipe12",
    name: 'Баклажани по-грецьки',
    image: '/images/eggplant_greek.jpg',
    ingredients: ['баклажани', 'помідори', 'часник', 'оливкова олія'],
    rating: 4.3,
    description: 'Смачні баклажани з томатним соусом та спеціями.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
  },
  {
    id: "recipe13",
    name: 'Різотто',
    image: '/images/risotto.jpg',
    ingredients: ['рис', 'гриби', 'цибуля', 'пармезан'],
    rating: 4.7,
    description: 'Італійське різотто з вершковим смаком і грибами.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    authorId: "user3",
  },
  {
    id: "recipe14",
    name: 'Млинці',
    image: '/images/pancakes.jpg',
    ingredients: ['борошно', 'яйце', 'молоко', 'масло'],
    rating: 4.6,
    description: 'Домашні млинці, які ідеально підходять для сніданку.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    authorId: "user3",
  },
  {
    id: "recipe15",
    name: 'Бісквітний торт',
    image: '/images/sponge_cake.jpg',
    ingredients: ['борошно', 'цукор', 'яйце', 'ваніль'],
    rating: 4.8,
    description: 'Ніжний бісквітний торт з легкою текстурою.',
    cuisine_type: {
      diet: {
          glutenfree: true,
          dairyfree: true,
          vegetarian: false,
          vegan: false,
          lowcarb: true
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    authorId: "user3",
  }
];

export default recipes;
