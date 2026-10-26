// MODIFIE ICI TES 20 PRODUITS (nom, prix, description, photo, lien Stripe)
const produits=[
  {nom:"Tshirt Madame Chan",prix:"35 €",description:"Tshirt Madame Chan",image:"images/produit1.jpg",stripe:"https://buy.stripe.com/3cIfZi2EX45pgIDfnwaEE00",public:"adulte",type:"tshirt"},
  {nom:"Veste corail Main / fleur",prix:"70 €",description:"Taille M - Sérigraphiée et cousue main",image:"images/produit2.jpg",stripe:"https://buy.stripe.com/aFa9AU1ATatN2RN0sCaEE02",public:"adulte",type:"veste"},
  {nom:"Doudoune tigre",prix:"80 €",description:"Taille M femme ou S homme - Sérigraphiée à la main",image:"images/produit3.jpg",stripe:"https://buy.stripe.com/eVqcN63J1bxRboj2AKaEE03",public:"adulte",type:"veste"},
  {nom:"Veste kaki main / fleur",prix:"70 €",description:"Taille M - Sérigraphiée à la main",image:"images/produit4.jpg",stripe:"https://buy.stripe.com/28E5kE6VdfO7fEz4ISaEE04",public:"adulte",type:"veste"},
  {nom:"Veste bleu ciel",prix:"70 €",description:"Taille L - Sérigraphiée à la main",image:"images/produit5.jpg",stripe:"https://buy.stripe.com/cNi9AU3J11XhfEz4ISaEE05",public:"adulte",type:"veste"},
  {nom:"Veste kaki tigre",prix:"70 €",description:"Taille M/L - Sérigraphiée à la main",image:"images/produit6.jpg",stripe:"https://buy.stripe.com/9B65kE4N58lFbojdfoaEE06",public:"adulte",type:"veste"},
  {nom:"Tshirt femme assise",prix:"35 €",description:"",image:"images/produit7.jpg",stripe:"https://buy.stripe.com/00waEY93l8lFbojejsaEE07",public:"adulte",type:"tshirt"},
  {nom:"Tshirt coeur",prix:"35 €",description:"",image:"images/produit8.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_8",public:"adulte",type:"tshirt"},
  {nom:"Tshirt femme en tailleur",prix:"35 €",description:"Tshirt femme en tailleur",image:"images/produit9.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_9",public:"adulte",type:"tshirt"},
  {nom:"Veste tigre",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit10.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_10",public:"enfant",type:"veste"},
  {nom:"Kway orange croco",prix:"25 €",description:"kway enfant upcyclé sérigraphié et cousu main. Taille unique 6 ans",image:"images/produit11.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_11",public:"enfant",type:"veste"},
  {nom:"Veste velour marron croco",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit12.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_12",public:"enfant",type:"veste"},
  {nom:"Sweat gros croco",prix:"25€",description:"Sweat enfant neuf, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit13.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_13",public:"enfant",type:"veste"},
  {nom:"Veste velour rose croco",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit14.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_14",public:"enfant",type:"veste"},
  {nom:"Tshirt cube",prix:"35€",description:"",image:"images/produit15.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_15",public:"adulte",type:"tshirt"},
  {nom:"Tshirt inspi Matisse",prix:"35€",description:"",image:"images/produit16.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_16",public:"adulte",type:"tshirt"},
  {nom:"Tshirt Piment",prix:"35€",description:"",image:"images/produit17.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_17",public:"adulte",type:"tshirt"},
  {nom:"Tshirt Danseuse",prix:"35€",description:"",image:"images/produit18.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_18",public:"enfant",type:"tshirt"},
  {nom:"Tshirt Montagne",prix:"35€",description:"Dessiné au crayon de couleur",image:"images/produit19.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_19",public:"enfant",type:"tshirt"},
  {nom:"Tshirt Tigre",prix:"35€",description:"",image:"images/produit20.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_20",public:"enfant",type:"tshirt"}
];
