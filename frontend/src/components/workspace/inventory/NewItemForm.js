import { useEffect, useState } from 'react'
import axios from 'axios'

import * as Consts from '../../../Constants'
import '../../../styles/workspace/matos/NewItemForm.css'

function NewItemForm({ display, refresh, setLoading, isValid }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [available, setAvailable] = useState(1)
    const [category, setCategory] = useState(1)
    const [image, setImage] = useState()
    const [valid, setValid] = useState(false)

    function checkValidity() {
        setValid(isValid(name))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (valid) {
            const data = new FormData()
            data.append('name', name)
            data.append('desc', description)
            data.append('available', available)
            data.append('category', category)
            image && data.append('image', image)
            setLoading(true)
            ;(async () => {
                await axios.post(
                    image ? '/addEntryWithImage' : '/addEntry',
                    data
                )
                refresh()
            })()
            setName('')
            setDescription('')
            setAvailable(1)
            setCategory(1)
            setImage()
            setValid(false)
        }
    }

    useEffect(checkValidity)

    return (
        <div>
            <div
                className="itemFormWrapper"
                display={display ? 'on' : 'off'}
                available={available ? '1' : '0'}
            >
                <h2>Ajouter du matos...</h2>
                <form
                    className="itemForm"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div className="formElement">
                        <input
                            className="formNameInput"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Hélicoptère Hyris"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="formElement">
                        <textarea
                            className="formDescInput"
                            name="description"
                            value={description}
                            placeholder="..."
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="formElement">
                        <label
                            className="formAvailableInput interactable"
                            available={available ? '1' : '0'}
                            onClick={() => setAvailable(available ? 0 : 1)}
                        >
                            {available ? 'Disponible' : 'Indisponible'}
                        </label>
                    </div>
                    <div className="formElement">
                        <select
                            className="formCategoryInput interactable"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {Object.keys(Consts.categories).map((k, i) => (
                                <option value={Consts.categories[k].id} key={i}>
                                    {Consts.categories[k].name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formElement">
                        <input
                            className="formImageInput"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="formElement">
                        <input
                            className="formSubmit interactable"
                            type="submit"
                            value="Ajouter"
                            valid={valid ? '1' : '0'}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewItemForm
