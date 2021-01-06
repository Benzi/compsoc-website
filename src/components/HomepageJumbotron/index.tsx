import React from "react"
import { FaDiscord } from "react-icons/fa"
import { Button, Col, Container, Row } from "react-materialize"
import styles from "./index.module.scss"

const HomepageJumbotron = () => (
  <section className={styles.homepageJumbotron}>
    <Container>
      <Row>
        <Col s={12} className="center">
          <h1>
            <small>Royal Holloway</small>
            <br />
            Computing Society
          </h1>
          <a href="https://dc.cmpsc.uk/">
            <Button className="blurple">
              <FaDiscord /> Discord
            </Button>
          </a>{" "}
          <a href="https://www.su.rhul.ac.uk/societies/a-z/computing/">
            <Button className="waves-effect waves-red red lighten-2">
              CompSoc @ Student Union
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  </section>
)

export { HomepageJumbotron }
