import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  markdownRemark: {
    frontmatter: {
      date: string
      slug: string
      title: string
    }
    html: string
  } 
}

const Template: React.FC<PageProps<DataProps>>  = ({ data: { markdownRemark: { frontmatter, html } } }) => {
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`