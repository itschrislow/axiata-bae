import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <footer className={`
        ${router.pathname === "/student/make-a-report" ? "" : "absolute"}
        bottom-0 flex w-full py-2 justify-center items-center text-sm
      `}
    >
      <p className="text-gray-300">
        Prototype by{" "}
        <a href="https://itschrislow.com">
          <span className="underline">
            Chris Low
        </span>
        </a>
        {" "}© 2021
    </p>
    </footer>
  )
}

export default Footer;