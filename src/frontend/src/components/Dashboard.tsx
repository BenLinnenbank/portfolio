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
import { Contact } from './Contact';

export function Dashboard() {

  return (
    <>
      <Row className="header-row">
        <Col xs="3">
          <Burger />
        </Col>
        <Col xs="6">
          <Header />
        </Col>
      </Row>
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/gallery" exact>
          <Gallery />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}