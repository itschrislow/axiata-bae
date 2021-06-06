import { useRouter } from "next/router";

import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/" ?
        <div>
          {children}
        </div>
        :
        <div className="min-h-screen">
          <Nav />
          <div className="px-36 pb-20">
            {children}
          </div>
          <Footer />
        </div>
      }
    </>
  )
}

export default Layout;