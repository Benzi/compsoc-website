import React, { ReactNode } from "react"

import "material-icons/iconfont/material-icons.scss"
import "materialize-css"
import "materialize-css/sass/materialize.scss"
import "../../scss/index.scss"
import styles from "./index.module.scss"
import { Header } from "../Header"
import { Footer } from "../Footer"

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
)

export { Layout }
