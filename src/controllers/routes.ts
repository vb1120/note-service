import { AppRouter } from '../utils'
import { authHandler } from '../middlewares'
import { validateBody } from '../middlewares'
import { NoteCreateDto, NoteUpdateDto } from '../models'
import * as NoteController from './NoteController'

const router = AppRouter.getInstance()

router.use(authHandler())

router
    .route('/notes')
    .get(NoteController.getNotes)
    .post(NoteController.createNote)
router
    .route('/notes/:noteId')
    .get(NoteController.getNoteById)
    .put(NoteController.updateNoteById)
    .delete(NoteController.deleteNoteById)
