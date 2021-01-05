import React from "react"
import { Col, Container, Row } from "react-materialize"

const Footer = (): JSX.Element => (
  <footer className="page-footer">
    <Container>
      <Row>
        <Col className="l6 s12">
          <h5>Computing Society</h5>
          <p>
            Compsoc exists to create a setting where like-minded computing
            enthusiasts can interact and socialise. Our core aim is to make the
            student experience more enjoyable for those with even the slightest
            interest.
          </p>
        </Col>
        <Col className="l4 offset-l2 s12">
          <h5>Links</h5>
          <ul>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/rhul-compsoc/passport"
              >
                Passport on GitHub
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/rhul-compsoc/passport-client"
              >
                Passport Frontend on GitHub
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright">
      <Container>
        © 2021 Computing Society at Royal Holloway, University of London
        <a
          className="grey-text text-lighten-4 right"
          href="https://computingsociety.co.uk/"
        >
          computingsociety.co.uk
        </a>
      </Container>
    </div>
  </footer>
)

export { Footer }
