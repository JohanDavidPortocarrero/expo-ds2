const {
    Router
} = require('express');
const router = Router();

const {
    postUser,
    getUsers,
    getUser,
    putUser,
    deleteUser
} = require('./controller/UserController')

router.get('/', (req, res) => {
    res.send("Ruta no definida")
})

router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', postUser)
router.put('/user/:id', putUser)
router.delete('/user/:id', deleteUser)

router.get('/*', (req, res) => {
    res.send("Ruta no definida")
})

module.exports = router;