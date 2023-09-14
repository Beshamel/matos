import * as Consts from '../../../Constants'

import('../../../styles/workspace/matos/ListElement.css')

function ListElement({ item, parity, setDetails }) {
    return (
        <div
            className="listElement interactable"
            available={item.available ? '1' : '0'}
            parity={parity}
            onClick={() => setDetails(item.id)}
        >
            <img
                src={Consts.categories[item.cat_id].img}
                alt={item.cat_name}
                className="detail"
                type="cat_icon"
            ></img>
            <div className="detail" type="name">
                <p>{item.name}</p>
            </div>
            <div
                className="detail"
                type="description"
                with_image={item.image_url ? '1' : '0'}
            >
                <p>{item.description}</p>
            </div>
            {item.image_url && (
                <figure className="detail" type="image" key={item.id}>
                    <img
                        src={item.image_url}
                        alt={item.name}
                        className="imgDisplay"
                    ></img>
                </figure>
            )}
        </div>
    )
}

export default ListElement
