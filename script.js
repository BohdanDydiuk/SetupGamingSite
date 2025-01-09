document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenue sur Setup Gaming et Tech !");
});
// Récupérer les éléments du DOM
const form = document.getElementById("setup-form");
const setupList = document.getElementById("setup-list");
const totalCostElement = document.getElementById("total-cost");

// Initialiser le coût total
let totalCost = 0;

// Fonction pour ajouter un composant au setup
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const componentName = document.getElementById("component-name").value;
    const componentPrice = parseFloat(document.getElementById("component-price").value);

    // Ajouter le composant à la liste
    const listItem = document.createElement("li");
    listItem.textContent = `${componentName} - ${componentPrice.toFixed(2)} €`;

    // Bouton pour supprimer un composant
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.style.marginLeft = "10px";

        // Supprimer l'élément lors du clic sur "Supprimer"
        deleteButton.addEventListener("click", () => {
            // Soustraire le coût du composant du total
            totalCost -= componentPrice;
    
            // Mettre à jour l'affichage du coût total
            totalCostElement.textContent = `Coût total : ${totalCost.toFixed(2)} €`;
    
            // Supprimer l'élément de la liste
            listItem.remove();
        });
    
        // Ajouter le bouton de suppression à l'élément de la liste
        listItem.appendChild(deleteButton);
    
        // Ajouter l'élément à la liste des composants
        setupList.appendChild(listItem);
    
        // Ajouter le coût du composant au total
        totalCost += componentPrice;
    
        // Mettre à jour l'affichage du coût total
        totalCostElement.textContent = `Coût total : ${totalCost.toFixed(2)} €`;
    
        // Réinitialiser les champs du formulaire
        form.reset();
    });
    
