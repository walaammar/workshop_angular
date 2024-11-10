export class Utilisateur {
    nom: string;
    prenom: string;
    adresse: {
      rue: string;
      codePostal: string;
      ville: string;
    };
    skills: string[];
  
    constructor() {
      this.nom = '';
      this.prenom = '';
      this.adresse = {
        rue: '',
        codePostal: '',
        ville: ''
      };
      this.skills = [];
    }
  }
  