import React from "react"
import { FaDiscord } from "react-icons/fa"
import { Button, Col, Container, Row } from "react-materialize"
import styles from "./index.module.scss"

/**
 * A call to action to get users joining the Computing Society
 */
const JoinCompSoc = () => (
  <section className={styles.callToAction}>
    <Container>
      <Row>
        <Col s={12} className="center">
          <h2>Get Involved</h2>
          <a href="https://dc.cmpsc.uk/">
            <Button className="blurple">
              <FaDiscord /> Discord
            </Button>
          </a>{" "}
          <Button className="waves-effect waves-red red lighten-2">
            Get your membership
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
)

export { JoinCompSoc }
