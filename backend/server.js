const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

const fs = require('fs')
const path = require('path')
const db = require('./db.js')

const genericError = 'Something broke :/'
const missingData = 'Data not found'

app.get('/image/:filename', (req, res) => {
    const filename = req.params.filename
    const readStream = fs.createReadStream(
        path.join(__dirname, 'uploads', filename)
    )
    readStream.pipe(res)
})

app.get('/item/:id', (req, res) => {
    const id = req.params.id
    db.getItem(id, (error, item) => {
        if (error) {
            res.status(501).send({ message: genericError })
            console.log(error)
            return
        }
        if (!item[0]) {
            res.status(404).send({ message: missingData })
            return
        }
        res.send(item[0])
    })
})

app.get('/inventory', (req, res) => {
    db.getInventory((error, inventory) => {
        if (error) {
            res.status(501).send({ message: genericError })
            console.log(error)
            return
        }
        res.send({ inventory })
    })
})

app.get('/categories', (req, res) => {
    db.getCategories((error, categories) => {
        if (error) {
            res.status(501).send({ message: genericError })
            console.log(error)
            return
        }
        res.send({ categories })
    })
})

app.post('/addEntryWithImage', upload.single('image'), (req, res) => {
    const { filename, path } = req.file
    const name = req.body.name
    const desc = req.body.desc
    const available = req.body.available
    const category = req.body.category
    const image_url = `/image/${filename}`

    db.addItemWithImage(name, desc, available, category, image_url, (error) => {
        if (error) {
            res.status(501).send({ message: genericError })
            console.log(error)
            return
        }
    })
    res.send('Successfully recieved with image')
})

app.post('/addEntry', upload.none(), (req, res) => {
    const name = req.body.name
    const desc = req.body.desc
    const available = req.body.available
    const category = req.body.category

    db.addItem(name, desc, available, category, (error) => {
        if (error) {
            res.status(501).send({ message: genericError })
            console.log(error)
            return
        }
    })
    res.send('Successfully recieved without image')
})

app.post('/removeEntry', upload.none(), (req, res) => {
    const id = req.body.id

    db.removeItem(id, (error) => {
        if (error) {
            res.status(501).send({ message: genericError })
            console.log(error)
            return
        }
    })
    res.send('Successfully removed entry')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
