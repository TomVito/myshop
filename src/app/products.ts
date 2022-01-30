export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export var productData: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SaRfgFnGqb3lHbm7GrsXpiB9Sgg7G0NvKQ&usqp=CAU',
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aEb_4YptYfpIJlaZoMqeZb5YlSD9P6TShQ&usqp=CAU',
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKm5TUoFGXte9kKQ1aDX67-rA0UbHqVkj9JQ&usqp=CAU',
    description: ''
  }
];
