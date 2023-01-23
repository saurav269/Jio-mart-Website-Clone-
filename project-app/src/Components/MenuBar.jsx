import { Box } from '@chakra-ui/layout'
import React from 'react'
import Navigation from './megaMenubar/Navigation/Navigation'

const MenuBar = () => {
  return (
    <Box height={"30px"} w={"100%"} bg={"rgb(235, 233, 233)"} mb={"20px"} top={20} position={"fixed"}  zIndex={2}>

      <Navigation/>
    </Box>
  )
}

export default MenuBar