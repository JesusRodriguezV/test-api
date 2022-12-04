import { NextFunction, Request, Response } from "express"
import { BAD_REQUEST, NOT_FOUND, OK } from "http-status"
import CustomError from "../plugins/customError"
import { isValidObjectId, Model } from "mongoose"
import customResponse from "../plugins/customResponse"

const Controller = <T>(Model: Model<T>) => {
  const getAll = (req: Request, res: Response, next: NextFunction) => {
    Model.find({ active: true })
      .countDocuments()
      .then(count => {
        Model.find({ active: true })
          .limit(Number(req.query?.limit) || 0)
          .skip(Number(req.query?.skip) || 0)
          .then(value => {
            if (!value)
              return next(
                new CustomError(
                  { name: "not_found", message: "Not found." },
                  NOT_FOUND
                )
              )
            customResponse(res, OK, true, value, count)
          })
          .catch(error => next(new CustomError(error, BAD_REQUEST)))
      })
      .catch(error => next(new CustomError(error, BAD_REQUEST)))
  }

  const create = (req: Request, res: Response, next: NextFunction) => {
    const entry = new Model(req.body)
    entry
      .save()
      .then(value => {
        customResponse(res, OK, true, value)
      })
      .catch(error => next(new CustomError(error, BAD_REQUEST)))
  }

  const byId = (req: Request, res: Response, next: NextFunction) => {
    if (!isValidObjectId(req.params.id)) {
      return next(
        new CustomError(
          { name: "bad_request", message: "The given ID was not valid." },
          BAD_REQUEST
        )
      )
    }
    Model.findOne({ _id: req.params.id })
      .then(value => {
        if (!value)
          return next(
            new CustomError(
              { name: "not_found", message: "The given ID was not found." },
              NOT_FOUND
            )
          )
        customResponse(res, OK, true, value)
      })
      .catch(error => next(new CustomError(error, BAD_REQUEST)))
  }

  const update = (req: Request, res: Response, next: NextFunction) => {
    if (!isValidObjectId(req.params.id)) {
      return next(
        new CustomError(
          { name: "bad_request", message: "The given ID was not valid." },
          BAD_REQUEST
        )
      )
    }
    Model.findOne({ _id: req.params.id })
      .then(value => {
        if (!value)
          return next(
            new CustomError(
              { name: "not_found", message: "The given ID was not found." },
              NOT_FOUND
            )
          )
        Object.assign(value, req.body)
        value
          .save()
          .then(value => customResponse(res, OK, true, value))
          .catch(error => next(new CustomError(error, BAD_REQUEST)))
      })
      .catch(error => next(new CustomError(error, BAD_REQUEST)))
  }

  const remove = (req: Request, res: Response, next: NextFunction) => {
    if (!isValidObjectId(req.params.id)) {
      return next(
        new CustomError(
          { name: "bad_request", message: "The given ID was not valid." },
          BAD_REQUEST
        )
      )
    }
    Model.findOne({ _id: req.params.id })
      .then(value => {
        if (!value)
          return next(
            new CustomError(
              { name: "not_found", message: "The given ID was not found." },
              NOT_FOUND
            )
          )
        Object.assign(value, { active: false })
        value
          .save()
          .then(_ => customResponse(res, OK, true))
          .catch(error => next(new CustomError(error, BAD_REQUEST)))
      })
      .catch(error => next(new CustomError(error, BAD_REQUEST)))
  }
  return { getAll, create, byId, update, remove }
}

export default Controller
