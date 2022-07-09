import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

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
export function SucessShareRecipe() {
  return (
    <Paper elevation={3} style={paperStyle}>
      <Sucess>
        <TitleContainer>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            <Text>Sucess</Text>
          </Typography>
        </TitleContainer>

        <Typography variant="h6" style={{ textAlign: "center" }}>
          <Text>You have sucessfully shared your recipe !</Text>
        </Typography>

        <Link to="/">
          <Button
            variant="container"
            style={{ backgroundColor: "#CC9933", padding: "15px" }}
          >
            <Typography variant="subtitle2">
              <Text>Back to Home</Text>
            </Typography>
          </Button>
        </Link>
      </Sucess>
    </Paper>
  );
}

const Sucess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  justify-content: space-around;
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

const TitleContainer = styled.div`
  width: 100%;
`;
