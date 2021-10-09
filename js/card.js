console.log("card.js loaded...");


function createCard(parentElem, student){
    let card = document.createElement("div");
    card.classList.add("card");
    parentElem.appendChild(card);

    createCardHeader(card, student);
    createCardBody(card, student);
    createCardFooter(card, student);
}


function createCardHeader(card, student){
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.style.backgroundImage = "url('" + generateRandomImage() + "')";
    card.appendChild(cardHeader);

    let avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = student.avatar;
    avatar.style.borderColor = student.color;
    cardHeader.appendChild(avatar);
}


function createCardBody(card, student){
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let title = document.createElement("div");
    title.classList.add("title");
    title.innerText = student.title;
    title.style.color = student.color;
    cardBody.appendChild(title);

    let name = document.createElement("h2");
    name.innerText = student.name;
    cardBody.appendChild(name);

    let description = document.createElement("div");
    description.classList.add("description");
    description.innerText = student.description;
    cardBody.appendChild(description);
}


function createCardFooter(card, student){
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    cardFooter.style.backgroundColor = student.color;
    card.appendChild(cardFooter);

    for (let s in student.stats) {
        let statsDiv = document.createElement("div");
        statsDiv.classList.add("stats");
        cardFooter.appendChild(statsDiv);

        let statsValue = document.createElement("div");
        statsValue.classList.add("stats-value");
        statsValue.innerText = student.stats[s];
        statsDiv.appendChild(statsValue);

        let statsName = document.createTextNode(s);
        statsDiv.appendChild(statsName);
    }
}