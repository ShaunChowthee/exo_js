// Définition de la fonction factorielle
function factorielle(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorielle(n - 1);
  }
}

// Demande à l'utilisateur de saisir un nombre
var nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Conversion de la saisie en nombre entier
nombre = parseInt(nombre);

// Vérification si la saisie est un nombre valide
if (!isNaN(nombre)) {
  // Calcul de la factorielle du nombre saisi
  var resultat = factorielle(nombre);
  // Affichage du résultat dans la console
  console.log("Le résultat est :", resultat);
} else {
  // Si la saisie n'est pas un nombre valide, affichage d'un message d'erreur
  console.log("Veuillez saisir un nombre valide.");
}
