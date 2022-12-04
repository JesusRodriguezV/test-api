import { Response } from "express"

const customResponse = <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  data?: T,
  count?: number
) => {
  res.status(statusCode).send({
    success,
    data,
    count,
  })
}

export default customResponse
