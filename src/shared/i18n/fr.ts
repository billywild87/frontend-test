export const fr = {
  common: {
    error: {
      title: "Une erreur est survenue",
      description: "Impossible de charger les données. Veuillez réessayer.",
      retry: "Réessayer",
    },
    notFound: {
      title: "Page introuvable",
      description: "La page que vous recherchez n'existe pas.",
      backHome: "Retour à l'accueil",
    },
  },
  newsletter: {
    page: {
      title: "NEWSLETTERS",
      description:
        "Dans cette page, vous trouverez l'ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d'intérêt et gérer plus facilement l'inscription à vos newsletters.",
    },
    cta: {
      subscribe: "S'abonner",
      register: "S'inscrire",
    },
    empty: {
      title: "Aucune newsletter disponible",
      description: "Revenez plus tard pour découvrir nos newsletters.",
    },
    error: {
      title: "Erreur de chargement",
      description: "Impossible de charger les newsletters. Veuillez réessayer.",
    },
    scenario: {
      all: "Toutes",
      empty: "Vide",
      error: "Erreur",
    },
  },
  user: {
    scenario: {
      none: "Sans abo",
      one: "1 abo",
      multi: "Multi",
    },
  },
  dev: {
    drawer: {
      title: "Dev Tools",
      section: {
        userScenario: "User Scenario",
        newsletterScenario: "Newsletter Scenario",
      },
    },
  },
} as const;
