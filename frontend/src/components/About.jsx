import React from 'react';
import { Row, Col } from 'reactstrap';

export function About() {

  return (

    <Row>
      <Col xs="3" className="transparant-div" />
      <Col xs="6">
        <div className="fade-in about-container">
          <h3 className="about-h1">Hi, my name is Liv. </h3>
          <p>I am a creative artist who's interested in more than just art.</p>
          <p>I've always been surrounder by some form of art. My father, his friends and my eldest brother, are all into acting. My other brother is making his carreer out of playing the piano. My mother and I were more into fine arts.</p>
          <p>During my childhood, there was nothing I enjoyed more, than sitting behind my tiny little desk, painting, tinkering and writing stories. I could spend hours by myself, letting the creativity flow.</p>
          <p>Now at an older age, as the journey to discovering yourself continues, I found another interest. Recently I've started a course to become a full-stack web developer. I can hear you think: "Ohh, that's something else..", Well.. it is! But on the other hand, there's so much room for creativity and that's why it caught my eye.</p>
        </div>
      </Col>
    </Row>

  );
}
