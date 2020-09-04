const urlAPI = "http://localhost:3000/api/teddies";        
const teddyAppend = document.getElementById("list");
const postUrlAPI = "http://localhost:3000/api/teddies/order";


//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items 
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Oursons</th><th>Quantités</th><th>Prix</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Oursons</th><th>Quantités</th><th>Prix</th></tr>\n") {
			list += "<tr><td><i>vide</i></td>\n<td><i>vide</i></td>\n<td><i>vide</i></td></tr>\n";
		}
		//bind the data to html table
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}

/*=====> Checking the browser support*/
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}