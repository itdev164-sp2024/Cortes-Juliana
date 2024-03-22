
import * as React from "react"
import  propTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
    margin: 0 auto;
    padding: var(--space-4) var(--size-gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background: ${props => props.theme.header.backgroundColor};
`

const StyledLink = styled(Link)`
    font-size:var(--font-sm);
    text-decoration: none;
    color: ${props.theme.header.color};
`

const Header = ({siteTitle}) => (
  <Outer>
    <h1>
      <StyledLink to="/">
      {siteTitle}      
      </StyledLink>
    </h1>
  </Outer>
)
    
Header.propTypes = {
  siteTitle: propTypes.string
}

Header.defaultProps = {
  siteTitle:""
}

export {Header} 