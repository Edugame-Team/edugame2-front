export default {
  navigation: {
    menu: {
      title: 'EduGame',
      child: {
        home: 'Acceuil',
        path: 'Parcours',
        library: 'Bibliotheque',
        messages: 'Messagerie',
        stats: 'Statistiques',
        rewards: 'Trophees',
        help: 'Aide',
        disconnect: 'Se deconnecter',
      },
    },
    login: {
      title: 'Login',
    },
    chooseType: {
      title: 'Choose type',
    },
  },
  screens: {
    choose_type: {
      student: {
        id: 1,
        choose_type: 'Je suis un élève',
      },
      parent: {
        id: 2,
        choose_type: 'Je suis parent',
      },
      professor: {
        id: 3,
        choose_type: 'Je suis professeur',
      },
    },
    login: {
      input: {
        email: 'Email',
        password: 'Password',
        password_error: 'ERROR PASSWORD',
      },
      button: {
        login: 'Sign in to my account',
        signup: 'Signup',
        reset_password: 'Password Reset',
      },
      title: 'Sign In',
      subTitle: 'Sign in with your details',
      forgot_password: 'Forgot Password ? - ',
      have_an_account: 'Don\'t have an account ? - ',
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
