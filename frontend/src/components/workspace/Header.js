import '../../styles/workspace/Header.css'
import Nav from './Nav'

function Header({ tab, setTab, displayDetails, detailsLoading }) {
    return (
        <header className="workheader">
            <h1 className="header">matos.hyris.tv</h1>
            <Nav
                tab={tab}
                setTab={setTab}
                displayDetails={displayDetails}
                detailsLoading={detailsLoading}
            />
        </header>
    )
}

export default Header
