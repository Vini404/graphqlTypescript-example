import { Schema, model } from 'mongoose';

// Document interface
interface User {
  name: string;
  email: string;
  description: string;
}

// Schema
const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: {type:String, required: true}
});

export const userModel = model('User', schema);