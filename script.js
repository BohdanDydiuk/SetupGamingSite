// Données étendues avec des modèles spécifiques et leurs prix/wattages
const componentPrices = {
    gpu: {
        Nvidia: {
            // Valeurs de base (au cas où aucun modèle n'est sélectionné)
            price: 700, wattage: 300,
            models: [
                { name:"RTX 3050", image: "", price: 200, wattage: 130 },
                { name:"RTX 3060", image: "", price: 250, wattage: 170 }, 
                { name:"RTX 3060 Ti", image: "", price: 500, wattage: 200 },
                { name:"RTX 3070", image: "", price: 600, wattage: 220 },
                { name:"RTX 3080", image: "", price: 700, wattage: 250 },
                { name:"RTX 3080 Ti", image: "", price: 900, wattage: 320 },
                { name:"RTX 3090", image: "", price: 1700, wattage: 350 },
                { name:"RTX 3090 Ti", image: "", price: 2000, wattage: 400 },
                { name:"RTX 4060", image: "", price: 330, wattage: 140 }, 
                { name:"RTX 4060 Ti", image: "", price: 450, wattage: 160 },
                { name:"RTX 4070", image: "", price: 800, wattage: 230 },
                { name:"RTX 4070 Super", image: "", price: 750, wattage: 240 },
                { name:"RTX 4070 Ti", image: "", price: 900, wattage: 260 },
                { name:"RTX 4070 Ti Super", image: "", price: 1000, wattage: 265 },
                { name:"RTX 4080", image: "", price: 999, wattage: 300 },
                { name:"RTX 4080 Super", image: "", price: 1500, wattage: 310 }, 
                { name:"RTX 4090", image: "", price: 1800, wattage: 380 },
                { name:"RTX 5070", image: "", price: 549, wattage: 150 },
                { name:"RTX 5070 Ti", image: "", price: 749, wattage: 170 },
                { name:"RTX 5080", image: "", price: 999, wattage: 200 },
                { name:"RTX 5090", image: "", price: 1999, wattage: 220 },
            ]
        },
        AMD: {
            price: 500, wattage: 125,
            models: [
                { name:"RX 6300", image: "", price: 130, wattage: 95 },
                { name:"RX 6400", image: "", price: 160, wattage: 130 },
                { name:"RX 6500 XT", image: "", price: 200, wattage: 85 },
                { name:"RX 6600", image: "", price: 300, wattage: 110 }, 
                { name:"RX 6600 XT", image: "", price: 350, wattage: 115 },
                { name:"RX 6650 XT", image: "", price: 260, wattage: 120 },
                { name:"RX 6700", image: "", price: 450, wattage: 140 },
                { name:"RX 6750 GRE 10GB", image: "", price: 500, wattage: 210 },
                { name:"RX 6700 XT", image: "", price: 450, wattage: 160 },
                { name:"RX 6750 GRE 12GB", image: "", price: 550, wattage: 230 },
                { name:"RX 6750 XT", image: "", price: 550, wattage: 155 }, 
                { name:"RX 6800", image: "", price: 600, wattage: 180 },
                { name:"RX 6800 XT", image: "", price: 630, wattage: 200 },
                { name:"RX 6900 XT", image: "", price: 700, wattage: 225 },
                { name:"RX 6950 XT", image: "", price: 1000, wattage: 235 },
                { name:"RX 7600", image: "", price: 300, wattage: 120 },
                { name:"RX 7600 XT", image: "", price: 350, wattage: 130 },
                { name:"RX 7700 XT", image: "", price: 450, wattage: 150 }, 
                { name:"RX 7800XT", image: "", price: 530, wattage: 170 },
                { name:"RX 7900 GRE", image: "", price: 620, wattage: 180 },
                { name:"RX 7900 XT", image: "", price: 750, wattage: 200 },
                { name:"RX 7900 XTX", image: "", price: 1000, wattage: 220 },
            ],
        },
        Intel: {
            price: 500, wattage: 200,
            models: [
                { name: "Arc A310", image: "", price: 150, wattage: 75 },
                { name: "Arc A380", image: "", price: 200, wattage: 80 },
                { name: "Arc A580", image: "", price: 250, wattage: 90 },
                { name: "Arc A750", image: "", price: 300, wattage: 100 },
                { name: "Arc A770 8GB", image: "", price: 350, wattage: 110 },
                { name: "Arc A770 16GB", image: "", price: 400, wattage: 115 },
            ],
        },
    },
    cpu: {
        AMD: {
            price: 400, wattage: 120,
            models: [
                { name: "Ryzen 5 5600X", image: "", price: 200, wattage: 65 },
                { name: "Ryzen 5 5600X3D", image: "", price: 230, wattage: 65 },
                { name: "Ryzen 7 5700X", image: "", price: 300, wattage: 95 },
                { name: "Ryzen 7 5700X3D", image: "", price: 330, wattage: 95 },
                { name: "Ryzen 7 5800X", image: "", price: 320, wattage: 105 },
                { name: "Ryzen 7 5800X3D", image: "", price: 350, wattage: 105 },
                { name: "Ryzen 9 5900X", image: "", price: 500, wattage: 105 },
                { name: "Ryzen 9 5900XT", image: "", price: 550, wattage: 105 },
                { name: "Ryzen 9 5950X", image: "", price: 800, wattage: 105 },
                { name: "Ryzen 5 7500F", image: "", price: 150, wattage: 65 },
                { name: "Ryzen 5 7600", image: "", price: 250, wattage: 65 },
                { name: "Ryzen 5 7600X", image: "", price: 270, wattage: 65 },
                { name: "Ryzen 7 7700", image: "", price: 350, wattage: 95 },
                { name: "Ryzen 7 7700X", image: "", price: 370, wattage: 95 },
                { name: "Ryzen 7 7800X3D", image: "", price: 400, wattage: 95 },
                { name: "Ryzen 9 7900", image: "", price: 500, wattage: 105 },
                { name: "Ryzen 9 7900X", image: "", price: 550, wattage: 105 },
                { name: "Ryzen 9 7900X3D", image: "", price: 600, wattage: 105 },
                { name: "Ryzen 9 7950X", image: "", price: 700, wattage: 105 },
                { name: "Ryzen 9 7950X3D", image: "", price: 750, wattage: 105 },
                { name: "Ryzen 5 9600", image: "", price: 180, wattage: 65 },
                { name: "Ryzen 5 9600X", image: "", price: 200, wattage: 65 },
                { name: "Ryzen 7 9700X", image: "", price: 300, wattage: 95 },
                { name: "Ryzen 7 9800X3D", image: "", price: 330, wattage: 95 },
                { name: "Ryzen 9 9900X", image: "", price: 500, wattage: 105 },
                { name: "Ryzen 9 9900X3D", image: "", price: 550, wattage: 105 },
                { name: "Ryzen 9 9950X", image: "", price: 600, wattage: 105 },
                { name: "Ryzen 9 9950X3D", image: "", price: 650, wattage: 105 },
            ],
        },
        Intel: {
            price: 350, wattage: 100,
            models: [
                { name: "i3-12300", image: "", price: 143, wattage: 60 },
                { name: "i3-12300T", image: "", price: 143, wattage: 35 },
                { name: "i5-12400", image: "", price: 192, wattage: 65 },
                { name: "i5-12400F", image: "", price: 167, wattage: 65 },
                { name: "i5-12600", image: "", price: 223, wattage: 65 },
                { name: "i5-12600K", image: "", price: 289, wattage: 125 },
                { name: "i5-12600KF", image: "", price: 264, wattage: 125 },
                { name: "i7-12700", image: "", price: 339, wattage: 65 },
                { name: "i7-12700T", image: "", price: 339, wattage: 35 },
                { name: "i7-12700F", image: "", price: 314, wattage: 65 },
                { name: "i7-12700K", image: "", price: 409, wattage: 125 },
                { name: "i7-12700KF", image: "", price: 384, wattage: 125 },
                { name: "i9-12900", image: "", price: 489, wattage: 65 },
                { name: "i9-12900T", image: "", price: 489, wattage: 35 },
                { name: "i9-12900F", image: "", price: 464, wattage: 65 },
                { name: "i9-12900K", image: "", price: 589, wattage: 125 },
                { name: "i9-12900KF", image: "", price: 569, wattage: 125 },
                { name: "i3-13100", image: "", price: 134, wattage: 60 },
                { name: "i3-13100F", image: "", price: 109, wattage: 58 },
                { name: "i3-13100T", image: "", price: 134, wattage: 35 },
                { name: "i5-13400", image: "", price: 221, wattage: 65 },
                { name: "i5-13400F", image: "", price: 196, wattage: 65 },
                { name: "i5-13400T", image: "", price: 221, wattage: 35 },
                { name: "i5-13500", image: "", price: 232, wattage: 65 },
                { name: "i5-13500T", image: "", price: 232, wattage: 35 },
                { name: "i5-13600", image: "", price: 255, wattage: 65 },
                { name: "i5-13600T", image: "", price: 255, wattage: 35 },
                { name: "i5-13600K", image: "", price: 319, wattage: 125 },
                { name: "i5-13600KF", image: "", price: 294, wattage: 125 },
                { name: "i7-13700", image: "", price: 384, wattage: 65 },
                { name: "i7-13700T", image: "", price: 384, wattage: 35 },
                { name: "i7-13700F", image: "", price: 359, wattage: 65 },
                { name: "i7-13700K", image: "", price: 409, wattage: 125 },
                { name: "i7-13700KF", image: "", price: 384, wattage: 125 },
                { name: "i9-13900", image: "", price: 549, wattage: 65 },
                { name: "i9-13900F", image: "", price: 524, wattage: 65 },
                { name: "i9-13900T", image: "", price: 549, wattage: 35 },
                { name: "i9-13900K", image: "", price: 589, wattage: 125 },
                { name: "i9-13900KF", image: "", price: 564, wattage: 125 },
                { name: "i9-13900KS", image: "", price: 700, wattage: 150 },
                { name: "i5-14600", image: "", price: 255, wattage: 65 },
                { name: "i5-14600T", image: "", price: 255, wattage: 35 },
                { name: "i5-14600K", image: "", price: 319, wattage: 125 },
                { name: "i5-14600KF", image: "", price: 294, wattage: 125 },
                { name: "i7-14700", image: "", price: 384, wattage: 65 },
                { name: "i7-14700T", image: "", price: 384, wattage: 35 },
                { name: "i7-14700F", image: "", price: 359, wattage: 65 },
                { name: "i7-14700K", image: "", price: 409, wattage: 125 },
                { name: "i7-14700KF", image: "", price: 384, wattage: 125 },
                { name: "i9-14900", image: "", price: 549, wattage: 65 },
                { name: "i9-14900F", image: "", price: 524, wattage: 65 },
                { name: "i9-14900T", image: "", price: 549, wattage: 35 },
                { name: "i9-14900K", image: "", price: 589, wattage: 125 },
                { name: "i9-14900KF", image: "", price: 564, wattage: 125 },
                { name: "i9-14900KS", image: "", price: 689, wattage: 150 },
            ],
        },
    },
    ram: {
        "8GB": { 
            price: 50, wattage: 30, 
            models: [
                { name: "Corsair Vengeance LPX 8GB", image: "img/ram/corsair-8gb.jpg", price: 45, wattage: 30 },
                { name: "Kingston Fury 8GB", image: "img/ram/kingston-8gb.jpg", price: 50, wattage: 30 },
            ],
        },
        "16GB": { 
            price: 100, wattage: 40, 
            models: [
                { name: "Corsair Vengeance LPX 16GB", image: "img/ram/corsair-16gb.jpg", price: 90, wattage: 40 },
                { name: "G.Skill Trident Z 16GB", image: "img/ram/gskill-16gb.jpg", price: 100, wattage: 40 },
            ],
        },
        "32GB": { 
            price: 200, wattage: 50, 
            models: [
                { name: "Kingston Fury 32GB", image: "img/ram/kingston-32gb.jpg", price: 180, wattage: 50 },
                { name: "TeamGroup T-Force 32GB", image: "img/ram/teamgroup-32gb.jpg", price: 190, wattage: 50 },
                { name: "Corsair Vengeance LPX 32GB", image: "img/ram/corsair-32gb.jpg", price: 200, wattage: 50 },
            ],
        },
        "64GB": { 
            price: 400, wattage: 70, 
            models: [
                { name: "Crucial Ballistix 64GB", image: "", price: 350, wattage: 70 },
                { name: "G.Skill Trident Z RGB 64GB", image: "", price: 400, wattage: 70 },
            ],
        },
    },
    cooling: {
        "Air Cooling": {
            price: 50, wattage: 30,
            models: [
                { name: "Noctua NH-U14S TR4-SP3", image: "", price: 40, wattage: 30 },
                { name: "Be Quiet! Dark Rock 4", image: "", price: 50 , wattage: 30 },
                { name: "Thermalright Silver Arrow TR4", image: "", price: 60, wattage: 30 },
            ],
        },
        "Water Cooling": {
            price: 100, wattage: 50,
            models: [
                { name: "Corsair Hydro Series H115i RGB Platinum", image: "", price: 90, wattage: 50 },
                { name: "EKWB EK-Vector 120", image: "", price: 100 , wattage: 50 },
            ],    
        }
    },
    storage: {
        "256GB": {
            price: 30, wattage: 10,
            models: [
                { name: "Kingston A2000 256GB", image: "", price: 25, wattage: 10 },
                { name: "Sabrent Rocket 256GB", image: "", price: 30, wattage: 10 },
                { name: "ADATA XPG SX6000 256GB", image: "", price: 35 , wattage: 10 },
            ]
        },
        "512GB": {
            price: 50, wattage: 20,
            models: [
                { name: "Samsung 970 EVO Plus 512GB", image: "", price: 45, wattage: 20 },
                { name: "Western Digital Black SN750 512GB", image: "", price: 50, wattage: 20 },
                { name: "Crucial P5 512GB", image: "", price: 55, wattage: 20 },
            ] 
        },
        "1TO": {
            price: 80, wattage: 30,
            models: [ 
                { name: "Seagate BarraCuda 1TB", image: "", price: 70, wattage: 30 },
                { name: "Western Digital Caviar Blue 1TB", image: "", price: 75, wattage: 30 },
                { name: "Toshiba X300 1TB", image: "", price: 80, wattage: 30 },
            ]
        },
        "2TO": {
            price: 140, wattage: 40,
            models: [
                { name: "Seagate BarraCuda 2TB", image: "", price: 130, wattage: 40 },
                { name: "Western Digital Caviar Blue 2TB", image: "", price: 135, wattage: 40 },
                { name: "Toshiba X300 2TB", image: "", price: 140, wattage: 40 },
            ]
        }
    },
    motherboard: {
        "AMD": {
            price: 150, wattage: 50,
            models: [
                { name: "ASRock X570M Steel Legend Micro ATX", image: "", price : 120, wattage: 50 },
                { name: "MSI B450M MORTAR", image: "", price: 130, wattage: 50 },
                { name: "GIGABYTE B450M DS3H", image: "", price: 140, wattage: 50 },
                { name: "MSI B450M BAZOOKA", image: "", price: 160 , wattage: 50 },
                { name: "ASRock B450M Steel Legend Micro ATX", image: "", price: 150, wattage: 50 },
            ]
        },
        "Intel": {
            price: 180, wattage: 60,
            models: [
                { name: "ASRock Z390 EXTREME4", image: "", price: 160, wattage: 60 },
                { name: "GIGABYTE Z390 AORUS PRO", image: "", price : 170, wattage: 60 },
                { name: "MSI Z390 GAMING PLUS", image: "", price: 180 , wattage: 60 },
                { name: "ASRock Z390 EXTREME4", image: "", price: 190, wattage: 60 },
                { name: "GIGABYTE Z390 AORUS XTREME", image: "", price: 200, wattage: 60 },
            ]
        }
    },
    alimentation: {
        "650W": {
            price: 40, wattage: 0,
            models: [
                { name: "EVGA 650 GS, 80+ Gold 650W", image: "", price: 35, wattage: 0 },
                { name: "Corsair CX650M, 80+ Bronze 650W", image: "", price: 40, wattage: 0 },
                { name: "Thermaltake Toughpower 650W", image: "", price: 45, wattage: 0 },
            ]
        },
        "750W": {
            price: 60, wattage: 0,
            models: [
                { name: "EVGA 750 GS, 80+ Gold 750W", image: "", price: 55, wattage: 0 },
                { name: "Corsair RM750, 80+ Gold 750W", image: "", price: 50, wattage: 0 },
                { name: "Thermaltake Toughpower 750W", image: "", price: 55, wattage: 0 },
            ]
        },
        "950W": {
            price: 120, wattage: 0,
            models: [
                { name: "EVGA 950 GS, 80+ Gold 950W", image: "", price: 120, wattage: 0 },
                { name: "Corsair RM950, 80+ Gold 950W", image: "", price: 130, wattage: 0 },
                { name: "Thermaltake Toughpower 950W", image: "", price: 125, wattage: 0 },
            ]
        },
        "1100W": {
            price: 160, wattage: 0,
            models: [
                { name: "EVGA 1100 GS, 80+ Gold 1100W", image: "", price: 160, wattage: 0 },
                { name: "Corsair AX1100, 80+ Platinum 1100W", image: "", price: 165, wattage: 0 },
                { name: "Thermaltake Toughpower 1100W", image: "", price: 180, wattage: 0 },
            ]
        }
    }
};

// Stocker la sélection du fabricant (GPU, CPU, RAM)
const userSelection = {
    gpu: null,
    cpu: null,
    ram: null,
    cooling: null,
    stockage: null,
};

// Stocker la sélection du modèle pour chaque composant
const userModelSelection = {
    gpu: null,
    cpu: null,
    ram: null,
    cooling: null,
    stockage: null,
};

// Fonction pour gérer les clics sur les boutons de fabricants
function handleButtonClick(event) {
    const button = event.target;
    const group = button.closest('div').id; // par exemple "gpu", "cpu" ou "ram"
    const value = button.dataset.value;

    // Mettre à jour la sélection du fabricant
    userSelection[group] = value;
    // Réinitialiser la sélection de modèle correspondante
    userModelSelection[group] = null;

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

    for (const [component, manufacturer] of Object.entries(userSelection)) {
        if (manufacturer) {
            const base = componentPrices[component][manufacturer];
            // Si un modèle a été sélectionné, utiliser ses valeurs
            if (userModelSelection[component]) {
                totalPrice += userModelSelection[component].price;
                totalWattage += userModelSelection[component].wattage;
            } else {
                totalPrice += base.price;
                totalWattage += base.wattage;
                incompleteSelection = true; // le choix du modèle n'est pas encore fait
            }
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

// Afficher dynamiquement la liste des modèles pour un groupe donné
function displayModels(group, value) {
    const dynamicListContainer = document.getElementById("dynamic-list-container-" + group);
    const dynamicList = document.getElementById("dynamic-list-" + group);
    const productImageContainer = document.getElementById("product-image-container");
    const productImage = document.getElementById("product-image");

    // Vider la liste existante
    dynamicList.innerHTML = "";
    // Réinitialiser l'image précédente (uniquement pour les GPU dans cet exemple)
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

            // Lorsque l'utilisateur clique sur un modèle, on passe l'objet complet "model"
            listItem.addEventListener("click", function() {
                handleModelSelection(group, model);
            });
            dynamicList.appendChild(listItem);
        });

        // Ajouter et retirer dynamiquement la classe "animate" pour redémarrer l'animation
        dynamicListContainer.classList.add("show", "animate");
        setTimeout(() => {
            dynamicListContainer.classList.remove("animate");
        }, 500);  // Durée de l'animation (500ms)
    } else {
        dynamicListContainer.classList.remove("show");
    }
}

// Gérer la sélection d'un modèle
function handleModelSelection(group, model) {
    // Retirer la classe "selected" de tous les boutons du groupe de modèles
    document.querySelectorAll(`#dynamic-list-${group} button`).forEach((btn) => {
        btn.classList.remove("selected");
    });

    // Ajouter la classe "selected" au bouton cliqué
    const selectedButton = document.querySelector(`#dynamic-list-${group} button[data-model='${model.name}']`);
    selectedButton.classList.add("selected");

    // Afficher l'image du produit (si applicable, ici pour les GPU par exemple)
    const productImage = document.getElementById("product-image");
    productImage.src = model.image;
    productImage.style.display = "block";

    // Stocker la sélection du modèle
    userModelSelection[group] = {
        name: model.name,
        price: model.price,
        wattage: model.wattage
    };

    // Mettre à jour les résultats après la sélection d'un modèle
    updateResults();
}

// Ajouter un gestionnaire d'événements pour les boutons de fabricants
document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});


