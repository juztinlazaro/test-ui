import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home/Home";
import ColorScheme from "../pages/ColorScheme/ColorScheme";
import GuideLines from "../pages/GuideLines/GuideLines";
import Loading from "../pages/Loading/Loading";
import PanelDocx from "../pages/Panel/Panel";
import Helpers from "../pages/Helpers/Helpers";
import Slate from '../pages/Slate/Slate';
import WysiwygDocx from '../pages/Wysiwyg/Wysiwyg';

class Routes extends Component {
  render() {
    return <Switch>
        <Route path="/colorscheme" component={ColorScheme} exact />
        <Route path="/guidelines" component={GuideLines} exact />
        <Route path="/loading" component={Loading} exact />
        <Route path="/panel" component={PanelDocx} exact />
        <Route path="/helpers" component={Helpers} exact />
        <Route path="/slate" component={Slate} exact />
        <Route path="/wysiwyg" component={WysiwygDocx} exact />
        <Route path="/" component={Home} exact />
      </Switch>;
  }
}

export default Routes;
