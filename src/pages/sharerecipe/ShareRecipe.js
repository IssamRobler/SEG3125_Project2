import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useState, useCallback } from "react";
import { MainInfo } from "./MainInfo";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { useTranslation } from "react-i18next";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const timeUnits = [
  {
    value: "hours",
    label: "hrs",
  },
  {
    value: "minutes",
    label: "min",
  },
];
const paperStyle = {
  width: "50vh",
  minHeight: "50vh",
  background: "linear-gradient(#66CCCC, #FFCC33)",
  margin: "5% auto",
};
export function ShareRecipe() {
  const [formData, setFormData] = useState({
    recipe_name: "",
    recipe_summary: "",
    prep_time_number: 0,
    prep_time_unit: "hours",
    cook_time_number: 0,
    cook_time_unit: "hours",
    num_servings: 0,
    food_type: "Breakfast",
    ingredients: [],
    instructions: [],
  });

  const { t } = useTranslation(["shareRecipeForm"]);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });
  console.log(step);
  const handleNextStep = () => {
    if (step === 0 && (!formData.recipe_name || formData.recipe_name === "")) {
      setIsError(true);
      setError({
        title: t("missingRecipeNameErrorTitle"),
        msg: t("missingRecipeNameErrorMsg"),
      });
    } else if (
      step === 0 &&
      (!formData.recipe_summary || formData.recipe_summary === "")
    ) {
      setIsError(true);
      setError({
        title: t("missingRecipeSummaryErrorTitle"),
        msg: t("missingRecipeSummaryErrorMsg"),
      });
    } else if (step === 0 && parseInt(formData.prep_time_number) < 0) {
      setIsError(true);
      setError({
        title: t("invalidPrepTimeNumberErrorTitle"),
        msg: t("invalidPrepTimeNumberErrorMsg"),
      });
    } else if (step === 0 && parseInt(formData.cook_time_number) < 0) {
      setIsError(true);
      setError({
        title: t("invalidCookTimeNumberErrorTitle"),
        msg: t("invalidCookTimeNumberErrorMsg"),
      });
    } else if (step === 0 && parseInt(formData.num_servings) < 0) {
      setIsError(true);
      setError({
        title: t("invalidServingsNumberErrorTitle"),
        msg: t("invalidServingsNumberErrorMsg"),
      });
    } else if (step === 1 && formData.ingredients.length <= 0) {
      setIsError(true);
      setError({
        title: t("missingIngredientsErrorTitle"),
        msg: t("missingIngredientsErrorMsg"),
      });
    } else if (
      step === 1 &&
      formData.ingredients.some(
        (ingredient) => !ingredient.name || ingredient.name === ""
      )
    ) {
      setIsError(true);
      setError({
        title: t("missingIngredientNameErrorTitle"),
        msg: t("missingIngredientNameErrorMsg"),
      });
    } else if (
      step === 1 &&
      formData.ingredients.some((ingredient) => parseInt(ingredient.amount) < 0)
    ) {
      setIsError(true);
      setError({
        title: t("invalidWeightNumberErrorTitle"),
        msg: t("invalidWeightNumberErrorMsg"),
      });
    } else if (step === 2 && formData.instructions.length <= 0) {
      setIsError(true);
      console.log("jere");
      setError({
        title: t("missingInstructionsErrorTitle"),
        msg: t("missingInstructionsErrorMsg"),
      });
    } else if (
      step === 2 &&
      formData.instructions.some(
        (instruction) => !instruction || instruction === ""
      )
    ) {
      console.log("here");
      setIsError(true);
      setError({
        title: t("missingInstructionContentErrorTitle"),
        msg: t("missingInstructionContentErrorMsg"),
      });
      return false;
    } else {
      setIsError(false);
      setError({
        title: "",
        msg: "",
      });
      if (step < 2) {
        setStep(step + 1);
      } else {
        navigate("/sucessShareRecipe");
      }
    }
  };
  const navigate = useNavigate();

  const handleMainInfoChange = (input) => (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [input]: e.target.value,
    }));
  };

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index][event.target.name] = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      ingredients: newIngredients,
    }));
  };

  const handleInstructionChange = (index) => (e) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      instructions: newInstructions,
    }));
  };

  const addIngredient = () => {
    const newIngredients = [...formData.ingredients];
    newIngredients.push({
      name: "",
      amount: 0,
      unit: "gram",
    });
    setFormData((prevState) => ({
      ...prevState,
      ingredients: newIngredients,
    }));
  };

  const removeIngredient = () => {
    const newIngredients = [...formData.ingredients];
    newIngredients.pop();
    setFormData((prevState) => ({
      ...prevState,
      ingredients: newIngredients,
    }));
  };

  const addInstruction = () => {
    const newInstructions = [...formData.instructions];
    newInstructions.push("");
    setFormData((prevState) => ({
      ...prevState,
      instructions: newInstructions,
    }));
  };

  const removeInstruction = () => {
    const newInstructions = [...formData.instructions];
    newInstructions.pop();
    setFormData((prevState) => ({
      ...prevState,
      instructions: newInstructions,
    }));
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const getCurrentStep = useCallback(() => {
    switch (step) {
      case 0:
        return (
          <MainInfo
            mainStepHandler={handleMainInfoChange}
            mainInfoData={formData}
          />
        );
      case 1:
        return (
          <Ingredients
            ingredientStepHandler={handleIngredientChange}
            ingredientInfoData={formData.ingredients}
            removeIngredientHandler={removeIngredient}
            addIngredientHandler={addIngredient}
          />
        );
      case 2:
        return (
          <Instructions
            instructionStepHandler={handleInstructionChange}
            instructionInfoData={formData.instructions}
            removeInstructionHandler={removeInstruction}
            addInstructionHandler={addInstruction}
          />
        );
      default:
        return (
          <MainInfo
            mainStepHandler={handleMainInfoChange}
            mainInfoData={formData}
          />
        );
    }
  }, [formData, step]);
  return (
    <Paper elevation={3} style={paperStyle}>
      <Form>
        <TitleContainer>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            <Text>{t("title")}</Text>
          </Typography>
        </TitleContainer>
        {getCurrentStep()}
        <ButtonContainer>
          <Button
            variant="container"
            disabled={step === 0}
            style={{
              backgroundColor: "#339999",
              opacity: step === 0 ? 0.5 : 1,
              padding: "15px",
              width: "30%",
            }}
            onClick={handlePrevStep}
          >
            <Typography variant="subtitle2">
              <Text>{t("backBtn")}</Text>
            </Typography>
          </Button>
          <Button
            variant="container"
            style={{
              backgroundColor: "#339999",
              padding: "15px",
              width: "30%",
            }}
            onClick={handleNextStep}
          >
            <Typography variant="subtitle2">
              <Text>{step < 2 ? t("nextBtn") : t("submitBtn")}</Text>
            </Typography>
          </Button>
        </ButtonContainer>
        {!isError || (
          <Alert severity="error">
            <AlertTitle>{error.title}</AlertTitle>
            {error.msg}
          </Alert>
        )}
      </Form>
    </Paper>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const TitleContainer = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  min-height: 50vh;
  padding: 10%;

  > div {
    margin: 20px 0;
  }

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
