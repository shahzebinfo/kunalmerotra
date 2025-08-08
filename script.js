function buyNow(productName, amount) {
    var options = {
        key: "rzp_test_your_key_here", // apna Razorpay test key yaha daalo
        amount: amount * 100, // paise me convert
        currency: "INR",
        name: "My Store",
        description: productName,
        handler: function (response) {
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9999999999"
        },
        theme: {
            color: "#2874f0"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}
