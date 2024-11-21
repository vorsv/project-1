const natural = require('natural');

const tokenizer = new natural.WordTokenizer();

const classifier = new natural.BayesClassifier();

classifier.addDocument('Get cheap meds now', 'spam');
classifier.addDocument('Congratulations! You won a lottery', 'spam');
classifier.addDocument('Hello, I hope you are doing well', 'not spam');
classifier.addDocument('Meeting rescheduled to tomorrow', 'not spam');

classifier.train();
console.log("Bayes model trained with sample dataset"); // Outputs: spam

function classifyEmail(email) {
    const emailTokens = tokenizer.tokenize(email);
    const classification = classifier.classify(emailTokens.join(' '));
    return classification;
}
function test() {
    const email = 'Win a free vacation now!';
    const result = classifyEmail(email);
}
function checkSpm(){

    const email = document.getElementById('emailContent').value;
    const result = classifyEmail(email);

    const resultElement = document.getElementById('result');
    if (result == "spam") {
        resultElement.textContent = 'The email is likely spam!';
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = 'The email seems legitimate.';
        resultElement.style.color = 'green';
    }
}