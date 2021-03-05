import * as React from "react"
import styles from "./TeamSection.module.scss"

// Import Section definition

import Section from "../Section/Section"

const TeamSection = (props) => {
    return (
        <Section className="team" height="full" theme="dark">
            <h2>{props.name}</h2>
            <h3 class="section-tag">{props.tag}</h3>
        </Section>
    )
  }
  
  export default TeamSection
  