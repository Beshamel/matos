import logo from '../../assets/hyris_hy.png'
import '../../styles/frontpage/FrontPage.css'

function FrontPage({ entryHandler, disabled }) {
    return (
        <div className="FrontPage" hide={disabled.toString()}>
            <img src={logo} className="Front-logo" alt="logo" />
            <p>Bienvenue sur matos.hyris.tv !</p>
            <FrontButton handler={entryHandler} />
        </div>
    )
}

function FrontButton({ handler }) {
    return (
        <button className="frontbutton" onClick={handler}>
            Entrer
        </button>
    )
}

export default FrontPage
