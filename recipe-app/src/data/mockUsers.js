import userphoto101 from '../assets/Ellipse.svg';

const user = [
    {
      id: "user1",
      name: "Diana Nelson",
      bio: "Люблю готувати та ділитися рецептами.",
      followers: 120,
      following: 80,
      recipes: ["recipe1", "recipe3","recipe7"], // IDs рецептів
      profilePhoto: userphoto101,
    },
    {
      id: "user2",
      name: "Андрій Петров",
      bio: "Традиційні рецепти з душею. Знаю всі секрети ідеального борщу.",
      followers: 530,
      following: 250,
      recipesCount: 45,
      recipes: ["recipe2", "recipe4", "recipe8"],
      profilePhoto: "/images/user2.jpg",
    },
    {
      id: "user3",
      name: "Марія Коваленко",
      profilePhoto: "/images/user103.jpg",
      bio: "Подорожую світом через кулінарію. Особливий акцент на азійській кухні.",
      followers: 320,
      following: 200,
      recipesCount: 35,
      recipes: ["recipe5", "recipe6", "recipe9","recipe10", "recipe11","recipe12", "recipe13","recipe14","recipe15"]
    }
  ];
  
export default user;
  