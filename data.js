// ============================================================
//  ✏️  FICHIER À MODIFIER CHAQUE SEMAINE
//  Pas de base de données : tu changes ce fichier sur GitHub
//  (bouton ✏️ "Edit") puis tu cliques sur "Commit changes".
//  Le site se met à jour tout seul en 1-2 minutes.
// ============================================================

const CONFIG = {
  nomEquipe: "The Legends",
  slogan: "Le match de la semaine, dans notre quartier",
  formspree: "https://formspree.io/f/xjyyjery"
};

// 🏆 Le joueur de la semaine (affiché tout en haut du site)
//  - numero : numéro du maillot
//  - photo  : optionnel. Mets une photo dans le dépôt (ex: "photos/amine.jpg")
//             et écris son chemin ici. Laisse "" pour afficher un maillot.
const MEILLEUR_JOUEUR = {
  nom: "Houssem",
  numero: 10,
  poste: "Attaquant",
  equipe: "Gagnante",
  buts: 5,
  passes: 4,
  note: 8,
  phrase: "Quatre passes décisives et 5 buts : il a porté l'équipe toute la semaine.",
  photo: "houssem.jpg"
};

// 📅 Le prochain match (format date : AAAA-MM-JJTHH:MM)
const MATCH = {
  date: "2026-11-11T20:30",
  lieu: "Terrain du Chatt mariem",
  adresse: "À côté de la mosquée / terrain en gazon artificiel ",
  adversaire: "Équipe A vs Équipe B",
  note: "Chaque joueur apporte 1 bouteille d'eau. Soyez à l'heure !"
};

// ✅ Joueurs convoqués (numero = numéro de maillot, facultatif)
const CONVOQUES = [
  { nom: "Mourad",   numero: 1,  poste: "Gardien",   equipe: "5.5" },
    { nom: "Walid",   numero: 12,  poste: "Gardien",   equipe: "6.5" },
  { nom: "Michliya",   poste: "Défenseur", equipe: "5.5" },
    { nom: "Bilel",  poste: "Défenseur", equipe: "6.5" },
  { nom: "Atef",   poste: "Défenseur",    equipe: "6.5" },
  { nom: "Majdi",     poste: "Défenseur", equipe: "6.5" },
  { nom: "Ali",  poste: "Défenseur",   equipe: "6" },
  { nom: "Asfour",     poste: "Défenseur", equipe: "5" },
  { nom: "Rami",    poste: "Milieu",    equipe: "5" },
  { nom: "Wassim",    poste: "Milieu",    equipe: "6.5" },
  { nom: "Safwen",    poste: "Milieu", equipe: "7" },
   { nom: "Ghzaiel",    poste: "Milieu", equipe: "6.5" },
  { nom: "Badis", poste: "Milieu",   equipe: "7" },
  { nom: "Dhiya",    poste: "Milieu", equipe: "6.5" },
  { nom: "Sedki",    poste: "Milieu",    equipe: "6.5" },
   { nom: "Hazem",    poste: "Attaquant",    equipe: "6.5" },
    { nom: "Houssem",    poste: "Attaquant",    equipe: "8.2" },
     { nom: "Derdouri",    poste: "Attaquant",    equipe: "6" },
  { nom: "Oussama",  poste: "Attaquant", equipe: "6.5" }
];

// ❌ Joueurs absents
const ABSENTS = [
  { nom: "Nsayer", raison: "Blessé " },
  
  { nom: "Kawa",  raison: "Mkarez min badis" }
];

// 🟨🟥 Mur des bêtises (carton : "jaune" ou "rouge")
const BETISES = [
  { nom: "Jawher",   faute: "Jbed bina nhar el match", carton: "jaune", date: "2026-11-04"  },
  { nom: "Haroun",   faute: "Yakfer",                carton: "rouge", date: "2026-10-28" }
];
