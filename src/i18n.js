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
          prepTime: "Prep time",
          cookTime: "Cook time",
          servings: "Servings",
          instructions: "Instructions",
          ingredients: "Ingredients",
          leaveComment: "Leave a comment",
          submitBtn: "Submit",
        },
        loginForm: {
          title: "Login",
          email: "Email",
          password: "Password",
          rememberMe: "Remember me",
          forgotPassword: "Forgot password",
          loginBtn: "Login",
          createAccount: "Create account",
          missingEmailErrorTitle: "Missing Email",
          missingEmailErrorMsg: "Please supply your email.",
          missingPasswordErrorTitle: "Missing password",
          missingPasswordErrorMsg: "Please supply your password.",
        },
        createAccountForm: {
          title: "Sign up",
          email: "Email",
          password: "Password",
          retypePassword: "Retype password",
          createAccountBtn: "Create account",
          missingEmailErrorTitle: "Missing Email",
          missingEmailErrorMsg: "Please supply your email.",
          missingPasswordErrorTitle: "Missing password",
          missingPasswordErrorMsg: "Please supply your password.",
          missingRetypePasswordErrorTitle: "Retype password",
          missingRetypePasswordErrorMsg: "Please retype your password.",
          differentPasswordErrorTitle: "Different passwords",
          differentPasswordErrorMsg:
            "Please make sure your correctly retype your password.",
        },
        shareRecipeForm: {
          title: "Share a recipe",
          recipeName: "Recipe name",
          recipeSummary: "Recipe summary",
          uploadImg: "Upload image",
          prepTime: "Prep time",
          cookTime: "Cook time",
          servings: "Servings",
          step0: "Share a recipe: Recipe Info",
          step1: "Share a recipe: Ingredients",
          step2: "Share a recipe: Instructions",
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
          missingRecipeNameErrorTitle: "Missing recipe name",
          missingRecipeNameErrorMsg: "Please supply your recipe name.",
          missingRecipeSummaryErrorTitle: "Missing recipe summary",
          missingRecipeSummaryErrorMsg: "Please supply your recipe summary.",
          invalidPrepTimeNumberErrorTitle: "Invalid prep time number",
          invalidPrepTimeNumberErrorMsg:
            "You cannot have a negative prep time.",
          invalidCookTimeNumberErrorTitle: "Invalid cook time number",
          invalidCookTimeNumberErrorMsg:
            "You cannot have a negative cook time.",
          invalidServingsNumberErrorTitle: "Invalid servings number",
          invalidServingsNumberErrorMsg: "You cannot have a negative servings.",
          missingIngredientsErrorTitle: "Missing ingredients",
          missingIngredientsErrorMsg: "Please supply your ingredients.",
          missingIngredientNameErrorTitle: "Missing ingredient name",
          missingIngredientNameErrorMsg:
            "Please supply your ingredient names, some are empty.",
          missingInstructionsErrorTitle: "Missing instructions",
          missingInstructionsErrorMsg: "Please supply your instructions.",
          missingInstructionContentErrorTitle: "Missing instruction content",
          missingInstructionContentErrorMsg:
            "Please supply your instruction, some are empty.",
          invalidWeightNumberErrorTitle: "Invalid weight number",
          invalidWeightNumberErrorMsg: "You cannot have a negative weights.",
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
          prepTime: "Temps de préparation",
          cookTime: "Temps de cuisson",
          servings: "Portions",
          instructions: "Instructions",
          ingredients: "Ingrédient",
          leaveComment: "Laissez un commentaire",
          submitBtn: "Soumettre",
        },
        loginForm: {
          title: "Connexion",
          email: "Email",
          password: "Mot de passe",
          rememberMe: "Mémoriser info",
          forgotPassword: "Mot de passe oublié",
          loginBtn: "Connexion",
          createAccount: "Créer un compte",
          missingEmailErrorTitle: "E-mail manquant",
          missingEmailErrorMsg: "Veuillez fournir votre e-mail.",
          missingPasswordErrorTitle: "Mot de passe manquant",
          missingPasswordErrorMsg: "Veuillez fournir votre mot de passe.",
        },
        createAccountForm: {
          title: "S'inscrire",
          email: "Email",
          password: "Mot de passe",
          retypePassword: "Retaper le mot de passe",
          createAccountBtn: "Créer un compte",
          missingEmailErrorTitle: "E-mail manquant",
          missingEmailErrorMsg: "Veuillez fournir votre e-mail.",
          missingPasswordErrorTitle: "Mot de passe manquant",
          missingPasswordErrorMsg: "Veuillez fournir votre mot de passe.",
          missingRetypePasswordErrorTitle: "Retaper le mot de passe",
          missingRetypePasswordErrorMsg: "Veuillez retaper votre mot de passe.",
          differentPasswordErrorTitle: "Mot de passe différent",
          differentPasswordErrorMsg:
            "Assurez-vous de retaper correctement votre mot de passe.",
        },
        shareRecipeForm: {
          title: "Partager une recette",
          recipeName: "Nom de la recette",
          recipeSummary: "Résumé de la recette",
          uploadImg: "télécharger une image",
          prepTime: "Temps de préparation",
          cookTime: "Temps de cuisson",
          servings: "Portions",
          step0: "Share a recipe: Informations sur la recette",
          step1: "Share a recipe: Ingrédients",
          step2: "Share a recipe: Instructions",
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
          missingRecipeNameErrorTitle: "Nom de recette manquant",
          missingRecipeNameErrorMsg:
            "Veuillez fournir le nom de votre recette.",
          missingRecipeSummaryErrorTitle: "Résumé de la recette manquant",
          missingRecipeSummaryErrorMsg:
            "Veuillez fournir votre résumé de recette.",
          invalidPrepTimeNumberErrorTitle:
            "Numéro d'heure de préparation invalide",
          invalidPrepTimeNumberErrorMsg:
            "Vous ne pouvez pas avoir un temps de préparation négatif.",
          invalidCookTimeNumberErrorTitle: "Invalid cook time number",
          invalidCookTimeNumberErrorMsg: "Numéro de temps de cuisson invalide",
          invalidServingsNumberErrorTitle: "Nombre de portions invalides",
          invalidServingsNumberErrorMsg:
            "Vous ne pouvez pas avoir de portions négatives.",
          missingIngredientsErrorTitle: "Ingrédients manquants",
          missingIngredientsErrorMsg: "Veuillez fournir votre ingrédients.",
          missingIngredientNameErrorTitle: "Nom d'ingrédient manquant",
          missingIngredientNameErrorMsg:
            "Veuillez fournir vos noms d'ingrédients, certains sont vides.",
          missingInstructionsErrorTitle: "Instructions manquantes",
          missingInstructionsErrorMsg: "Veuillez fournir vos instructions.",
          missingInstructionContentErrorTitle: "Contenu d'instruction manquant",
          missingInstructionContentErrorMsg:
            "Veuillez fournir vos instructions, certaines sont vides.",
          invalidWeightNumberErrorTitle: "Nombre de poids invalide",
          invalidWeightNumberErrorMsg:
            "Vous ne pouvez pas avoir de poids négatives.",
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
