const etat={public:"tous",type:"tous"};
const grille=document.getElementById("grille");
const compteur=document.getElementById("compteur");

const carte=p=>`<article class="produit"><div class="photo"><img src="${p.image}" alt="${p.nom}" loading="lazy"></div><div class="infos"><h3>${p.nom}</h3><p>${p.description}</p><div class="prix">${p.prix}</div>${p.epuise?'<span class="btn epuise">ÉPUISÉ</span>':`<a class="btn" href="${p.stripe}" target="_blank" rel="noopener">ACHETER</a>`}</div></article>`;

function afficher(){
  const liste=produits.filter(p=>(etat.public==="tous"||p.public===etat.public)&&(etat.type==="tous"||p.type===etat.type));
  grille.innerHTML=liste.length?liste.map(carte).join(""):'<p class="vide">Aucun produit dans cette sélection pour le moment.</p>';
  compteur.textContent=liste.length+(liste.length>1?" produits":" produit");
}

function choisir(groupe,valeur){
  etat[groupe]=valeur;
  document.querySelectorAll('.filtre[data-groupe="'+groupe+'"]').forEach(b=>b.classList.toggle("actif",b.dataset.valeur===valeur));
  afficher();
}

document.querySelectorAll(".filtre").forEach(b=>b.addEventListener("click",()=>choisir(b.dataset.groupe,b.dataset.valeur)));

// Permet d'arriver directement filtré : shop.html#enfants, #adulte, #tshirt, #veste
const h=location.hash.slice(1);
if(h==="enfant"||h==="adulte")choisir("public",h);
else if(h==="tshirt"||h==="veste")choisir("type",h);
else afficher();
