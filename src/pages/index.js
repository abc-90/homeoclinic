import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Safe and Effective Treatment",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Homeopathic treatment is completely safe and has no side effects. It is proven to be very effective in acute as well as chronic cases.",
  },
  {
    text: "Vast Experience of Specialist Doctor",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "Dr. Vikram Singh has over 40 years of experience in homeopathy and has thousands of successful stories with variety of medical situations.",
  },
  {
    text: "Best Homeopathic Doctor in Siddharth Vihar, Ghaziabad",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Get the best for your health from the best doctor in your area.",
  }
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/best-homeopathic-doctor-in-ghaziabad.jpg"
        loading="eager"
        width={124}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        <b>Homeopathic Health Center</b>
      </h1>
      <p className={styles.intro}>
        <b>Siddharth Vihar, Ghaziabad</b>
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li className={styles.listItem}>
          
            {link.text} ↗
          
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
