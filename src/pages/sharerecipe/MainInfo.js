import { Paper, TextField, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { Text } from "../../components/typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useTranslation } from "react-i18next";

export function MainInfo({ mainStepHandler, mainInfoData }) {
  const { t } = useTranslation(["shareRecipeForm", "common"]);
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

  const foodType = [
    {
      value: "Breakfast",
      label: t("common:breakfast"),
    },
    {
      value: "Lunch",
      label: t("common:lunch"),
    },
    {
      value: "Dinner",
      label: t("common:dinner"),
    },
    {
      value: "Snack",
      label: t("common:snack"),
    },
  ];
  return (
    <UserInputs>
      <div>
        <TextField
          required
          id="outlined-required"
          label={t("recipeName")}
          style={{ background: "white" }}
          fullWidth
          variant="filled"
          value={mainInfoData.recipe_name}
          onChange={mainStepHandler("recipe_name")}
        />
      </div>
      <div>
        <TextField
          required
          label={t("recipeSummary")}
          style={{ background: "white" }}
          fullWidth
          variant="filled"
          multiline
          maxRows={3}
          value={mainInfoData.recipe_summary}
          onChange={mainStepHandler("recipe_summary")}
        />
      </div>
      <FoodImage>
        <Button variant="contained">
          {t("uploadImg")}
          <input type="file" hidden />
        </Button>
        <Typography
          variant="subtitle2"
          style={{ marginLeft: "10px", lineHeight: "38px" }}
        >
          <Text>{t("fileName")}</Text>
        </Typography>
      </FoodImage>
      <CookingInfo>
        <TextField
          required
          label={t("prepTime")}
          style={{ background: "white" }}
          variant="filled"
          type="number"
          onChange={mainStepHandler("prep_time_number")}
          value={mainInfoData.prep_time_number}
        />
        <TextField
          select
          label={t("unit")}
          style={{ background: "white" }}
          variant="filled"
          onChange={mainStepHandler("prep_time_unit")}
          value={mainInfoData.prep_time_unit}
        >
          {timeUnits.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </CookingInfo>
      <CookingInfo>
        <TextField
          required
          label={t("cookTime")}
          style={{ background: "white" }}
          variant="filled"
          type="number"
          onChange={mainStepHandler("cook_time_number")}
          value={mainInfoData.cook_time_number}
        />
        <TextField
          id="outlined-select-currency"
          select
          label={t("unit")}
          style={{ background: "white" }}
          variant="filled"
          onChange={mainStepHandler("cook_time_unit")}
          value={mainInfoData.cook_time_unit}
        >
          {timeUnits.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </CookingInfo>
      <CookingInfo>
        <TextField
          required
          label={t("servings")}
          style={{ background: "white" }}
          variant="filled"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          onChange={mainStepHandler("num_servings")}
          value={mainInfoData.num_servings}
        />
        <TextField
          id="outlined-select-currency"
          select
          label={t("type")}
          style={{ background: "white" }}
          variant="filled"
          onChange={mainStepHandler("food_type")}
          value={mainInfoData.food_type}
        >
          {foodType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </CookingInfo>
    </UserInputs>
  );
}

const CookingInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const TitleContainer = styled.div`
  width: 100%;
`;
const FoodImage = styled.div`
  width: 100%;
  display: flex;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;

  min-height: 50vh;
  padding: 10%;
  width: 75%;
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
