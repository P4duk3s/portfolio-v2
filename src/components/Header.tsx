import useScrollSpy from 'react-use-scrollspy';

type HeaderProps = {
    sectionRefs: React.MutableRefObject<null>[]
}

export const Header: React.FC<HeaderProps> = props => {
    const { sectionRefs } = props

    const activeSection = useScrollSpy({
        sectionElementRefs: sectionRefs,
        offsetPx: -240
    });

    return <header className="flex flex-col flex-1 justify-between h-screen pt-6 lg:py-24 lg:sticky top-0 px-6">
        <div>
            <h1 className="text-slate-200 font-bold text-4xl" >
                Zygimantas Balcius
            </h1>
            <h3 className="text-slate-200 font-medium text-lg mt-3">
                Web developer
            </h3>
            <p className="mt-3">
                On a never ending journey from No-Stack to Full-Stack
            </p>

            <nav className="mt-16 hidden lg:block">
                <ul>
                    <li>
                        <button className={`hover:text-slate-200 py-3 font-bold ${activeSection === 0 && "text-slate-200"}`}
                            onClick={() => document.getElementById("about")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })}>
                            ABOUT
                        </button>
                    </li>
                    <li>
                        <button className={`hover:text-slate-200 py-3 font-bold ${activeSection === 1 && "text-slate-200"}`}
                            onClick={() => document.getElementById("experience")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })}>
                            EXPERIENCE
                        </button>
                    </li>
                    <li>
                        <button className={`hover:text-slate-200 py-3 font-bold ${activeSection === 2 && "text-slate-200"}`}
                            onClick={() => document.getElementById("projects")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })}>
                            PROJECTS
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="mt-8 lg:m-0">
            <ul className="flex items-center">
                <li className="mr-5 hover:scale-120 duration-200 group">
                    <span className="hover-tooltip group-hover:scale-100">
                        Github
                    </span>
                    <a href="https://github.com/P4duk3s" target="_blank">
                        <img
                            src="icons/github.png"
                            className="w-10"
                        />
                    </a>
                </li>
                <li className="mr-5 hover:scale-120 duration-200 group">
                    <span className="hover-tooltip group-hover:scale-100 group-hover:-left-5">
                        LinkedIn
                    </span>
                    <a href="https://www.linkedin.com/in/zygimantas-balcius-b6b0a3138/" target="_blank">
                        <img
                            src="icons/linkedin.png"
                            className="w-10"
                        />
                    </a>
                </li>
                <li className="mr-5 hover:scale-120 duration-200 group">
                    <span className="hover-tooltip group-hover:scale-100 group-hover:-left-3">
                        Email
                    </span>
                    <a href="mailto:zygisbalcius@gmail.com">
                        <img
                            src="icons/email.png"
                            className="w-10"
                        />
                    </a>
                </li>
            </ul>
        </div>
    </header>
}