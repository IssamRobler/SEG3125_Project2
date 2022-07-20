import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const paperStyle = {
  width: "100vh",
  minHeight: "50vh",
  background: "linear-gradient(#66CCCC, #FFCC33)",
  margin: "5% auto",
};

const weightUnit = [
  {
    value: "gram",
    label: "g",
  },
  {
    value: "kilogram",
    label: "kg",
  },
  {
    value: "n/a",
    label: "n/a",
  },
];
export function CostGenerator() {
  const [ingredientData, setIngredientData] = useState({
    ingredients: [],
  });

  const { t } = useTranslation(["costGenerator"]);
  const [step, setStep] = useState(0);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({ title: "", msg: "" });
  const [total, setTotal] = useState(0);

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredientData.ingredients];
    newIngredients[index][event.target.name] = event.target.value;
    setIngredientData((prevState) => ({
      ingredients: newIngredients,
    }));
  };

  const addIngredient = () => {
    const newIngredients = [...ingredientData.ingredients];
    newIngredients.push({
      name: "",
      amount: 0,
      unit: "gram",
      cost: 0,
      amountUsed: 0,
    });
    setIngredientData((prevState) => ({
      ingredients: newIngredients,
    }));
  };

  const removeIngredient = () => {
    const newIngredients = [...ingredientData.ingredients];
    newIngredients.pop();
    setIngredientData((prevState) => ({
      ingredients: newIngredients,
    }));
  };

  const calculate = () => {
    let tmp = 0;
    for (const ingredient of ingredientData.ingredients) {
      console.log(ingredient);
      tmp +=
        (parseInt(ingredient.cost) / parseInt(ingredient.amount)) *
        parseInt(ingredient.amountUsed);
    }
    setTotal(Number.isNaN(tmp) ? 0 : tmp);
  };
  return (
    <Paper elevation={3} style={paperStyle}>
      <Form>
        <TitleContainer>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            <Text>{t("title")}</Text>
          </Typography>
        </TitleContainer>
        <UserInputs>
          {ingredientData.ingredients.map((value, index) => {
            return (
              <IngredientItem key={index}>
                <IngredientName>
                  <TextField
                    name="name"
                    label={`${t("ingredientName")}`}
                    style={{ background: "white" }}
                    variant="filled"
                    onChange={(event) => handleIngredientChange(event, index)}
                    value={value.name}
                  />
                </IngredientName>
                <AmountValue>
                  <div style={{ width: "20%" }}>
                    <TextField
                      name="amount"
                      label={t("weight")}
                      style={{ background: "white" }}
                      InputProps={{ inputProps: { min: 0 } }}
                      type="number"
                      variant="filled"
                      onChange={(event) => handleIngredientChange(event, index)}
                      value={value.amount}
                    />
                  </div>
                  <div style={{ width: "20%" }}>
                    <TextField
                      select
                      label={t("unit")}
                      name="unit"
                      style={{ background: "white" }}
                      variant="filled"
                      onChange={(event) => handleIngredientChange(event, index)}
                      value={value.unit}
                    >
                      {weightUnit.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ width: "20%" }}>
                    <TextField
                      InputProps={{ inputProps: { min: 0 } }}
                      label={t("cost")}
                      type="number"
                      name="cost"
                      style={{ background: "white" }}
                      variant="filled"
                      onChange={(event) => handleIngredientChange(event, index)}
                      value={value.cost}
                    ></TextField>
                  </div>
                  <div style={{ width: "20%" }}>
                    <TextField
                      name="amountUsed"
                      label={t("amountUsed")}
                      style={{ background: "white" }}
                      InputProps={{ inputProps: { min: 0 } }}
                      type="number"
                      variant="filled"
                      onChange={(event) => handleIngredientChange(event, index)}
                      value={value.amountUsed}
                    />
                  </div>
                </AmountValue>
              </IngredientItem>
            );
          })}
          <ButtonContainer>
            <Button
              variant="container"
              size="small"
              style={{
                backgroundColor: "#339999",
                fontSize: "8px",
                color: "white",
                width: "5px",
              }}
              onClick={addIngredient}
            >
              {t("addIngredientBtn")}
            </Button>
            <Button
              variant="container"
              disabled={ingredientData.ingredients.length <= 0}
              size="small"
              style={{
                backgroundColor: "#339999",
                opacity: ingredientData.ingredients.length <= 0 ? "0.5" : "1",
                fontSize: "8px",
                color: "white",
                width: "5px",
                marginLeft: "10px",
              }}
              onClick={removeIngredient}
            >
              {t("removeIngredientBtn")}
            </Button>
            <Button
              variant="container"
              size="small"
              onClick={calculate}
              style={{
                backgroundColor: "#339999",
                fontSize: "8px",
                color: "white",
                width: "5px",
                marginLeft: "10px",
              }}
            >
              {t("calculate")}
            </Button>
          </ButtonContainer>
          <Text>
            {t("total")} : {total.toFixed(2)}$
          </Text>
        </UserInputs>
      </Form>
    </Paper>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
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

const AmountValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 10px;
  width: 100%;
  > div {
    width: fit-content;
  }
`;
const IngredientItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const IngredientName = styled.div`
  width: fit-content;
`;

const UserInputs = styled.div`
  min-height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    margin: 10px 0;
  }
`;
