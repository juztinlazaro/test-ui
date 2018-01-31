import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "PAGES/Home/Home";
import ColorScheme from "PAGES/ColorScheme/ColorScheme";
import GuideLines from "PAGES/GuideLines/GuideLines";
import Loading from "PAGES/Loading/Loading";
import PanelDocx from "PAGES/Panel/Panel";
import Helpers from "PAGES/Helpers/Helpers";
import Slate from 'PAGES/Slate/Slate';
import WysiwygDocx from 'PAGES/Wysiwyg/Wysiwyg';

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
