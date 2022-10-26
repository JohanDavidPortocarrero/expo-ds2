const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getUsers = async (req, res) => {
    try {
        const user = await prisma.User.findMany()
        res.json(user)
    } catch (error) {
        console.log(error)
        res.json({
            errro: "Ha ocurrido un error obteniedo los usuarios"
        })
    }
}

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await prisma.User.findUnique({
            where: {
                id: parseInt(id, 10)
            },
        })
        res.json(user);
    } catch (error) {
        console.log(error)
        res.json({
            error: "Error obteniendo al usuario"
        })
    }
}

const postUser = async (req, res) => {
    try {
        const {
            nombre, 
            apellido,
            fecha_nacimiento,
            correo,
            telefono,
        } = req.body;

        const avatar = "https://i.postimg.cc/76SBfGZB/account.png";
        const fecha = new Date(fecha_nacimiento);

        const result = await prisma.User.create({
            data: {
                avatar,
                nombre, 
                apellido,
                fecha_nacimiento: fecha,
                correo,
                telefono,
            }
        })

        res.json(result)

    } catch (error) {
        console.log(error)
        res.json({
            error: "Error al agregar los datos"
        })
    }
}

const putUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {
            avatar,
            nombre,
            apellido,
            fecha_nacimiento,
            telefono
        } = req.body;
        const updateUser = await prisma.User.update({
            where: {
                id: parseInt(id, 10),
            },
            data: {
                avatar,
                nombre,
                apellido,
                fecha_nacimiento,
                telefono
            },
        })       
        res.json({
            msg: "Usuario actualizado",
            userData: updateUser
        })
    } catch (error) {
        console.log(error)
        res.json({
            error: "Error al actualizar al usuario"
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await prisma.User.delete({
            where: {
                id: parseInt(id),
            },
        })
        res.json({
            msg: "El usuario fue eliminado con exito"
        })
    } catch (error) {
        console.log(error)
        res.json({
            error: "Error al eliminar al usuario"
        })
    }
}

module.exports = {
    postUser,
    getUsers,
    getUser,
    putUser,
    deleteUser
}