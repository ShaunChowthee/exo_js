// Fonction pour vérifier si une phrase est une question
function isQuestion(phrase) {
  return phrase.endsWith("?");
}

// Fonction pour vérifier si une phrase est en majuscules
function isShouting(phrase) {
  return phrase === phrase.toUpperCase() && phrase.trim() !== "";
}

// Fonction pour vérifier si une phrase contient le mot "Fortnite"
function mentionsFortnite(phrase) {
  return phrase.toLowerCase().includes("fortnite");
}

// Fonction pour gérer la conversation avec le bot
function chatBot(phrase) {
  if (isQuestion(phrase)) {
      return "Ouais Ouais...";
  } else if (isShouting(phrase)) {
      return "Pwa, calme-toi...";
  } else if (mentionsFortnite(phrase)) {
      return "on s' fait une partie soum-soum ?";
  } else if (phrase.trim() === "") {
      return "t'es en PLS ?";
  } else {
      return "balek.";
  }
}

// Demande à l'utilisateur de saisir une phrase
var userInput = prompt("Parle au bot adolescent:");

// Gestion de la conversation avec le bot et affichage de la réponse dans la console
var botResponse = chatBot(userInput);
console.log("Bot adolescent:", botResponse);
