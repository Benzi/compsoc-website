import React from "react"
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPassport,
  FaTwitter,
} from "react-icons/fa"
import { Col, Container, Row } from "react-materialize"

const Footer = () => (
  <footer className="page-footer">
    <Container>
      <Row>
        <Col className="l3 s12">
          <h5>Links</h5>
          <ul>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://passport.cmpsc.uk/"
              >
                <FaPassport /> CompSoc Passport
              </a>
            </li>
          </ul>
        </Col>
        <Col className="l3 s12">
          <h5>Socials</h5>
          <ul>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://twitter.com/RHULCompSoc"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://www.linkedin.com/company/rhulcompsoc/about/"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://dc.cmpsc.uk/"
              >
                <FaDiscord /> Discord
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://github.com/rhul-compsoc/"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                className="grey-text text-lighten-3"
                href="https://www.facebook.com/rhulcompsoc/"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
          </ul>
        </Col>
        <Col className="l6 s12">
          <h5>Computing Society</h5>
          <p>
            Compsoc exists to create a setting where like-minded computing
            enthusiasts can interact and socialise. Our core aim is to make the
            student experience more enjoyable for those with even the slightest
            interest.
          </p>
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
