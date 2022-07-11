import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useTranslation } from "react-i18next";

export function Instructions({
  instructionStepHandler,
  instructionInfoData,
  removeInstructionHandler,
  addInstructionHandler,
}) {
  const { t } = useTranslation(["shareRecipeForm"]);

  return (
    <UserInputs>
      {instructionInfoData.map((value, index) => {
        return (
          <InstructionItem key={index}>
            <TextField
              fullWidth
              name="name"
              label={`${t("instruction")} #${index + 1}`}
              style={{ background: "white" }}
              variant="filled"
              onChange={instructionStepHandler(index)}
              value={value}
            />
          </InstructionItem>
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
          onClick={addInstructionHandler}
        >
          {t("addInstructionBtn")}
        </Button>
        <Button
          variant="container"
          disabled={instructionInfoData.length <= 0}
          size="small"
          style={{
            backgroundColor: "#339999",
            opacity: instructionInfoData.length <= 0 ? "0.5" : "1",
            fontSize: "8px",
            color: "white",
            width: "5px",
            marginLeft: "10px",
          }}
          onClick={removeInstructionHandler}
        >
          {t("removeInstructionBtn")}
        </Button>
      </ButtonContainer>
    </UserInputs>
  );
}
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const InstructionItem = styled.div`
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
