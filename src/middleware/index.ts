import rateLimit from "express-rate-limit"
import logger from "morgan"
import compress from "compression"
import crypto from "crypto"
import helmet from "helmet"
import { json, urlencoded, NextFunction, Request, Response } from "express"
import { config } from "dotenv"
import methodOverride from "method-override"
import cors from "cors"
import { expressjwt } from "express-jwt"
import httpStatus from "http-status"
import CustomError from "../plugins/customError"

config()

export const onNotFound = (req: Request, res: Response, next: NextFunction) => {
  next(
    new CustomError(
      { name: "not_found", message: "Route not found" },
      httpStatus.NOT_FOUND
    )
  )
}

export const showError = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).send({
    success: false,
    name: err.name,
    message: err.message,
  })
}

const Middleware: Array<any> = [
  rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }),
  process.env.ENV_APP == "development" ? logger("dev") : [],
  compress(),
  helmet(),
  json(),
  urlencoded({ extended: true }),
  methodOverride(),
  cors(),
]

export default Middleware
