import { Schema, model, Model, Document } from "mongoose"

export interface Contact extends Document {
  active: boolean
  name: string
  lastName: string
  address: string
  email: string
  phoneNumber: number
  birthday?: Date
}

const ContactSchema = new Schema<Contact>(
  {
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const ContactModel: Model<Contact> = model("Contact", ContactSchema)

export default ContactModel
