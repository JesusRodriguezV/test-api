import { Router } from "express"
import Controller from "../controllers"
import ContactModel from "../models/contact"
import Validator from "../validators/contact"

const contacts = Router()

const { getAll, byId, create, update, remove } = Controller(ContactModel)
const { getContact, updateContact } = Validator

contacts.route("/").get(getAll)

contacts.route("/new").post(getContact, create)

contacts.route("/:id").get(byId).put(updateContact, update).delete(remove)

export default contacts
