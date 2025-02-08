export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Teddy Bear",
    price: "$19.99",
    image: "/toys/teddy.webp"  // Fixed path
  },
  {
    id: 2,
    name: "Building Blocks Set",
    price: "$29.99",
    image: "/toys/blocks.jpg"
  },
  {
    id: 3,
    name: "Action Figure",
    price: "$15.99",
    image: "/toys/action.jpg"
  },
  {
    id: 4,
    name: "Board Game",
    price: "$24.99",
    image: "/toys/board.jpg"
  }
  // Add more products as needed
];