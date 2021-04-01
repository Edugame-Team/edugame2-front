/* eslint-disable global-require */
export default {
  navigation: {
    menu: {
      title: 'EduGame',
      child: {
        home: 'Accueil',
        path: 'Parcours',
        library: 'Bibliotheque',
        messages: 'Messagerie',
        stats: 'Statistiques',
        rewards: 'Trophées',
        profil: 'Profil',
        help: 'Aide',
        disconnect: 'Se déconnecter',
      },
    },
    login: {
      title: 'Login',
    },
    chooseType: {
      title: 'Qui êtes vous?',
    },
  },
  screens: {
    choose_type: {
      student: {
        id: 1,
        choose_type: 'Élève',
        img: require('../../../assets/img/type/eleve.jpg'),
      },
      parent: {
        id: 2,
        choose_type: 'Parent',
        img: require('../../../assets/img/type/parent.jpg'),
      },
      professor: {
        id: 3,
        choose_type: 'Professeur',
        img: require('../../../assets/img/type/prof.jpg'),
      },
    },
    login: {
      input: {
        email: 'Email',
        password: 'Mot de passe',
        password_error: 'ERROR PASSWORD',
      },
      button: {
        login: 'Se connecter',
        signup: 'Créer un compte',
        reset_password: 'Réinitialiser le mot de passe',
      },
      title: 'Connexion',
      subTitle: 'Veuillez vous connecter',
      forgot_password: 'Mot de passe oublié? - ',
      have_an_account: 'Pas encore de compte ? - ',
    },
    home: {
      text: {
        level: 'niv.',
      },
    },
  },
  alert: {
    ok: 'OK',
    cancel: 'Annuler',
    disconnect: {
      title: 'Se deconnecter',
      question: 'Voulez vous vous deconnecter ?',
    },
  },
};
/* eslint-enable global-require */
