var items = {
    itemsPerRow:3,
     providergroups: {
         "utility": {
            id: "utility", 
            width: "150px",
            height:"150px",
            src: "url(images/bill.png)",
            text:lang["utility_text"]
         },
         "mobile": {
            id : "mobile", 
            width: "150px",
            height:"150px",
            src:"catel.jpg",
            text:lang["mobile_text"]
        }, 
        "bank": {
            id: "bank",
            width: "150px",
            height:"150px",
            src:"R.jpg",
            text:lang["bank_text"]
        }, 
        "government": {
            id: "government",
            width: "150px",
            height:"150px",
            src:"gb1.png",
            text:lang["government_text"]
        }, 
        "tv": {
            id: "tv",
            width: "150px",
            height:"150px",
            src:"mobile.jpg",
            text:lang["tv_text"]
        }, 
        "internet": {
            id:"internet",
            width: "150px",
            height:"150px",
            src:"mobile.jpg",
            text:lang["internet_text"]
        }, 
        "phones": {
            id:"phone",
            width: "150px",
            height:"150px",
            src:"mobile.jpg",
            text:lang["phones_text"]
        }, 
        "games": {
            id:"games",
            width: "150px",
            height:"150px",
            src:"mobile.jpg",
            text:lang["games_text"]
        }, 
        "wallet": {
            id:"wallet",
            width: "150px",
            height:"150px",
            src:"mobile.jpg",
            text:lang["wallet_text"]

        }
     }
}

function appendBody(id,src, width, height, text) {
    let element = document.createElement("div");
    element.innerText = text;
    element.id = id;
    element.style.backgroundImage = src;
    element.style.width = width,
    element.style.height = height,
    document.body.appendChild(element);
}

for(var a in items.providergroups){
    appendBody(
        items.providergroups[a].id,
        items.providergroups[a].src,
        items.providergroups[a].width,
        items.providergroups[a].height,
        items.providergroups[a].text
    )
}
