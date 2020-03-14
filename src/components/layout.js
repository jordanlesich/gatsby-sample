import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from './archive'
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location}) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: {
        regex: "/bg/"
      }) {
        childImageSharp{
          fluid(maxWidth: 1000){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

// console.log(location.pathname)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
       from ={{height: location.pathname === '/' ? 0 : 400 }}
       to={{height: location.pathname === '/' ? 400 : 0}}>
         {styles => (
           <div style ={{overflow:'hidden', ...styles}}>
             <Img fluid={data.file.childImageSharp.fluid} alt='typing on laptop'/>
           </div>
         )}
      </Spring>
      {/* {location.pathname === '/' && } */}
      <MainLayout>
          <main>
            {children}
          </main>
        <Archive />
      </MainLayout>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
