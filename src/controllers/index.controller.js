import { v4 } from "uuid"

export const requesPing = (req, res) => res.send('pong')

export const getTask = (req, res) => res.json({
    message: "me invoque"
})
export const postTask = async (req, res) => {

    const { title, descripcion } = req.body

    if (!title || !descripcion) {
        return res.status(400).send("Bad request")
    }

    return res.status(200).json({
        title,
        descripcion,
        id: v4()
    })
}