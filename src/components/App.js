import React from "react";
import "./style/style.css";
import { PulseLoader } from "react-spinners";
import { AuthProvider } from "../authTools/AuthHandler.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("./TableBoard.jsx"));
const Private = React.lazy(() => import("./errorPage/RedirectToLogin.js"));
const NotFound = React.lazy(() => import("./errorPage/ErrorCatched.jsx"));
const Login = React.lazy(() => (import("./RegisterSection/SinginForm.jsx")));
const Signup = React.lazy(() => import("./RegisterSection/SignupForm.jsx"));

function App() {
  return (
    <>
      <main className="main">
        <Router>
          <React.Suspense fallback={(<PulseLoader className="loading d-flex justify-content-center align-items-center position-absolute" size={40} color={"#198754"} />)}>
            <AuthProvider>
                <Switch>
                  <Private exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  {/* <Route path="/reset" component={ResetPassword} /> */}
                  <Route path="/:pageName" component={NotFound} />
                </Switch>
            </AuthProvider>
          </React.Suspense>
        </Router>
      </main>
    </>
  );
};

export default App;