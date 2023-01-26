import { Router } from "express"
import getStockTransit from "./ getStockTransit"
import contacts from "./contacts"
import dashboard from "./dashboard"
import get_stock from "./get_stock"

const router = Router()

router.use("/contacts", contacts)
router.use("/dashboard", dashboard)
router.use("/get_stock", get_stock)
router.use("/getStockTransit", getStockTransit)

export default router
