import { useState } from 'react'

import MatosList from './MatosList'
import NewItemForm from './NewItemForm'

import addIcon from '../../../assets/icons/add.svg'
import refreshIcon from '../../../assets/icons/refresh.svg'

import('../../../styles/workspace/matos/Inventory.css')

function Inventory({
    setDetails,
    refresh,
    loading,
    setLoading,
    inventory,
    isValid,
}) {
    var [displayForm, setDisplayForm] = useState(false)

    return (
        <div className="matos">
            <img
                className="iconButton interactable"
                src={addIcon}
                onClick={() => setDisplayForm(!displayForm)}
                display={displayForm ? 'on' : 'off'}
                action="displayForm"
                alt=""
            ></img>
            <img
                className="iconButton interactable"
                src={refreshIcon}
                onClick={() => loading || refresh()}
                action="refresh"
                loading={loading ? '1' : '0'}
                alt=""
            ></img>
            <NewItemForm
                display={displayForm}
                setDisplay={setDisplayForm}
                refresh={refresh}
                loading={loading}
                setLoading={setLoading}
                isValid={isValid}
            />
            <MatosList
                inventory={inventory}
                setLoading={setLoading}
                refresh={refresh}
                setDetails={setDetails}
            />
        </div>
    )
}

export default Inventory
