import { model } from 'mongoose';
import * as schemas from '../schemas/schema.js'

export const Note = model('Notes', schemas.note);