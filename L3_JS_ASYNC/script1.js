let cart = ["shoes", "shirt", "wallets"];

function orderDetail(cart) {
    const totalProducts = cart.length;
    const totalAmount = totalProducts * 1000;

    return {
        totalProducts,
        totalAmount,
        cart
    };
}

function orderSummary(details) {
    const orderId = "OD" + Math.floor(Math.random() * 1000000); // pseudo unique ID

    return {
        ...details,
        orderId
    };
}

function paymentGateway(summary) {
    // Simulate payment success
    const paymentStatus = "Success";
    const paymentMode = "UPI"; // Static for now

    return {
        ...summary,
        paymentStatus,
        paymentMode,
        paymentDate: new Date().toLocaleString()
    };
}

function successfulOrder(order) {
    console.log("✅ ORDER PLACED SUCCESSFULLY!");
    console.log("------------------------------");
    console.log(`Order ID       : ${order.orderId}`);
    console.log(`Total Products : ${order.totalProducts}`);
    console.log(`Items          : ${order.cart.join(", ")}`);
    console.log(`Amount Paid    : ₹${order.totalAmount}`);
    console.log(`Payment Status : ${order.paymentStatus}`);
    console.log(`Payment Mode   : ${order.paymentMode}`);
    console.log(`Date & Time    : ${order.paymentDate}`);
    console.log("------------------------------\n");
}

// 🔁 Simulating Full Flow
const details = orderDetail(cart);
const summary = orderSummary(details);
const payment = paymentGateway(summary);
successfulOrder(payment);
