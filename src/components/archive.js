import React from "react";
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby";

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive  {
    allMarkdownRemark(limit:5, sort: {
      order: DESC,
      fields:[frontmatter___date]
    }){
      edges{
        node{
          frontmatter {
            title
            slug
					}
        }
      }
    }
  }`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none; 
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763
  }
`

const Archive = ({ children }) => {

const data = useStaticQuery(POST_ARCHIVE_QUERY)
const {allMarkdownRemark} = data

  return (
    <>
    <aside>
        <h3>Ar-chive!</h3>
        <ArchiveList>    
            {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
            </li>
        ))}
        </ArchiveList>
    </aside>
    </>
  )
}

export default Archive
