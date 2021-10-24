import { graphql, PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Seo from "../components/seo"

type DataProps = {
  allMarkdownRemark: { 
    edges: {
      node: {
        id: number
        excerpt: string
        frontmatter: {
          date: string
          slug: string
          title: string
        }
      }
    }[]
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data: { allMarkdownRemark: { edges } } }) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Blog</h1>
      <div>{posts}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`