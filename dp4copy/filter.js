function createList(spacecrafts){

    var listView=document.createElement('ol');
    
    for(var i=0;i<spacecrafts.length;i++)
    {
        var listViewItem=document.createElement('li');
        listViewItem.appendChild(document.createTextNode(spacecrafts[i]));
        listView.appendChild(listViewItem);
    }
    
    return listView;
}

function checkSpam() {
    const emailContent = document.getElementById('emailContent').value;
    const tokens = emailContent.toLowerCase().split(/\s+/);
    const spamKeywords = ['win', 'free', 'prize', 'click', 'claim', 'urgent','unsubscribe'];
    const found = []
    let isSpam = false;

    for (let token of tokens) {
        if (spamKeywords.includes(token)) {
            isSpam = true;
            found.push(token);
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
    document.getElementById("ol").appendChild(createList(found));
}
