// Données étendues avec des modèles spécifiques
const componentPrices = {
    gpu: {
        Nvidia: {
            price: 700, wattage: 300,
            models:[ {name:"RTX 3070", Image: ""},
                    {name:"RTX 3080", Image: ""},
                    {name:"RTX 3090", Image: ""},
                    {name:"RTX 4060", Image: ""},
                    {name:"RTX 4060 Ti", Image: ""},
                    {name:"RTX 4070", Image: ""},
            ]
        },
        AMD: {
            price: 600, wattage: 250,
            models: [
                { name: "RX 6600 XT", image: "img/gpu/amd/rx-6600-xt.jpg" },
                { name: "RX 6700 XT", image: "img/gpu/amd/rx-6700-xt.jpg" },
                // Ajoute d'autres modèles ici...
            ],
        },
        Intel: {
            price: 500, wattage: 200,
            models: [
                { name: "Arc A750", image: "img/gpu/intel/arc-a750.jpg" },
                { name: "Arc A770", image: "img/gpu/intel/arc-a770.jpg" },
                // Ajoute d'autres modèles ici...
            ],
        },
    },
    cpu: {
        AMD: {
            price: 400, wattage: 120,
            models: [
                { name: "Ryzen 5 5600X", image: "img/cpu/amd/ryzen-5600x.jpg" },
                { name: "Ryzen 7 5800X", image: "img/cpu/amd/ryzen-5800x.jpg" },
                // Ajoute d'autres modèles ici...
            ],
        },
        Intel: {
            price: 450, wattage: 150,
            models: [
                { name: "i5-12600K", image: "img/cpu/intel/i5-12600k.jpg" },
                { name: "i7-12700K", image: "img/cpu/intel/i7-12700k.jpg" },
                // Ajoute d'autres modèles ici...
            ],
        },
    },
    ram: {
        "8GB": { 
            price: 50, wattage: 30, 
            models: [
                { name: "Corsair Vengeance LPX 8GB", image: "img/ram/corsair-8gb.jpg" },
                { name: "Kingston Fury 8GB", image: "img/ram/kingston-8gb.jpg" },
            ],
        },
        "16GB": { 
            price: 100, wattage: 40, 
            models: [
                { name: "Corsair Vengeance LPX 16GB", image: "img/ram/corsair-16gb.jpg" },
                { name: "G.Skill Trident Z 16GB", image: "img/ram/gskill-16gb.jpg" },
            ],
        },
        "32GB": { 
            price: 200, wattage: 50, 
            models: [
                { name: "Kingston Fury 32GB", image: "img/ram/kingston-32gb.jpg" },
                { name: "TeamGroup T-Force 32GB", image: "img/ram/teamgroup-32gb.jpg" },
                { name: "Corsair Vengeance LPX 32GB", image: "img/ram/corsair-32gb.jpg" },
            ],
        },
        "64GB": { 
            price: 400, wattage: 70, 
            models: [
                { name: "Crucial Ballistix 64GB", image: "img/ram/crucial-64gb.jpg" },
                { name: "G.Skill Trident Z RGB 64GB", image: "img/ram/gskill-64gb.jpg" },
            ],
        },
    },
};

// Stocker la sélection de l'utilisateur
const userSelection = {
    gpu: null,
    cpu: null,
    ram: null,
};

// Fonction pour gérer les clics de bouton
function handleButtonClick(event) {
    const button = event.target;
    const group = button.closest('div').id; // Identifier correctement le parent (ex. "gpu", "cpu", "ram")
    const value = button.dataset.value;

    // Mettre à jour la sélection
    userSelection[group] = value;

    // Retirer la classe "selected" de tous les boutons du groupe
    document.querySelectorAll(`#${group} .button`).forEach((btn) => {
        btn.classList.remove("selected");
    });

    // Ajouter la classe "selected" au bouton cliqué
    button.classList.add("selected");

    // Mettre à jour les résultats et afficher les modèles
    updateResults();
    displayModels(group, value);
}

// Fonction pour calculer le prix total et la consommation énergétique
function updateResults() {
    let totalPrice = 0;
    let totalWattage = 0;
    let incompleteSelection = false;

    for (const [component, selectedValue] of Object.entries(userSelection)) {
        if (selectedValue) {
            totalPrice += componentPrices[component][selectedValue].price;
            totalWattage += componentPrices[component][selectedValue].wattage;
        } else {
            incompleteSelection = true;
        }
    }

    // Mettre à jour l'interface
    const priceElement = document.getElementById("price");
    const wattageElement = document.getElementById("wattage");

    if (incompleteSelection) {
        priceElement.textContent = "Veuillez compléter la sélection.";
        wattageElement.textContent = "-";
    } else {
        priceElement.textContent = `${totalPrice} €`;
        wattageElement.textContent = `${totalWattage} W`;
    }
}



function displayModels(group, value) {
    const dynamicListContainer = document.getElementById("dynamic-list-container-" + group);
    const dynamicList = document.getElementById("dynamic-list-" + group);
    const productImageContainer = document.getElementById("product-image-container");
    const productImage = document.getElementById("product-image");

    // Vider la liste existante
    dynamicList.innerHTML = "";

    // Vider l'image précédente
    productImage.src = "";
    productImage.style.display = "none";

    // Afficher les modèles correspondants
    if (value && componentPrices[group][value].models) {
        const models = componentPrices[group][value].models;
        models.forEach((model) => {
            const listItem = document.createElement("button");
            listItem.classList.add("product-button");
            listItem.dataset.model = model.name;

            // Créer et ajouter l'image du produit
            const productImg = document.createElement("img");
            productImg.src = model.image;
            productImg.alt = model.name;
            productImg.classList.add("product-img");
            listItem.appendChild(productImg);

            listItem.addEventListener("click", function() {
                handleModelSelection(group, model.name, model.image);
            });
            dynamicList.appendChild(listItem);
        });

        // Ajouter et retirer dynamiquement la classe "animate" pour redémarrer l'animation
        dynamicListContainer.classList.add("show");
        dynamicListContainer.classList.add("animate");

        // Après l'animation, retirer la classe "animate" pour qu'elle puisse se redémarrer à chaque clic
        setTimeout(() => {
            dynamicListContainer.classList.remove("animate");
        }, 500);  // La durée de l'animation (500ms)
    } else {
        dynamicListContainer.classList.remove("show");
    }
}

// Fonction pour gérer la sélection du modèle
function handleModelSelection(group, model, image) {
    // Retirer la classe "selected" de tous les boutons du groupe
    document.querySelectorAll(`#dynamic-list-${group} button`).forEach((btn) => {
        btn.classList.remove("selected");
    });

    // Ajouter la classe "selected" au bouton cliqué
    const selectedButton = document.querySelector(`#dynamic-list-${group} button[data-model='${model}']`);
    selectedButton.classList.add("selected");

    // Afficher l'image du produit
    const productImage = document.getElementById("product-image");
    productImage.src = image; // Utiliser l'image dynamiquement passée
    productImage.style.display = "block";
}


// Ajouter un gestionnaire d'événements pour les boutons
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});
