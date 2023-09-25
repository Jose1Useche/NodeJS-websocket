import { Schema } from 'mongoose';

//******************************************************//
//********************Product Schema********************//

export const note = new Schema({
  title: {
      type: String,
      required: true
  },
  description: String
},
{
    timestamps: true
});
