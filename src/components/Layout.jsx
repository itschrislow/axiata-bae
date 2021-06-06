import { useRouter } from "next/router";

import Nav from "./Nav"

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
          <div className="px-10 md:px-36 pb-20">
            {children}
          </div>
        </div>
      }
    </>
  )
}

export default Layout;