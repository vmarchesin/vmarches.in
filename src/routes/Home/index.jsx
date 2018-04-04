import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "reactstrap"

import { RoundImage } from "components/Image"
import FontAwesome from "components/FontAwesome"

import Profile from "images/profile.jpeg"
import colors from "scss/colors"

const Container = styled.div`

`

const Route = () => (
  <Container className="container">
    <Row>
      <RoundImage src={Profile}/>
    </Row>
    <Row>
    <FontAwesome
      hoverColor={colors.facebook} 
      href="https://www.facebook.com/vini.marchesin" 
      icon={["fab", "facebook-f"]} 
    />
    <FontAwesome
      hoverColor={colors.github} 
      href="https://github.com/vmarchesin" 
      icon={["fab", "github"]} 
    />
    <FontAwesome
      hoverColor={colors.linkedin} 
      href="https://www.linkedin.com/in/vinicius-araujo-238a9b96/" 
      icon={["fab", "linkedin-in"]} 
    />
    <FontAwesome
      hoverColor={colors.github} 
      href="mailto:contact@vmarches.in" 
      icon={["fas", "at"]} 
    />
    </Row>
  </Container>
)

export default Route