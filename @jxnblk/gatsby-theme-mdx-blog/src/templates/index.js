import React from 'react'
import { graphql } from 'gatsby'
import Index from '../layouts/index'
import Provider from '../provider'

export default props => {
  const posts = props.data.allMdx.edges.map(({ node }) => ({
    id: node.id,
    slug: node.fields.slug,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    excerpt: node.excerpt,
  }))

  return (
    <Provider>
      <Index
        {...props}
        posts={posts}
      />
    </Provider>
  )
}

export const pageQuery = graphql`
  query BlogIndex($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
