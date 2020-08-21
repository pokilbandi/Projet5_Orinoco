const urlAPI = "http://localhost:3000/api/teddies/";         
const teddyAppend = document.getElementById("product");
const teddyColorAppend = document.getElementById("teddy-colors");

async function getTeddy() {
    var url = document.URL;
    var get_id = url.substring(url.lastIndexOf('id') + 3);
    var urlProduct = urlAPI.concat(get_id)
    var response = await fetch(urlProduct);
        console.log(response)          
    var data = await response.json() 
        console.log(data)
    
    fetch(urlProduct).then(response => response.json())
        for((teddy) => {
            const { name, _id, colors, price, description, imageUrl } = teddy
            teddyAppend.innerHTML +=
            `<div class="${name}">
            <h3 class="teddyName">${name}</h3>
            <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
            <ul class="teddyInfo">
            <li id="price">Prix: ${price/100}€</li> 
            </ul> 
            </div>`;
        })
        catch(error => console.error(error));
    return data;
}

window.onload = () => {
    getTeddy();
}