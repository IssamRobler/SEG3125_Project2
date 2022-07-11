import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: {
          title: "Welcome to BestRecipe",
          description: "A place for foodies and culinary explorers",
          subdescription: "View and share recipes with others",
        },
        foodcard: {
          link: "View recipe",
        },
        common: {
          loadbtn: "Load more",
          breakfast: "Breakfast",
          lunch: "Lunch",
          dinner: "Dinner",
          snack: "Snacks",
          signup: "Sign up / Login",
          sharerecipe: "Share a recipe",
          sortNew: "Newest",
          sortOld: "Oldest",
          sortOrder: "Sort order",
        },
        loginForm: {
          title: "Login",
          email: "Email",
          password: "Password",
          rememberMe: "Remember me",
          forgotPassword: "Forgot password",
          loginBtn: "Login",
          createAccount: "Create account",
        },
        createAccountForm: {
          title: "Sign up",
          email: "Email",
          password: "Password",
          retypePassword: "Retype password",
          createAccountBtn: "Create account",
        },
        shareRecipeForm: {
          title: "Share a recipe",
          recipeName: "Recipe name",
          recipeSummary: "Recipe summary",
          uploadImg: "Upload image",
          prepTime: "Prep time",
          cookTime: "Cook time",
          servings: "Servings",
          unit: "Unit",
          type: "Type",
          ingredientName: "Ingredient name",
          weight: "Weight",
          addIngredientBtn: "Add ingredient",
          removeIngredientBtn: "Remove ingredient",
          instruction: "Instruction",
          addInstructionBtn: "Add instruction",
          removeInstructionBtn: "Remove instruction",
          submitBtn: "Submit",
          nextBtn: "Next",
          backBtn: "Back",
          fileName: "File name",
        },
        shareRecipeSuccess: {
          title: "Success",
          description: "You have successfully shared your recipe !",
          backToHomeBtn: "Back to homepage",
        },
      },
      fr: {
        home: {
          title: "Bienvenue a BestRecipe",
          description:
            "Un endroit pour les gourmets et les explorateurs culinairess",
          subdescription: "Afficher et partager des recettes avec d'autres",
        },
        foodcard: {
          link: "Voir la recette",
        },
        common: {
          loadbtn: "Charger plus",
          breakfast: "Petit-déjeuner",
          lunch: "Déjeuner",
          dinner: "Dîner",
          snack: "Collations",
          signup: "S'inscrite / Login",
          sharerecipe: "Partager une recette",
          sortNew: "Récent",
          sortOld: "Ancien",
          sortOrder: "Ordre de tri",
        },
        loginForm: {
          title: "Connexion",
          email: "Email",
          password: "Mot de passe",
          rememberMe: "Mémoriser info",
          forgotPassword: "Mot de passe oublié",
          loginBtn: "Connexion",
          createAccount: "Créer un compte",
        },
        createAccountForm: {
          title: "S'inscrire",
          email: "Email",
          password: "Mot de passe",
          retypePassword: "Retaper le mot de passe",
          createAccountBtn: "Créer un compte",
        },
        shareRecipeForm: {
          title: "Partager une recette",
          recipeName: "Nom de la recette",
          recipeSummary: "Résumé de la recette",
          uploadImg: "télécharger une image",
          prepTime: "Temps de préparation",
          cookTime: "Temps de cuisson",
          servings: "Portions",
          unit: "Unité",
          type: "Type",
          ingredientName: "Nom de l'ingrédient",
          weight: "Poids",
          addIngredientBtn: "ajouter un ingrédient",
          removeIngredientBtn: "Retirer un ingrédient",
          instruction: "Instruction",
          addInstructionBtn: "ajouter un instruction",
          removeInstructionBtn: "Retirer un instruction",
          submitBtn: "Soumettre",
          nextBtn: "Prochain",
          backBtn: "Retour",
          fileName: "Nom de fichier",
        },
        shareRecipeSuccess: {
          title: "Succès",
          description: "Vous avez partagé votre recette avec succès !",
          backToHomeBtn: "Retour à la page d'accueil",
        },
      },
    },
    fallbackLng: "en",
    // disabled in production
    debug: true,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ["common", "home"],

    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
    keySeparator: false,
  });

export default i18n;
