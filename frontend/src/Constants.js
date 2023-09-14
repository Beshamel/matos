import axios from 'axios'

export const catAutre = require('./assets/categories/autre.svg')
export const catCamera = require('./assets/categories/camera.svg')
export const catObjo = require('./assets/categories/objo.svg')
export const catRej = require('./assets/categories/rej.svg')

const categories = {}

const query = await axios.get('/categories')
query.data.categories.forEach((cat) => {
    categories[cat.cat_id] = {
        id: cat.cat_id,
        name: cat.cat_name,
        img: require('./assets/categories/' + cat.cat_file + '.svg'),
    }
})

export { categories }
