const urlAPI = "http://localhost:3000/api/teddies";
const teddyAppend = document.getElementById("mainPage");

async function getTeddies() {                      
    var response = await fetch(urlAPI);           
    var data = await response.json()                
    .then((data) => {
        data.forEach((teddy) => {                   
            const { name, _id, colors, price, description, imageUrl } = teddy      
            teddyAppend.innerHTML +=
            `<div class="${name}">
                <h3 class="teddyName">${name}</h3>
                <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                <ul class="teddyInfo">
                    <li id="price">Prix: ${price/100}€</li> 
                </ul> 
                <button onclick='location.href="../pages/product.html?id=${_id}"' type="button" id="btnCustom"><i class="fas fa-palette"></i>Personnaliser ${name}</button>
            </div>`;
        })                                                      
    })
    return data;
}

window.onload = () => {
    getTeddies();
}



