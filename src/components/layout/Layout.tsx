import React, { ReactElement } from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
    </>
  )
}

export default Layout