const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const orders = []
let maxOrderId = 1
function createOrder(productId, orderQuantity) {
    if (productId == null || orderQuantity == null) {
        return "productId and orderQuantity must not be null"
    }
    const product = products.find(p => p.id === productId);
    if (!product) {
        return "product not found"
    }
    if (orderQuantity <= 0) {
        return "Quantity must be greater than 0"
    }
    if (product.remaining < orderQuantity) {
        console.error("Out of Stock");
        return null;
    }
    // Reduce inventory levels
    product.remaining -= orderQuantity;
    const order = {
        productId: productId,
        quantity: orderQuantity
    };
    orders.push(order);
    return order;
}

function updateOrder(orderId, newQuantity) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        return "Order not found"
    }
    const product = products.find(p => p.id === order.productId);
    if (!product) {
        return "Product not found"
    }
    if (newQuantity <= 0) {
        return "Quantity must be greater than 0"
    }
    const diff = newQuantity - order.quantity;
    // If increase quantity
    if (diff > 0) {
        if (product.remaining < diff) {
            console.error("Out of Stock");
            return null;
        }
        product.remaining -= diff;
    }
    // If the quantity is reduced, return it to the warehouse.
    else {
        product.remaining += Math.abs(diff);
    }
    order.quantity = newQuantity;
    return order;
}

function deleteOrder(orderId) {
    const index = orders.findIndex(o => o.id === orderId);
    if (index === -1) {
        return "Order not found"
    }
    const order = orders[index];
    const product = products.find(p => p.id === order.productId);

    if (product) {
        product.remaining += order.quantity;
    }
    orders.splice(index, 1);
    return true;
}
// test
const o1 = createOrder(1, 5); // Create order gạo ST25
console.log("Created:", o1);
console.log("Remaining product:", products.find(p => p.id === 1));

const updated = updateOrder(o1.id, 8); // Increase quantity
console.log("Updated:", updated);
console.log("Remaining product:", products.find(p => p.id === 1));

const deleted = deleteOrder(o1.id); // Delete order
console.log("Deleted:", deleted);
console.log("Remaining product:", products.find(p => p.id === 1));