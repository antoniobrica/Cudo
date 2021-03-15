// import React from 'react';

// import styles from './app.module.scss';

// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';
// import Grid from '@material-ui/core/Grid';

// import { Route, Link } from 'react-router-dom';
// import MfAccountAppMount from './mf-account-app-mount/mf-account-app-mount';
// import { MfMeetingAppMount } from './mf-meeting-app-mount/mf-meeting-app-mount';

// export function App() {
//   return (
//     <div className={styles.app}>
//       <header className="flex">
//         <Logo width="75" height="75" />
//         <h1>Welcome to mf-container-app!</h1>
//       </header>
//       <div role="navigation">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/page-2">Page 2</Link>
//           </li>
//           <li>
//             <Link to="/page-3">Page 3</Link>
//           </li>
//         </ul>
//       </div>
//       <Route
//         path="/"
//         exact
//         render={() => (
//           <div>
//             This is the generated root route.{' '}
//             <Link to="/page-2">Click here for page 2.</Link>
//           </div>
//         )}
//       />
//       <Route
//         path="/page-2"
//         exact
//         render={() => (
//           <main>
//             <Grid  >
//               <MfAccountAppMount></MfAccountAppMount>
//             </Grid>
//           </main>
//         )}
//       />
//       <Route
//         path="/page-3"
//         exact
//         render={() => (
//           <main>
//             <Grid  >
//               <MfMeetingAppMount></MfMeetingAppMount>
//             </Grid>
//           </main>
//         )}
//       />
//       <body>

//       </body>
//       {/* END: routes */}
//     </div>

//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "../MicroFrontend";

import "./app.module.scss";
import { environment } from "../environments/environment";
// import Login from './login/login'
import { Menubar } from '@cudo/shared-components';
import '../../../../libs/shared-components/src/style/index.scss';
import { SessionProvider } from "./services/session";
import { Dashboard } from "./containers/Dashboard";
import { Callback } from "./containers/Callback";
import { Settings } from "./containers/Settings";
import { Verify } from "./containers/Verify";
import { Recover } from "./containers/Recover";
import { Register } from "./containers/Register";
import { Error } from "./containers/Error"
import { Login } from "./containers/Login"
import config from "./config/kratos"
import LoginPassword from "./login-password/login-password";
import LoginSelect from "./login-select/login-select";


// import Home from './home/home'
const defaultHistory = createBrowserHistory();

const {
  // EACT_APP_COST_HOST: costHost,
  REACT_APP_PROJECT_HOST: projectHost,
} = environment;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title"> Welcome mf-container-app</h1>
    </div>
  );
}

function ProjectApp(history: any) {
  return (
    <MicroFrontend history={history} host={projectHost} name="ProjectApp" />
  );
}

// function CostApp(history: any) {
//   return (
//     <MicroFrontend history={history} host={costHost} name="CostApp" />
//   );
// }

function Home({ history }) {
  const [input, setInput] = useState("");
  const [isProject, setIsProject] = useState(false);
  const data = "parrent"
  const callbackFunction = (childData) => {
    setInput(childData);
    if (childData == "project") {
      setIsProject(true);
    }
    else {
      setIsProject(false);
    }
  };
  return (
    <div>
      {/* <Header /> */}
      <Menubar data={data} parentCallback={callbackFunction}></Menubar>
      <div className="home">
        {isProject ?
          <div>
            <ProjectApp></ProjectApp>
          </div> :
          null}

      </div>
    </div>
  );
}

// function App() {
//   return (
//     <React.StrictMode>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Login} />
//           <Route exact path="/home" component={Home} />
//         </Switch>
//       </Router>
//     </React.StrictMode>
//   );
// }
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SessionProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/login-passwoord" component={LoginPassword} />
            <Route path="/login-select" component={LoginSelect} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path={config.routes.login.path} component={Login} />
            <Route exact path={config.routes.settings.path} component={Settings} />
            <Route exact path={config.routes.verification.path} component={Verify} />
            <Route exact path={config.routes.recovery.path} component={Recover} />
            <Route exact path={config.routes.registration.path} component={Register} />
            <Route exact path={config.routes.error.path} component={Error} />
          </Switch>
        </SessionProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;

