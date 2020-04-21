function sentence() {
    let text = `"Myślę, że jest wiele piękna
    w posiadaniu problemów.
    To jeden ze sposobów w jaki się uczymy"
    Herbie Hancock`;
    return text
}

const quote = document.getElementById("quote");

quote.innerText = sentence();