import ListElement from './ListElement'

function InvList({ inventory, setLoading, refresh, setDetails }) {
    return (
        <div className="matos-list">
            {inventory.map((item, i) => (
                <ListElement
                    item={item}
                    parity={i % 2 === 0 ? '1' : '0'}
                    key={item.id}
                    setLoading={setLoading}
                    refresh={refresh}
                    setDetails={setDetails}
                />
            ))}
        </div>
    )
}

export default InvList
