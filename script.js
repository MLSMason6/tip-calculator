function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);
    const result = document.getElementById('result');


    if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
        result.textContent = 'Please enter valid numbers.';
        return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const total = bill + tipAmount;

    result.textContent = `Tip: $${tipAmount.toFixed(2)} | Total : $${total.toFixed(2)}`;
}