import { Request, Response } from 'express'
import { asyncWrapp } from '../middlewares'
import { Note } from '../models'

export const getNotes = asyncWrapp(async (req: Request, res: Response) => {
    const { uuid } = req.payload

    const notes = await Note.findAll({ where: { userUuid: uuid } })

    res.status(200).json({ notes })
})

export const createNote = asyncWrapp(async (req: Request, res: Response) => {
    const { uuid } = req.payload
    req.body.userUuid = uuid

    const note = await Note.create(req.body)

    res.status(200).json({ note })
})

export const getNoteById = asyncWrapp(async (req: Request, res: Response) => {
    const { noteId } = req.params
    const { uuid } = req.payload

    const note = await Note.findByPk(noteId)
    if (!note || note.userUuid !== uuid)
        return res.status(404).send({
            msg: `No note found with id ${noteId} for the user with uuid ${uuid}`
        })

    res.status(200).json({ note })
})

export const updateNoteById = asyncWrapp(
    async (req: Request, res: Response) => {
        const { noteId } = req.params
        const { uuid } = req.payload

        const note = await Note.findByPk(noteId)
        if (!note || note.userUuid !== uuid)
            return res.status(404).send({
                msg: `No note found with id ${noteId} for the user with uuid ${uuid}`
            })

        req.body.userUuid = uuid

        await note.update(req.body)

        res.status(200).json({ note })
    }
)

export const deleteNoteById = asyncWrapp(
    async (req: Request, res: Response) => {
        const { noteId } = req.params
        const { uuid } = req.payload

        const note = await Note.findByPk(noteId)
        if (!note || note.userUuid !== uuid)
            return res.status(404).send({
                msg: `No note found with id ${noteId} for the user with uuid ${uuid}`
            })

        await note.destroy()

        res.status(204).end()
    }
)
