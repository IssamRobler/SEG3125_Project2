import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";

const paperStyle = {
  width: "50vh",
  minHeight: "50vh",
  background: "linear-gradient(#66CCCC, #FFCC33)",
  margin: "5% auto",
};
export function CreateAccount() {
  return (
    <Paper elevation={3} style={paperStyle}>
      <Form>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          <Text>Sign Up</Text>
        </Typography>
        <UserInputs>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
              style={{ background: "white" }}
              fullWidth
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              label="Password"
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              label="Retype password"
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
            />
          </div>
        </UserInputs>
        <Button
          variant="container"
          style={{ backgroundColor: "#CC9933", padding: "15px" }}
        >
          <Typography variant="subtitle2">
            <Text>Create Account</Text>
          </Typography>
        </Button>
      </Form>
    </Paper>
  );
}

const UserInputs = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  height: 50vh;
  padding: 10%;
  width: 75%;

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
