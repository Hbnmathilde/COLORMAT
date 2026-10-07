const carte=p=>`<article class="produit"><div class="photo"><img src="${p.image}" alt="${p.nom}" loading="lazy"></div><div class="infos"><h3>${p.nom}</h3><p>${p.description}</p><div class="prix">${p.prix}</div><a class="btn" href="${p.stripe}" target="_blank" rel="noopener">ACHETER</a></div></article>`;
document.getElementById("grille-adultes").innerHTML=produits.slice(0,15).map(carte).join("");
document.getElementById("grille-enfants").innerHTML=produits.slice(15).map(carte).join("");
