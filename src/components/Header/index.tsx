import { Link } from "gatsby"
import React from "react"
import { Icon, Navbar } from "react-materialize"
import compsoc from "./compsoc.svg"
import styles from "./index.module.scss"

const Header = () => {
  return (
    <Navbar
      alignLinks="right"
      centerChildren
      brand={
        <Link className="brand-logo" to="/">
          <img src={compsoc} className={styles.logo} />
        </Link>
      }
      menuIcon={<Icon>menu</Icon>}
    >
      <Link to="/">Home</Link>
    </Navbar>
  )
}

export { Header }
