import { useRef } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
    ]

    return <div className="bg-slate-900 text-slate-400 ">
        <div className="mx-auto min-h-screen max-w-screen-xl">
            <div className="flex flex-col lg:flex-row">
                <Header sectionRefs={sectionRefs} />
                <Main sectionRefs={sectionRefs} />
            </div>
        </div>
    </div>
}

export default App
