import Product from '../models/Product';

let BestSellingProducts: Product[] = [
    {
        name: '6 Buttons',
        code: 'A126032016',
        description: 'This is a set of six 1" Back to the Future pinback buttons. Multiple sets available, just send me a message!',
        price: 3.00,
        availability: true,
        smallImage: 'img/6btn.jpg',
        bigImage: 'img/6btnBig.jpg',
        quantity: 10
    },
    {
        name: 'Future T-Shirt',
        code: 'A226032016',
        description: 'Distressed Delorean Back to the Future T-Shirt',
        price: 14.00,
        availability: true,
        smallImage: 'img/tshirt1.jpg',
        bigImage: 'img/tshirt1Big.jpg',
        quantity: 20
    },
    {
        name: 'Custom Autos Shirt',
        code: 'A326032016',
        description: 'You say you want a custom ride? No problem!',
        price: 22.00,
        availability: true,
        smallImage: 'img/tshirt2.jpg',
        bigImage: 'img/tshirt1Big.jpg',
        quantity: 5
    },
    {
        name: 'Messenger Bag',
        code: 'A426032016',
        description: 'DeLorean Dashboard - Back To The Future Inspired Messenger Bag',
        price: 29.00,
        availability: true,
        smallImage: 'img/bag1.jpg',
        bigImage: 'img/bag1Big.jpg',
        quantity: 9
    },
    {
        name: '50 Fifty Mug, Black',
        code: 'A526032016',
        description: '50 Fifty Concepts Back to the Future Mug, Black',
        price: 3.00,
        availability: true,
        smallImage: 'img/mug1.jpg',
        bigImage: 'img/mug1Big.jpg',
        quantity: 3
    }
];

export default BestSellingProducts;
