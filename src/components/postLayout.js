import React from 'react'
import {graphql} from 'gatsby'
import Layout from './layout'
// import {query} from '../queries/markDownRemark'

const postLayout = (props) => {
    const {html} = props.data.markdownRemark
    const {title} = props.data.markdownRemark.frontmatter
    const {location} = props;

    return(
    <Layout location={location}>
        <h1> {title}</h1> 
         <div dangerouslySetInnerHTML={{
            __html: html
        }} /> 
    </Layout>
    )
}

export default postLayout;

export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }){
      html
      frontmatter{
        title
        date
        slug
      }
    }
    }     
`
