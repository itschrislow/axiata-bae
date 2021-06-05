import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <header className={`
          -mb-20 px-36
          w-full h-64 
          bg-gradient-to-r from-indigo-700 to-indigo-500
        `}
      >
        <div className="py-6 flex items-center justify-between text-white">
          <img
            className="h-6 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
            alt="Workflow"
          />
          <Link
            href="/"
            className="text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
          >
            Log Out
          </Link>
        </div>
        <p className="text-3xl font-extrabold text-white">
          Hi, {router.pathname === "/student" ? "Student" : "Teacher"}!
        </p>
      </header>
      <div className="px-36 pb-20">
        {children}
      </div>
    </>
  )
}

export default Nav;