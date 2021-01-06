import React from "react"
import { FaAward, FaBus, FaGraduationCap } from "react-icons/fa"
import { MdChat, MdGesture } from "react-icons/md"
import { Col, Container, Row } from "react-materialize"

const WhatDoWeDo = () => (
  <section>
    <Container>
      <Row>
        <Col s={12} m={12} className="center">
          <h2>What do we do?</h2>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={4} className="center">
          <h3>
            <MdGesture />
          </h3>
          <h4>Workshops</h4>
          <p>Improve your skills with regular workshops hosted by us</p>
        </Col>
        <Col s={12} m={4} className="center">
          <h3>
            <FaAward />
          </h3>
          <h4>Competitions</h4>
          <p>
            From Hackathons to Capture The Flags, we find ways to challenge our
            members whilst also promoting positive development
          </p>
        </Col>
        <Col s={12} m={4} className="center">
          <h3>
            <MdGesture />
          </h3>
          <h4>Socials</h4>
          <p>
            Whether it is a film night or an SU Takeover. We arrange events that
            are purely social
          </p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={4} className="center">
          <h3>
            <MdChat />
          </h3>
          <h4>Industry Talks</h4>
          <p>
            Listen to talks by those working in the industry and gain critical
            insight into the operations of companies
          </p>
        </Col>
        <Col s={12} m={4} className="center">
          <h3>
            <FaGraduationCap />
          </h3>
          <h4>Academic Support</h4>
          <p>
            University can be challenging. We provide support to our members to
            help them tackle tough topics. This includes teaching non-computer
            science students the programming know-how they require.
          </p>
        </Col>
        <Col s={12} m={4} className="center">
          <h3>
            <FaBus />
          </h3>
          <h4>Trips</h4>
          <p>
            Computer Science is a broad field. To cater to this we provide
            opportunities to go on a range of trips such as: networking events,
            conventions, museums and more!
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export { WhatDoWeDo }
