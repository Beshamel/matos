import { useState } from 'react'
import binIcon from '../../../assets/icons/bin.svg'
import editIcon from '../../../assets/icons/edit.svg'
import ModifItemForm from './ModifItemForm'

import('../../../styles/workspace/details/Details.css')

function Details({ item, deleteItem, isModifValid, refresh, setLoading }) {
    const [displayForm, setDisplayForm] = useState(false)
    function deleteSelf() {
        deleteItem(item.id)
    }

    return item.id === -1 ? (
        <h3>Sélectionnez du matos pour afficher quelque chose ici...</h3>
    ) : (
        <div>
            <img
                src={editIcon}
                alt=""
                className="iconButton interactable"
                action="edit"
                active={displayForm ? '1' : '0'}
                onClick={() => {
                    setDisplayForm(!displayForm)
                }}
            ></img>
            <img
                src={binIcon}
                alt=""
                className="iconButton interactable"
                action="delete"
                onClick={() => {
                    deleteSelf()
                }}
            ></img>
            {/*<ModifItemForm
                display={displayForm}
                isModifValid={isModifValid}
                item={item}
                refresh={refresh}
                setLoading={setLoading}
            />*/}
            <div className="infos">
                <h1 className="detailsTitle">
                    {item.name}
                    <span className="red">
                        {!item.available && ' (indisponible)'}
                    </span>
                </h1>
                {item.cat_id === 1 || (
                    <h2 className="detailsSubtitle">{item.cat_name}</h2>
                )}
                <div className="description">
                    <p></p>
                    {item.description.split('\n').map((line, k) => (
                        <p key={k}>{line}</p>
                    ))}
                </div>
            </div>
            {item.image_url && (
                <figure className="imageContainer">
                    <img src={item.image_url} alt={item.name}></img>
                </figure>
            )}
        </div>
    )
}
export default Details
