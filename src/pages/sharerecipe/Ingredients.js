import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useTranslation } from "react-i18next";
const weightUnit = [
  {
    value: "gram",
    label: "g",
  },
  {
    value: "kilogram",
    label: "kg",
  },
];

export function Ingredients({
  ingredientStepHandler,
  ingredientInfoData,
  removeIngredientHandler,
  addIngredientHandler,
}) {
  const { t } = useTranslation(["shareRecipeForm"]);
  return (
    <UserInputs>
      {ingredientInfoData.map((value, index) => {
        return (
          <IngredientItem key={index}>
            <IngredientName>
              <TextField
                required
                name="name"
                label={`${t("ingredientName")}`}
                style={{ background: "white" }}
                variant="filled"
                onChange={(event) => ingredientStepHandler(event, index)}
                value={value.name}
              />
            </IngredientName>
            <AmountValue>
              <div>
                <TextField
                  required
                  name="amount"
                  label={t("weight")}
                  style={{ background: "white" }}
                  type="number"
                  variant="filled"
                  onChange={(event) => ingredientStepHandler(event, index)}
                  value={value.amount}
                />
              </div>
              <div>
                <TextField
                  select
                  label={t("unit")}
                  name="unit"
                  style={{ background: "white" }}
                  variant="filled"
                  onChange={(event) => ingredientStepHandler(event, index)}
                  value={value.unit}
                >
                  {weightUnit.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
          onClick={addIngredientHandler}
        >
          {t("addIngredientBtn")}
        </Button>
        <Button
          variant="container"
          disabled={ingredientInfoData.length <= 3}
          size="small"
          style={{
            backgroundColor: "#339999",
            opacity: ingredientInfoData.length <= 3 ? "0.5" : "1",
            fontSize: "8px",
            color: "white",
            width: "5px",
            marginLeft: "10px",
          }}
          onClick={removeIngredientHandler}
        >
          {t("removeIngredientBtn")}
        </Button>
      </ButtonContainer>
    </UserInputs>
  );
}
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;
const AmountValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 10px;
  width: 100%;
  > div {
    width: 40%;
  }
`;
const IngredientItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const IngredientName = styled.div`
  width: 100%;
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
