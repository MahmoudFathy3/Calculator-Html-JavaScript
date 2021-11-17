function insert(num) {
    let myString = document.form.textview.value;
    let lastChar = myString[myString.length - 1];

    if (myString.length < 30) {
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
            document.form.textview.value = myString + num;
        } else if (num != lastChar) {
            document.form.textview.value = myString.replace(lastChar, num);
        }
    }
}
console.log(document.form.textview);

function equal() {
    let sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value = eval(sum);
    }
}

function Clear() {
    document.form.textview.value = '';
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}