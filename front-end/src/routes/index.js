import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import Directories from "../pages/Directories";
import NewDirectory from "../pages/Directories/newDirectory";
import NewGeo from "../pages/GeometricShapes/newGeo";
import GeometricShapes from "../pages/GeometricShapes";
import GeometricDetails from "../pages/GeometricShapes/GeometricDetails";
import GeoShapesbyDir from "../pages/Directories/GeoShapesbyDir";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Directories} exact />
        <PublicRoute
          path="/directories/newDirectory"
          component={NewDirectory}
          exact
        />
        <PublicRoute path="/directories/:id" component={GeoShapesbyDir} exact />
        <PublicRoute
          path="/geometricshapes"
          component={GeometricShapes}
          exact
        />
        <PublicRoute path="/geometricshapes/newGeo" component={NewGeo} />
        <PublicRoute path="/geometricshapes/:id" component={GeometricDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
