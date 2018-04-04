import React from 'react'
import styled from 'styled-components'

import FontAwesome from "components/FontAwesome"

import colors from "scss/colors"

const Route = () => (
  <React.Fragment>
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
      hoverColor={colors.telegram} 
      href="@vmarchesin" 
      icon={["fab", "telegram-plane"]} 
    />
  </React.Fragment>
)

export default Route