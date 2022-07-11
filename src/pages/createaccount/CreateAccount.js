import { Paper, TextField, Typography, Button } from "@mui/material";
import { width } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageTitle, Text } from "../../components/typography/Typography";
import { useTranslation } from "react-i18next";

const paperStyle = {
  width: "50vh",
  minHeight: "50vh",
  background: "linear-gradient(#66CCCC, #FFCC33)",
  margin: "5% auto",
};
export function CreateAccount() {
  const { t } = useTranslation(["createAccountForm"]);
  return (
    <Paper elevation={3} style={paperStyle}>
      <Form>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          <Text>{t("title")}</Text>
        </Typography>
        <UserInputs>
          <div>
            <TextField
              required
              id="outlined-required"
              label={t("email")}
              style={{ background: "white" }}
              fullWidth
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              label={t("password")}
              style={{ background: "white" }}
              type="password"
              fullWidth
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              label={t("retypePassword")}
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
            <Text>{t("createAccountBtn")}</Text>
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
