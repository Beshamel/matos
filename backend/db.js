const mysql = require('mysql')

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'matos',
})

connection.connect()

function addItemWithImage(name, desc, available, category, path, callback) {
    const query = `
    INSERT INTO materiel (name, description, available, category_id, image_url)
    VALUES (?, ?, ?, ?, ?);
    `
    const params = [name, desc, available, category, path]

    connection.query(query, params, function (error, results) {
        if (error) {
            callback(error)
            return
        }
        callback(null)
    })
}
exports.addItemWithImage = addItemWithImage

function addItem(name, desc, available, category, callback) {
    const query = `
    INSERT INTO materiel (name, description, available, category_id)
    VALUES (?, ?, ?, ?);
    `
    const params = [name, desc, available, category]

    connection.query(query, params, function (error, results) {
        if (error) {
            callback(error)
            return
        }
        callback(null)
    })
}
exports.addItem = addItem

function removeItem(id, callback) {
    const query = `
    DELETE FROM materiel
    WHERE id = ?;
    `
    const params = [id]

    connection.query(query, params, function (error, results) {
        if (error) {
            callback(error)
            return
        }
        callback(null)
    })
}
exports.removeItem = removeItem

function getInventory(callback) {
    const query = `
    SELECT * FROM materiel JOIN category ON category_id = cat_id
    `

    connection.query(query, function (error, results) {
        if (error) {
            callback(error)
            return
        }
        callback(null, results)
    })
}
exports.getInventory = getInventory

function getItem(id, callback) {
    const query = `
    SELECT * FROM materiel JOIN category ON category_id = cat_id WHERE id = ?
    `
    const params = [id]

    connection.query(query, params, function (error, results) {
        if (error) {
            callback(error)
            return
        }
        callback(null, results)
    })
}
exports.getItem = getItem

function getCategories(callback) {
    const query = `
    SELECT * FROM category
    `

    connection.query(query, function (error, results) {
        if (error) {
            callback(error)
            return
        }
        callback(null, results)
    })
}
exports.getCategories = getCategories
