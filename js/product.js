const urlAPI = "http://localhost:3000/api/teddies/";         
const teddyAppend = document.getElementById("product");
const teddyColorAppend = document.getElementById("teddy-colors");
const postUrlAPI = "http://localhost:3000/api/teddies/order";

async function getItem() {
    var url = document.URL;
    var get_id = url.substring(url.lastIndexOf('id') + 3);
    var urlProduct = urlAPI.concat(get_id)
    var response = await fetch(urlProduct);
        console.log(response)          
    var teddy = await response.json() 
        console.log(teddy)

        const { name, _id, colors, price, description, imageUrl } = teddy
        teddyAppend.innerHTML +=
        `<table class="${name}">
            <thead>
                <tr>
                    <th class="teddyName" colspan="2"><h3 >${name}</h3></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="teddy_description">${description}</td>
                    <td class="teddyPhoto" rowspan="2"><img src="${imageUrl}" alt="Photo de ${name}"></img></td>
                </tr>
                <tr>
                    <td id="price">Prix: ${price/100}€</td>
                </tr>
            </tbody>
        </table>`;

        for (let i = 0; i < colors.length; i++) {
            teddyColorAppend.innerHTML +=
            `<option id="appendedColors" value="${colors[i]}" selected="selected">  ${colors[i]}  </option>`;
        }    

    return teddy;

}

//add new key=>value to the HTML5 storage
async function SaveItem() {
    var url = document.URL;
    var get_id = url.substring(url.lastIndexOf('id') + 3);
    var urlProduct = urlAPI.concat(get_id)
    var response = await fetch(urlProduct);
        console.log(response)          
    var teddy = await response.json() 
        console.log(teddy)
        const { name, _id, colors, price, description, imageUrl } = teddy
        const ted = {imageUrl,  name, price}
    var quantite = 1
    var quantite = document.getElementById("quantite").value;
    console.log(quantite)
    localStorage.setItem('teddy', JSON.stringify(ted));
    console.log(localStorage)
}



window.onload = () => {
    getItem();
}