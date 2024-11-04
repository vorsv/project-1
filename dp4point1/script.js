function checkSpam() {
    const emailContent = document.getElementById('emailContent').value;
    const tokens = emailContent.toLowerCase().split(/\s+/);
    const spamKeywords = ['win', 'free', 'prize', 'click', 'claim', 'urgent'];
    let isSpam = false;

    for (let token of tokens) {
        if (spamKeywords.includes(token)) {
            isSpam = true;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (isSpam) {
        resultElement.textContent = 'The email is likely spam!';
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = 'The email seems legitimate.';
        resultElement.style.color = 'green';
    }
}
