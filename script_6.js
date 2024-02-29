// Fonction pour traduire un codon en acide aminé
function translateCodon(codon) {
  switch (codon) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
          return "Sérine";
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
          return "Proline";
      case "UUA":
      case "UUG":
          return "Leucine";
      case "UUU":
      case "UUC":
          return "Phénylalanine";
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
          return "Arginine";
      case "UAU":
      case "UAC":
          return "Tyrosine";
      default:
          return "Acide aminé non reconnu";
  }
}

// Fonction pour traduire un ARN en une suite d'acides aminés
function translateARN(ARN) {
  let acidesAmines = [];
  for (let i = 0; i < ARN.length; i += 3) {
      const codon = ARN.slice(i, i + 3);
      const acideAmine = translateCodon(codon);
      acidesAmines.push(acideAmine);
  }
  return acidesAmines.join("-");
}

// ARN à traduire en protéines
const ARN1 = "CCGUCGUUGCGCUACAGC";
const ARN2 = "CCUCGCCGGUACUUCUCG";

// Traduction et affichage des protéines pour chaque ARN
console.log("Protéines pour ARN1:", translateARN(ARN1));
console.log("Protéines pour ARN2:", translateARN(ARN2));
