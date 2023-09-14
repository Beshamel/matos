import { useState, useEffect } from 'react'

import Header from './Header'
import Planning from './planning/Planning'
import Inventory from './inventory/Inventory'
import Details from './details/Details'

import '../../styles/workspace/Workspace.css'
import axios from 'axios'

const emptyItem = { id: -1 }

function WorkSpace() {
    var [tab, setTab] = useState(1)
    var [selectedItem, setSelectedItem] = useState(emptyItem)
    var [displayDetails, setDisplayDetails] = useState(false)
    var [invLoading, setInvLoading] = useState(false)
    var [detailsLoading, setDetailsLoading] = useState(false)
    var [inventory, setInventory] = useState([])

    function isValid(name) {
        return (
            name && name !== '' && !inventory.some((item) => item.name === name)
        )
    }

    function isModifValid(item, name) {
        return (
            name && name !== '' && !inventory.some((item) => item.name === name)
        )
    }

    async function refreshInventory() {
        setInvLoading(true)
        const result = await axios.get('/inventory')
        setInventory(result.data.inventory)
        setInvLoading(false)
    }

    async function setDetailsTab(id) {
        if (detailsLoading || id === selectedItem.id) {
            return
        }
        setDetailsLoading(true)
        const result = await axios.get('/item/' + id)
        if (result.data) {
            const item = result.data
            if (item && item.id && item.id === id) {
                setDisplayDetails(true)
                setSelectedItem(item)
                setTab(2)
            }
        } else {
            console.error('Could not retrieve data')
        }
        setDetailsLoading(false)
    }

    async function closeDetailsTab() {
        setDisplayDetails(false)
        setSelectedItem(emptyItem)
        setTab(1)
    }

    async function deleteItem(id) {
        const data = new FormData()
        data.append('id', id)
        setInvLoading(true)
        ;(async () => {
            await axios.post('/removeEntry', data)
            if (id === selectedItem.id) {
                closeDetailsTab()
            }
            refreshInventory()
        })()
    }

    useEffect(() => {
        refreshInventory()
    }, [])

    return (
        <div className="workspace">
            <Header
                tab={tab}
                setTab={setTab}
                displayDetails={displayDetails}
                detailsLoading={detailsLoading}
            />
            <div className="board">
                <div className="tab" display={tab === 0 ? '1' : '0'}>
                    <Planning />
                </div>
                <div className="tab" display={tab === 1 ? '1' : '0'}>
                    <Inventory
                        setDetails={setDetailsTab}
                        refresh={refreshInventory}
                        loading={invLoading}
                        setLoading={setInvLoading}
                        inventory={inventory}
                        isValid={isValid}
                    />
                </div>
                <div className="tab" display={tab === 2 ? '1' : '0'}>
                    <Details
                        item={selectedItem}
                        refresh={refreshInventory}
                        deleteItem={deleteItem}
                        isModifValid={isModifValid}
                        setLoading={setInvLoading}
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkSpace
