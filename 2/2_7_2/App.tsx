import { useState } from 'react';

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 2,
    },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(initialProducts);

    function handleIncreaseClick(productId: number) {
        setProducts(
            products.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        count: product.count + 1,
                    };
                } else {
                    return product;
                }
            })
        );
    }

    function handleDecreaseClick(productId: number) {
        setProducts(
            products
                .map((product) => {
                    if (product.id === productId) {
                        const newCount = product.count - 1;
                        if (newCount === 0) {
                            return null; // помечаем на удаление
                        }
                        return {
                            ...product,
                            count: newCount,
                        };
                    } else {
                        return product;
                    }
                })
                .filter(product => product !== null) // удаляем null элементы
        );
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} (<b>{product.count}</b>)
                    <button
                        onClick={() => {
                            handleIncreaseClick(product.id);
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            handleDecreaseClick(product.id);
                        }}
                    >
                        –
                    </button>
                </li>
            ))}
        </ul>
    );
}