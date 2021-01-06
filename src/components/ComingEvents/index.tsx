import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Col, Container, Row } from "react-materialize"
import { GraphqlType } from "../../../types/graphql"
import { combineStyles } from "../../help/combineStyles"
import styles from "./index.module.scss"

const ComingEvents = () => (
  <section>
    <Container>
      <Row>
        <Col s={12} className="center">
          <h2>Whats coming up?</h2>
        </Col>
      </Row>
      <StaticQuery
        query={graphql`
          {
            allMarkdownRemark(
              filter: { frontmatter: { is_public: { eq: true } } }
            ) {
              edges {
                node {
                  frontmatter {
                    is_public
                    short_description
                    name
                    start
                    background {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={(data: GraphqlType) =>
          data.allMarkdownRemark.edges.map(edge => {
            const { frontmatter, fields } = edge.node

            const start = new Date(frontmatter.start)

            return (
              <div key={fields.slug} className={combineStyles(styles.event, "z-depth-2")}>
                <Img
                  fluid={frontmatter.background?.childImageSharp?.fluid}
                  className={styles.eventImage}
                />
                <div className={styles.facade} />
                <div
                  className={styles.eventContent}
                >
                  <h4>{frontmatter.name}</h4>
                  <p>{frontmatter.short_description}</p>
                  <p>
                    {start.toLocaleDateString(undefined, {
                      timeZoneName: "long",
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            )
          })
        }
      />
    </Container>
  </section>
)

export { ComingEvents }
