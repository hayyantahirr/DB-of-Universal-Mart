import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('get request successful')
})
router.post('/addProduct', (req, res) => {
    res.send('post request successful')
})

export default router   