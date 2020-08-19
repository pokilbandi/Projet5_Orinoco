// Récupération du localStorage
const checkoutItems = JSON.parse(localStorage.getItem('orderIsConfirmed')) || []; 

let textZone = document.getElementById('confirmationInfo');

// Création du contenu HTML && intégration du contenu du localStorage
textZone.innerHTML += 
`
<h2> Merci pour votre commande !</h2>
<h3 class="recap"> Voici le récapitulatif</h3>
<h3>Numéro de commande : <br /><span class="importedInfo">${checkoutItems.getOrderId}</span></h3>
<h3>Montant de la commande : <br /><span class="importedInfo">${checkoutItems.getTotalCost}</span></h3>
<p>D'ici quelques minutes un email récapitulant votre commande devrais arriver.</p>
<p>Orinoco vous remercie pour votre confiance.</p>
`;