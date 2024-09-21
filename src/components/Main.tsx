type MainProps = {
    sectionRefs: React.MutableRefObject<null>[]
}

export const Main: React.FC<MainProps> = props => {

    const { sectionRefs } = props

    return <main className="flex-1 pt-8 lg:pt-24 overflow-x-hidden ">
        <section id="about" className="scroll-m-24 lg:pr-2" ref={sectionRefs[0]}>
            <div className="lg:hidden bg-slate-950/15 p-4 w-screen">
                <h2 className="text-slate-200 font-bold px-2">
                    ABOUT
                </h2>
            </div>
            <div id="about" className="mb-8 lg:mb-28 p-3 lg:p-0">
                <p className="mb-4">
                    I am a passionate and motivated Junior Web Developer with 2 years of experience in building responsive and dynamic web applications. My expertise lies in working with modern front-end and back-end technologies such as React, TypeScript, Styled-Components, and Node.js. I have a strong foundation in developing scalable and user-friendly web solutions, with a focus on clean code and best practices.
                </p>
                <p className="mb-4">
                    Throughout my experience, I have contributed to the full software development lifecycle, and constantly sought to improve my skills by learning new tools and techniques. I am eager to bring my technical knowledge and problem-solving abilities to new challenges and continue growing in the field of web development.
                </p>
                <p>
                    Big car enthusiast with a deep appreciation for car design and engineering. I have a strong love for travel and exploring new destinations. As a dedicated basketball fan, I regularly watch and support my home town team "Zalgiris". In my downtime, I am an avid gamer, enjoying both immersive single-player adventures and the competitive thrill of battle royale games.
                </p>
            </div>
        </section>
        <section id="experience" className="scroll-m-24 lg:pr-2" ref={sectionRefs[1]}>
            <div className="lg:hidden bg-slate-950/15 p-4 w-screen">
                <h2 className="text-slate-200 font-bold px-2">
                    EXPERIENCE
                </h2>
            </div>
            <div className="mb-8 lg:mb-28 p-3 lg:p-0" >
                <div className="flex gap-2 flex-col lg:flex-row">
                    <div className="basis-[30%] text-slate-300 mb-2">
                        Oct 2022 - March 2024
                    </div>
                    <div className="flex-1">
                        <h3 className="text-slate-200">
                            Junior Web Developer - Pebbletree Ltd
                        </h3>
                        <p className="mt-2">
                            Had an opportunity to contribute in creation of a business communication tool - Floji.
                        </p>
                        <p>
                            Completed issued tasks, developed new functionalities that were previously talked about with the development team.
                        </p>
                        Tested, reported and fixed bugs through the application.
                        <p>
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    React
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    TypeScript
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    Styled-Components
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    Node.js
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="scroll-m-24 lg:pr-2" ref={sectionRefs[2]}>
            <div className="lg:hidden bg-slate-950/15 p-4 w-screen">
                <h2 className="text-slate-200 font-bold px-2">
                    PROJECTS
                </h2>
            </div>
            <div className="select-none" >
                {/* carzone */}
                <div className="mb-8 lg:mb-16 flex gap-3 relative p-3 flex-col lg:flex-row">
                    <a href="https://car-zone-frontend.onrender.com/"
                        target="_blank"
                        className="absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 
                transition-opacity duration-300 lg:hover:opacity-10 rounded-md">
                    </a>
                    <div className="basis-[30%] order-last lg:order-none max-w-screen-sm">
                        <img src="src/assets/carzone.png"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-slate-200">
                            2024 - Carzone
                        </h3>
                        <p className="mt-2">
                            Being a car enthusiast I wanted to create something with vehicles in mind. Inspired by autotrader I made full stack MERN application for users to showcase their cars.
                        </p>
                        <p>
                            Images were scraped, data was randomly generated and yes, it is not perfect, but for this type of project I think it is sufficient.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    React
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    TypeScript
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    Styled-Components
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    Node.js
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    Express
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    MongoDB
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* tier list maker */}
                <div className="mb-8 lg:mb-16 flex gap-3 relative p-3 flex-col lg:flex-row">
                    <a href="https://tierlist-maker-gevf.onrender.com/"
                        target="_blank"
                        className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 
                transition-opacity duration-300 lg:hover:opacity-10 rounded-md">
                    </a>
                    <div className="basis-[30%] order-last lg:order-none max-w-screen-sm">
                        <img src="src/assets/tierlist.png"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-slate-200">
                            2024 - Tier List Maker
                        </h3>
                        <p className="mt-2">
                            I never had an opportunity to develop anything drag and drop related during my work. Inspired by tiermaker.com I wanted to explore, practise and learn how drag and drop functionality works and decided to replicate tier list maker application, also practise and get more comfortable using Sass.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    React
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    TypeScript
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    Sass
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className="text-slate-200 text-xl mb-2 lg:mb-5 text-center lg:text-left">
                    A few projects from the beginning of my career
                </h1>
                {/* memory training game */}
                <div className="mb-8 lg:mb-16 flex gap-3 relative p-3 flex-col lg:flex-row">
                    <a href="https://p4duk3s.github.io/memory-game/"
                        target="_blank"
                        className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 
                transition-opacity duration-300 lg:hover:opacity-10 rounded-md">
                    </a>
                    <div className="basis-[30%] order-last lg:order-none max-w-screen-sm">
                        <img src="src/assets/cardGame.png"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-slate-200">
                            2021 - Memory training game
                        </h3>
                        <p className="mt-2">
                            As I do like games, I decided to make one that might be useful to train memory by guessing and remember pictures of the cards. The goal is to open all the cards in the least amount of moves as quickly as possible.
                        </p>
                        <p>
                            Making this project I learned about using HTML, CSS and manipulating the DOM using Javascript.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    HTML
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    CSS
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    JavaScript
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* calculator */}
                <div className="mb-8 lg:mb-16 flex gap-3 relative p-3 flex-col lg:flex-row">
                    <a href="https://p4duk3s.github.io/calculator/"
                        target="_blank"
                        className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 
                transition-opacity duration-300 lg:hover:opacity-10 rounded-md">
                    </a>
                    <div className="basis-[30%] order-last lg:order-none max-w-screen-sm">
                        <img src="src/assets/calculator.png"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-slate-200">
                            2021 - Calculator
                        </h3>
                        <p className="mt-2">
                            Simple calculator project almost became "Hello World! for every programmer that is learning Javascript." To make it a little bit more interesting and useful I went and added some extra functionality.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    HTML
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    CSS
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    JavaScript
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* to do list */}
                <div className="mb-4 flex gap-3 relative p-3 flex-col lg:flex-row">
                    <a href="https://p4duk3s.github.io/to-do-list/"
                        target="_blank"
                        className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 
                transition-opacity duration-300 lg:hover:opacity-10 rounded-md">
                    </a>
                    <div className="basis-[30%] order-last lg:order-none max-w-screen-sm">
                        <img src="src/assets/todolist.png"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-slate-200">
                            2021 - To do list
                        </h3>
                        <p className="mt-2">
                            I was very interested in learning a front-end framework. I chose React because it's probably the most popular, has strong community support, is trusted by great companies, fairly easy to learn and is in demand.
                        </p>
                        <p>
                            By doing this project I got acquainted with React basics. How website elements are split into components which have their own environtments and can be created as functional or class components. I also learned about manipulating the state and working with arrays.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                                <div className="technology-style">
                                    React
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
}