import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { Home } from "./pages/home/Home";
import { Breakfast } from "./pages/breakfast/Breakfast";
import { Lunch } from "./pages/lunch/Lunch";
import { Dinner } from "./pages/dinner/Dinner";
import { Snacks } from "./pages/snacks/Snacks";
import { ShareRecipe } from "./pages/sharerecipe/ShareRecipe";
import { Login } from "./pages/login/Login";
import { Footer } from "./components/footer/Footer";
import { ViewRecipe } from "./pages/viewrecipe/ViewRecipe";
import { CreateAccount } from "./pages/createaccount/CreateAccount";
import styled from "styled-components";
import { SucessShareRecipe } from "./pages/successsharerecipe/Sucess";
import { Suspense } from "react";
import { CostGenerator } from "./pages/costgenerator/CostGenerator";
import { SucessAccountCreated } from "./pages/sucessaccountcreated/SucessAccountCreated";
import { SucessForgotPassword } from "./pages/sucessforgotpassword/SucessForgotPassword";
import { ForgotPassword } from "./pages/forgotPassword/ForgotPassword";
function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Nav />
        <Content>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/breakfast" element={<Breakfast />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/lunch" element={<Lunch />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/dinner" element={<Dinner />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/snacks" element={<Snacks />}></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/costgenerator"
              element={<CostGenerator />}
            ></Route>
          </Routes>
          <Routes>
            <Route exact path="/sharerecipe" element={<ShareRecipe />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/viewRecipe/:id"
              element={<ViewRecipe />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/createAccount"
              element={<CreateAccount />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/sucessShareRecipe"
              element={<SucessShareRecipe />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/sucessAccountCreated"
              element={<SucessAccountCreated />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/sucessForgotPassword"
              element={<SucessForgotPassword />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/forgotPassword"
              element={<ForgotPassword />}
            ></Route>
          </Routes>
        </Content>
        <Footer />
      </Router>
    </Suspense>
  );
}

const Content = styled.div`
  min-height: 100vh;
`;
export default App;
