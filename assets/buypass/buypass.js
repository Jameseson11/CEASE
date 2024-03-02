function buypass() {
    new PaymentRequest(
        [
            {
                supportedMethods: location.origin + "/pay/main.json",
                data: { url: document.querySelector("url-input").value },
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
