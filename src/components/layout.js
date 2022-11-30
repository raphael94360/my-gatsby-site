import * as React from "react"
import { Link } from "gatsby"
import { container, navigation, navigationItem, link } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navigation}>
          <li className={navigationItem}>
            <Link to="/" className={link}>
              Home
            </Link>
          </li>
          <li className={navigationItem}>
            <Link to="/about" className={link}>
              About me
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
