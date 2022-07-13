import styled from "styled-components";
import { TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { MOCK_DATA } from "../../mock_data/recipes";
import { useTranslation } from "react-i18next";

export function ViewRecipe() {
  const { id } = useParams();
  const recipe = MOCK_DATA.filter((d) => d.id === parseInt(id))[0];
  const { t } = useTranslation(["common"]);
  return (
    <RecipeContainer>
      <Typography variant="h3">{recipe.recipe_title}</Typography>
      <HorizontalLine />

      <FoodDescriptionContainer>
        <FoodPreview>
          <img src={recipe.recipe_img} width={600} height={400} />
          <FoodNumerics>
            <div>
              <Typography variant="h6">
                <strong>{t("prepTime")}</strong>
              </Typography>
              <Typography variant="h6">{`${recipe.prep_time_number} ${recipe.prep_time_unit}`}</Typography>
            </div>
            <div>
              <Typography variant="h6">
                <strong>{t("cookTime")}</strong>
              </Typography>
              <Typography variant="h6">{`${recipe.cook_time_number} ${recipe.cook_time_unit}`}</Typography>
            </div>
            <div>
              <Typography variant="h6">
                <strong>{t("servings")}</strong>
              </Typography>
              <Typography variant="h6">{recipe.num_servings}</Typography>
            </div>
          </FoodNumerics>
        </FoodPreview>

        <Typography variant="h6">{recipe.recipe_summary}</Typography>
        <UserInfo>
          <Typography variant="h6">By user</Typography>
        </UserInfo>
      </FoodDescriptionContainer>

      <Typography variant="h4">{t("ingredients")}</Typography>
      <HorizontalLine />
      <List>
        <ul>
          {recipe.ingredients.map((ingredient) => {
            return (
              <li>
                <Typography variant="h6">{`${ingredient.name}, ${
                  ingredient.amount
                } ${
                  ingredient.unit === "N/A" ? "" : ingredient.unit
                }`}</Typography>
              </li>
            );
          })}
        </ul>
      </List>

      <Typography variant="h4">{t("instructions")}</Typography>
      <HorizontalLine />
      <List>
        <ul>
          {recipe.instructions.map((instruction) => {
            return (
              <li>
                <Typography variant="h6">{instruction}</Typography>
              </li>
            );
          })}
        </ul>
      </List>

      <CommentSection>
        <Typography variant="h4">{t("leaveComment")}</Typography>
        <CommentField>
          <TextField multiline fullWidth />
          <SignupLoginButton>
            <Button variant="container">
              <Typography variant="subtitle2">{t("submitBtn")}</Typography>
            </Button>
          </SignupLoginButton>
        </CommentField>
      </CommentSection>
    </RecipeContainer>
  );
}

const RecipeContainer = styled.div`
  margin: 3% 5%;
  display: flex;
  flex-direction: column;
`;

const HorizontalLine = styled.hr`
  margin: 2% 0;
`;

const FoodPreview = styled.div`
  display: flex;
  flex-direction: row;
`;

const FoodDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin: 3% 0;
  }
`;
const List = styled.div`
  li {
    margin: 3% 0;
  }
`;

const UserInfo = styled.div`
  margin-top: 2%;
`;

const FoodNumerics = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  gap: 5%;
`;
const CommentSection = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  > div {
    margin: 5% 0;
  }
`;
const SignupLoginButton = styled.div`
  background-color: #cc9933;
  border: none;
  border-radius: 5px;
  color: white;
  width: fit-content;
  margin-top: 2%;
`;
const CommentField = styled.div``;
