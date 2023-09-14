import { React, useState, useEffect } from 'react'
import axios from 'axios'

import * as Consts from '../../../Constants'

import('../../../styles/workspace/details/ModifItemForm.css')

/*class ModifmodifItemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: -1,
            itemName: '',
            description: '',
            available: false,
            category: 1,
            image: null,
            valid: false,
        }
        this.setItem = this.setItem.bind(this)
    }

    setItem(item) {
        this.state.id = item.id
        this.state.itemName = item.name
        this.state.description = item.description
        this.state.available = item.available
        this.state.category = item.category_id
        this.state.image = item.image
    }

    render() {
        const item = this.props.item
        const display = this.props.display
        const setLoading = this.props.setLoading

        function checkValidity() {
            this.state.valid = this.props.isModifValid(
                item,
                this.state.itemName
            )
        }

        const handleSubmit = async (event) => {
            event.preventDefault()
            if (this.state.valid) {
                const data = new FormData()
                data.append('name', this.state.itemName)
                data.append('desc', this.state.description)
                data.append('available', this.state.available)
                data.append('category', this.state.category)
                this.state.image && data.append('image', this.state.image)
                this.state.lo
                ;(async () => {
                    await axios.post(
                        this.state.image
                            ? '/modifEntryWithImage/' + this.state.id
                            : '/modifEntryNoImage/' + this.state.id,
                        data
                    )
                    refresh()
                })()
            }
        }

        useEffect(checkValidity)

        return (
            <div
                className="modifItemFormWrapper"
                display={display ? 'on' : 'off'}
                available={this.state.available ? '1' : '0'}
            >
                <h2>Modifier</h2>
                <form
                    className="modifItemForm"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div className="formElement">
                        <input
                            className="formNameInput"
                            type="text"
                            name="name"
                            value={this.state.itemName}
                            placeholder="Hélicoptère Hyris"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="formElement">
                        <textarea
                            className="formDescInput"
                            name="description"
                            value={this.state.description}
                            placeholder="..."
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="formElement">
                        <label
                            className="formAvailableInput interactable"
                            available={this.state.available ? '1' : '0'}
                            onClick={() =>
                                setAvailable(this.state.available ? 0 : 1)
                            }
                        >
                            {this.state.available
                                ? 'Disponible'
                                : 'Indisponible'}
                        </label>
                    </div>
                    <div className="formElement">
                        <select
                            className="formCategoryInput interactable"
                            name="category"
                            value={this.state.category}
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
                            className="formSubmit interactable"
                            type="submit"
                            value="Modifier"
                            valid={this.state.valid ? '1' : '0'}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default ModifmodifItemForm
*/
