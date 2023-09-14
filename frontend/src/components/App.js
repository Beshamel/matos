import { useState } from 'react'

import FrontPage from './frontpage/FrontPage'
import Workspace from './workspace/Workspace'
import '../styles/App.css'

function App() {
    var [entered, setEntered] = useState(false)
    var [hideFrontPage, setHideFrontPage] = useState(false)

    function enter() {
        setEntered(true)
        setTimeout(function () {
            setHideFrontPage(true)
        }, 500)
    }

    return (
        <div className="App">
            {hideFrontPage ? (
                <Workspace />
            ) : (
                <FrontPage entryHandler={enter} disabled={entered} />
            )}
        </div>
    )
}

export default App
