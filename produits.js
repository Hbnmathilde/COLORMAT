// MODIFIE ICI TES 20 PRODUITS (nom, prix, description, photo, lien Stripe)
const produits=[
  {nom:"Tshirt Madame Chan",prix:"35 €",description:"Tshirt Madame Chan",image:"images/produit1.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_1",public:"adulte",type:"tshirt"},
  {nom:"Veste corail",prix:"70 €",description:"Veste corail main M / fleur",image:"images/produit2.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_2",public:"adulte",type:"veste"},
  {nom:"Doudoune tifre",prix:"80 €",description:"Doudoune tigre M",image:"images/produit3.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_3",public:"adulte",type:"veste"},
  {nom:"Veste kaki main",prix:"70 €",description:"Veste kaki main / fleur M",image:"images/produit4.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_4",public:"adulte",type:"veste"},
  {nom:"Veste bleu ciel",prix:"70 €",description:"Veste bleue poirier L",image:"images/produit5.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_5",public:"adulte",type:"veste"},
  {nom:"Veste kaki tigre",prix:"70 €",description:"Veste kaki tigre M/L",image:"images/produit6.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_6",public:"adulte",type:"veste"},
  {nom:"Tshirt femme assise",prix:"35 €",description:"Tshirt Femme assise",image:"images/produit7.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_7",public:"adulte",type:"tshirt"},
  {nom:"Tshirt coeur",prix:"35 €",description:"Tshirt coeur",image:"images/produit8.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_8",public:"adulte",type:"tshirt"},
  {nom:"Tshirt femme en tailleur",prix:"35 €",description:"Tshirt femme en tailleur",image:"images/produit9.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_9",public:"adulte",type:"tshirt"},
  {nom:"Veste tigre",prix:"25 €",description:"Veste enfant upcyclée, sérigraphiée et cousue main. Taille unique 5ans",image:"images/produit10.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_10",public:"enfant",type:"veste"},
  {nom:"kway orange croco",prix:"25 €",description:"kway enfant upcyclé sérigraphié et cousu main. Taille unique 6 ans",image:"images/produit11.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_11",public:"adulte",type:"veste"},
  {nom:"Produit 12",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit12.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_12",public:"enfant",type:"tshirt"},
  {nom:"Produit 13",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit13.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_13",public:"enfant",type:"tshirt"},
  {nom:"Produit 14",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit14.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_14",public:"enfant",type:"tshirt"},
  {nom:"Produit 15",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit15.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_15",public:"enfant",type:"tshirt"},
  {nom:"Produit 16",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit16.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_16",public:"enfant",type:"veste"},
  {nom:"Produit 17",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit17.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_17",public:"enfant",type:"veste"},
  {nom:"Produit 18",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit18.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_18",public:"enfant",type:"tshirt"},
  {nom:"Produit 19",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit19.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_19",public:"enfant",type:"tshirt"},
  {nom:"Produit 20",prix:"00 €",description:"Décris ton produit ici.",image:"images/produit20.jpg",stripe:"https://buy.stripe.com/COLLE_TON_LIEN_20",public:"enfant",type:"tshirt"}
];
