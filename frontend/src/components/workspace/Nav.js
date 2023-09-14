import NavButton from './NavButton'

import '../../styles/workspace/Nav.css'

function Nav({ tab, setTab, displayDetails, detailsLoading }) {
    function DynamicButton(i, text, loading) {
        return (
            <NavButton
                tab={tab}
                setTab={setTab}
                i={i}
                text={text}
                loading={loading}
            />
        )
    }

    return (
        <nav className="worknav">
            {DynamicButton(0, 'Planning', false)}
            {DynamicButton(1, 'Inventaire', false)}
            {displayDetails && DynamicButton(2, 'Détails', detailsLoading)}
        </nav>
    )
}

export default Nav
