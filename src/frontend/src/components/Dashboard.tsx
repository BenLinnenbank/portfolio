import React from 'react';
import { Row, Col } from 'reactstrap';
import {
  Switch,
  Route,
} from "react-router-dom";
import { About } from './About';
import { Gallery } from './Gallery';
import { Header } from './Header';
import { Burger } from './Burger';
import { Home } from './Home';

export function Dashboard() {

  return (
    <>
      <Row className="header-bar">
        <Col xs="3">
          <Burger />
        </Col>
        <Col xs="6">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs="3" className="transparant-div" />
        <Col xs="6">
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/gallery" exact>
              <Gallery />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Col>
        <Col xs="3"></Col>
      </Row>
    </>
  );
}