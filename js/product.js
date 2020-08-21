const urlAPI = "http://localhost:3000/api/teddies/";         
const teddyAppend = document.getElementById("product");
const teddyColorAppend = document.getElementById("teddy-colors");

async function getTeddy() {
    var url = document.URL;
    var get_id = url.substring(url.lastIndexOf('id') + 3);
    var urlProduct = urlAPI.concat(get_id)
    var response = await fetch(urlProduct);
        console.log(response)          
    var teddy = await response.json() 
        console.log(teddy)

        const { name, _id, colors, price, description, imageUrl } = teddy
        teddyAppend.innerHTML +=
        `<div class="${name}">
        <h3 class="teddyName">${name}</h3>
        <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
        <ul class="teddyInfo">
        <li id="price">Prix: ${price/100}€</li> 
        </ul> 
        </div>`;

    return teddy;
}
        window.onload = () => {
    getTeddy();
}