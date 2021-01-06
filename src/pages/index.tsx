import React from "react"
import { ComingEvents } from "../components/ComingEvents"
import { HomepageJumbotron } from "../components/HomepageJumbotron"
import { JoinCompSoc } from "../components/JoinCompSoc"
import { Layout } from "../components/Layout"
import { WhatDoWeDo } from "../components/WhatDoWeDo"

const HomePage = () => (
  <Layout>
    <HomepageJumbotron />
    <ComingEvents />
    <WhatDoWeDo />
    <JoinCompSoc />
  </Layout>
)

export default HomePage
