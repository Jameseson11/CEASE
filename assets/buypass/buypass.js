function buypass() {
    new PaymentRequest(
        [
            {
                supportedMethods: location.origin + "/pay/main.json",
                data: { url: "https://google.com"},
            },
        ],
        {
            total: {
                label: "_",
                amount: { value: "1", currency: "USD" },
            },
        }
    ).show();
}

document.querySelector("script-btn").onclick = buypass;
