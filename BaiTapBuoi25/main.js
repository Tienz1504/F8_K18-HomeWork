const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

function getTopRevenueProduct(products, orders) {
    const revenueMap = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            if (product) {
                const revenue = product.price * item.quantity;
                revenueMap[item.productId] = (revenueMap[item.productId] || 0) + revenue;
            }
        });
    });

let maxRevenue = 0;
let topProduct = null;
for (const product of products) {
    const revenue = revenueMap[product.id] || 0;
    if (revenue > maxRevenue) {
        maxRevenue = revenue;
        topProduct = product;
    }
}

return { product: topProduct, revenue: maxRevenue };

}
const result = getTopRevenueProduct(products, orders);
console.log("Top Revenue Product:", result.product.name);
console.log("Revenue:", result.revenue)

