import { model } from 'mongoose';
import * as schemas from './schema/schema.js';

export const Note = model('Notes', schemas.note);