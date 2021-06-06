import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const StudentTabs = {
    Scenarios: "/student",
    Counselling: "/student/counselling",
    Report: "/student/make-a-report",
  }

  const TeacherTabs = {
    Submissions: "/teacher",
    Sessions: "/teacher/sessions",
    Report: "/teacher/review-reports",
  }

  const handleLogoClick = () => {
    if (router.pathname.includes("/student")) return "/student"
    else if (router.pathname.includes("/teacher")) return "/teacher"
    else return "/"
  }

  return (
    <header className={`
          -mb-16 px-10 md:px-36
          w-full h-64 
          bg-gradient-to-r from-indigo-700 to-indigo-500
        `}
    >
      <div className="py-4 flex items-center justify-between text-white">
        <img
          className="h-6 w-auto cursor-pointer"
          src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
          alt="Workflow"
          onClick={() => router.push(handleLogoClick())}
        />
        <Link
          href="/"
        >
          <button
            className="text-white font-medium rounded-md bg-white p-1 md:px-3 md:py-2 bg-opacity-0 hover:bg-opacity-10 focus:outline-none"
          >
            Log Out
            </button>
        </Link>
      </div>
      <p className="w-full text-center md:text-left text-3xl font-extrabold text-white">
        {router.pathname.includes("student") ? "Student Dashboard" : "Educator Dashboard"}
      </p>
      <hr className="my-4 opacity-30" />
      <div className="flex gap-6 justify-center md:justify-start">
        {router.pathname.includes("student") ?
          <>
            <Link href="/student">
              <button
                className={`
                    text-white font-medium rounded-md bg-white bg-opacity-0 p-1 md:px-3 md:py-2 hover:bg-opacity-10 focus:outline-none
                    ${router.pathname.includes(StudentTabs.Scenarios) ? "" : "text-opacity-60"}  
                  `}
              >
                Scenarios
                </button>
            </Link>
            <Link href="/student/counselling">
              <button
                className={`
                    text-white font-medium rounded-md bg-white bg-opacity-0 p-1 md:px-3 md:py-2 hover:bg-opacity-10 focus:outline-none
                    ${router.pathname === StudentTabs.Counselling ? "" : "text-opacity-60"}  
                  `}
              >
                Counselling
                </button>
            </Link>
            <Link href="/student/make-a-report">
              <button
                className={`
                    text-white font-medium rounded-md bg-white bg-opacity-0 p-1 md:px-3 md:py-2 hover:bg-opacity-10 focus:outline-none
                    ${router.pathname === StudentTabs.Report ? "" : "text-opacity-60"}  
                  `}
              >
                Report
                </button>
            </Link>
          </>
          :
          <>
            <Link href="/teacher">
              <button
                className={`
                    text-white font-medium rounded-md bg-white bg-opacity-0 p-1 md:px-3 md:py-2 hover:bg-opacity-10 focus:outline-none
                    ${router.pathname === TeacherTabs.Submissions ? "" : "text-opacity-60"}  
                  `}
              >
                Submissions
                </button>
            </Link>
            <Link href="/teacher/sessions">
              <button
                className={`
                    text-white font-medium rounded-md bg-white bg-opacity-0 p-1 md:px-3 md:py-2 hover:bg-opacity-10 focus:outline-none
                    ${router.pathname === TeacherTabs.Sessions ? "" : "text-opacity-60"}  
                  `}
              >
                Sessions
                </button>
            </Link>
            <Link href="/teacher/review-reports">
              <button
                className={`
                    text-white font-medium rounded-md bg-white bg-opacity-0 p-1 md:px-3 md:py-2 hover:bg-opacity-10 focus:outline-none
                    ${router.pathname === TeacherTabs.Report ? "" : "text-opacity-60"}  
                  `}
              >
                Review Reports
                </button>
            </Link>
          </>
        }
      </div>
    </header>
  )
}

export default Nav;