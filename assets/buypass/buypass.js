function buypass() {//Credit to Bypassi#7037 (integrated function)
    new PaymentRequest(
        [
            {
                supportedMethods: "https://buypass.bypassi.com/pay/main.json",
                data: {url: "https://google.com"},
            },
        ],
        {
            total: {
                label: "_",
                amount: {value: "1", currency: "USD"},
            }
        }
    ).show();
}
