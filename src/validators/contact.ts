import httpStatus from "http-status"
import Joi from "joi"
import { NextFunction, Request, Response } from "express"
import CustomError from "../plugins/customError"
import { Contact } from "../models/contact"

const getContact = async (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object<Contact>({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    email: Joi.string().required(),
    birthday: Joi.date(),
  })
  const { error } = schema.validate(req.body, { abortEarly: false })
  error ? next(new CustomError(error, httpStatus.BAD_REQUEST)) : next()
}

const updateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object<Contact>({
    name: Joi.string(),
    lastName: Joi.string(),
    address: Joi.string(),
    phoneNumber: Joi.number(),
    email: Joi.string(),
    birthday: Joi.date(),
  })
  const { error } = schema.validate(req.body, { abortEarly: false })
  error ? next(new CustomError(error, httpStatus.BAD_REQUEST)) : next()
}

const Validator = { getContact, updateContact }

export default Validator
