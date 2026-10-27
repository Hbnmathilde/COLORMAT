// MODIFIE ICI TES 20 PRODUITS (nom, prix, description, photo, lien Stripe)
const produits=[
  {nom:"Tshirt Madame Chan",prix:"35 €",description:"Tshirt Madame Chan",image:"images/produit1.jpg",stripe:"https://buy.stripe.com/3cIfZi2EX45pgIDfnwaEE00",public:"adulte",type:"tshirt"},
  {nom:"Veste corail Main / fleur",prix:"70 €",description:"Taille M - Sérigraphiée et cousue main",image:"images/produit2.jpg",stripe:"https://buy.stripe.com/aFa9AU1ATatN2RN0sCaEE02",public:"adulte",type:"veste"},
  {nom:"Doudoune tigre",prix:"80 €",description:"Taille M femme ou S homme - Sérigraphiée à la main",image:"images/produit3.jpg",stripe:"https://buy.stripe.com/eVqcN63J1bxRboj2AKaEE03",public:"adulte",type:"veste"},
  {nom:"Veste kaki main / fleur",prix:"70 €",description:"Taille M - Sérigraphiée à la main",image:"images/produit4.jpg",stripe:"https://buy.stripe.com/28E5kE6VdfO7fEz4ISaEE04",public:"adulte",type:"veste"},
  {nom:"Veste bleu ciel",prix:"70 €",description:"Taille L - Sérigraphiée à la main",image:"images/produit5.jpg",stripe:"https://buy.stripe.com/cNi9AU3J11XhfEz4ISaEE05",public:"adulte",type:"veste"},
  {nom:"Veste kaki tigre",prix:"70 €",description:"Taille M/L - Sérigraphiée à la main",image:"images/produit6.jpg",stripe:"https://buy.stripe.com/9B65kE4N58lFbojdfoaEE06",public:"adulte",type:"veste"},
  {nom:"Tshirt femme assise",prix:"35 €",description:"",image:"images/produit7.jpg",stripe:"https://buy.stripe.com/00waEY93l8lFbojejsaEE07",public:"adulte",type:"tshirt"},
  {nom:"Tshirt coeur",prix:"35 €",description:"",image:"images/produit8.jpg",stripe:"https://buy.stripe.com/4gM14o3J1bxR63ZgrAaEE08",public:"adulte",type:"tshirt"},
  {nom:"Tshirt femme en tailleur",prix:"35 €",description:"Tshirt femme en tailleur",image:"images/produit9.jpg",stripe:"https://buy.stripe.com/8x2fZicfx0Tdboj4ISaEE09",public:"adulte",type:"tshirt"},
  {nom:"Veste enfant lion",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit10.jpg",stripe:"https://buy.stripe.com/5kQ4gAa7p8lF8c76R0aEE0a",public:"enfant",type:"veste"},
  {nom:"Kway orange croco",prix:"25 €",description:"kway enfant upcyclé sérigraphié et cousu main. Taille unique 6 ans",image:"images/produit11.jpg",stripe:"https://buy.stripe.com/aFa14obbtbxRcsngrAaEE0b",public:"enfant",type:"veste"},
  {nom:"Veste velour marron croco",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit12.jpg",stripe:"https://buy.stripe.com/00wcN6djB0Td8c72AKaEE0c",public:"enfant",type:"veste"},
  {nom:"Sweat enfant croco",prix:"25€",description:"Sweat enfant neuf, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit13.jpg",stripe:"https://buy.stripe.com/7sY3cwbbteK3eAvgrAaEE0d",public:"enfant",type:"veste"},
  {nom:"Veste velour rose croco",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit14.jpg",stripe:"https://buy.stripe.com/aFa9AU0wP0TdfEz4ISaEE0e",public:"enfant",type:"veste"},
  {nom:"Tshirt cube",prix:"35€",description:"",image:"images/produit15.jpg",stripe:"https://buy.stripe.com/14AcN6a7pdFZakfgrAaEE0f",public:"adulte",type:"tshirt"},
  {nom:"Tshirt inspi Matisse",prix:"35€",description:"",image:"images/produit16.jpg",stripe:"https://buy.stripe.com/5kQ9AUdjB8lFboj1wGaEE0g",public:"adulte",type:"tshirt"},
  {nom:"Tshirt Piment",prix:"35€",description:"",image:"images/produit17.jpg",stripe:"https://buy.stripe.com/9B65kE3J11Xhdwr8Z8aEE0h",public:"adulte",type:"tshirt"},
  {nom:"Tshirt Danseuse",prix:"35€",description:"",image:"images/produit18.jpg",stripe:"https://buy.stripe.com/8x2cN65R9gSb3VRb7gaEE0i",public:"adulte",type:"tshirt"},
  {nom:"Tshirt Montagne",prix:"35€",description:"Dessiné au crayon de couleur",image:"images/produit19.jpg",stripe:"https://buy.stripe.com/3cIfZi2EX59t1NJcbkaEE0j",public:"adulte",type:"tshirt"},
  {nom:"Tshirt Tigre",prix:"35€",description:"",image:"images/produit20.jpg",stripe:"https://buy.stripe.com/cNi5kE7ZhdFZeAv7V4aEE0k",public:"adulte",type:"tshirt"}
];
