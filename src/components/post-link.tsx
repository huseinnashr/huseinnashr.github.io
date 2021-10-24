import React from "react"
import { Link } from "gatsby"

type DataProps = {
  post: {
    frontmatter: {
      slug: string
      title: string
      date: string
    }
  }
}

const PostLink: React.FC<DataProps> = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
