import { Router } from "express"
import contacts from "./contacts"
import dashboard from "./dashboard"

const router = Router()

router.use("/contacts", contacts)
router.use("/dashboard", dashboard)

export default router
