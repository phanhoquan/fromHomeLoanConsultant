import React from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/styles/scss/style.scss";
import { routes } from "./config/routes";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { links } from "./config/links";
import { Home } from "./pages/home/Home";
import { MainLayout } from "./components/layouts/MainLayout";

export default function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline>
        <ThemeProvider theme={theme.mui}>
          <Switch>
            <Route exact path={links.home()} component={Home} />
            <MainLayout>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </MainLayout>
          </Switch>
        </ThemeProvider>
      </CssBaseline>
    </StylesProvider>
  );
}
