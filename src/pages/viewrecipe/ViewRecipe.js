import styled from "styled-components";
import { TextField, Typography } from "@mui/material";
import img from "../../img/foodpreview.png";
import { Button } from "@mui/material";
export function ViewRecipe() {
  return (
    <RecipeContainer>
      <Typography variant="h3">Food title</Typography>
      <HorizontalLine />

      <FoodDescriptionContainer>
        <FoodPreview>
          <img src={img} />
          <FoodNumerics>
            <div>
              <Typography variant="h6">
                <strong>Prep time</strong>
              </Typography>
              <Typography variant="h6">10 min</Typography>
            </div>
            <div>
              <Typography variant="h6">
                <strong>Cook time</strong>
              </Typography>
              <Typography variant="h6">10 min</Typography>
            </div>
            <div>
              <Typography variant="h6">
                <strong>Servings</strong>
              </Typography>
              <Typography variant="h6">2-10</Typography>
            </div>
          </FoodNumerics>
        </FoodPreview>

        <Typography variant="h6">Food description</Typography>
        <UserInfo>
          <Typography variant="h6">By user</Typography>
        </UserInfo>
      </FoodDescriptionContainer>

      <Typography variant="h4">Ingredients</Typography>
      <HorizontalLine />
      <List>
        <ul>
          <li>
            <Typography variant="h6">Ingredient #1</Typography>
          </li>
          <li>
            <Typography variant="h6">Ingredient #2</Typography>
          </li>
          <li>
            <Typography variant="h6">Ingredient #3</Typography>
          </li>
          <li>
            <Typography variant="h6">Ingredient #4</Typography>
          </li>
          <li>
            <Typography variant="h6">Ingredient #5</Typography>
          </li>
        </ul>
      </List>

      <Typography variant="h4">Instructions</Typography>
      <HorizontalLine />
      <List>
        <ul>
          <li>
            <Typography variant="h6">Instruction #1</Typography>
          </li>
          <li>
            <Typography variant="h6">Instruction #2</Typography>
          </li>
          <li>
            <Typography variant="h6">Instruction #3</Typography>
          </li>
          <li>
            <Typography variant="h6">Instruction #4</Typography>
          </li>
          <li>
            <Typography variant="h6">Instruction #5</Typography>
          </li>
        </ul>
      </List>

      <CommentSection>
        <Typography variant="h4">Leave a comment</Typography>
        <CommentField>
          <TextField multiline fullWidth />
          <SignupLoginButton>
            <Button variant="container">
              <Typography variant="subtitle2">submit</Typography>
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
