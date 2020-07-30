import React from 'react'
import { StyledLayout } from './Layout.styled'
import { Header } from '../Header'
import { Footer } from '../Footer'

interface LayoutProps {
  children: Element[]
}

const Layout = (props) => {
  return (
    <>
      <Header />
      <StyledLayout>{props.children}</StyledLayout>
      <Footer />
    </>
  )
}

export default Layout
