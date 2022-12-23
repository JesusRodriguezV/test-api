import { NextFunction, Router, Request, Response } from "express"
import { BAD_REQUEST, OK } from "http-status"

const dashboard = Router()

dashboard.route("").get((req: Request, res: Response, next: NextFunction) => {
  if (
    !req?.query?.idUser ||
    !req?.query?.company ||
    !req?.query?.year ||
    !req?.query?.week
  ) {
    res.status(BAD_REQUEST).json({
      code: BAD_REQUEST,
      statusCode: "STC-DASH-400",
      typePayload: "API-DASH-400",
      payload: {},
    })
  }
  res.status(OK).json({
    code: OK,
    statusCode: "STC-DASH-000",
    typePayload: "API-DASH-000",
    payload: {
      result: {
        userBalance: {
          profit: 1234.56,
          accessoriesProfit: 234.0,
          devicesProfit: 1000.56,
        },
        storeBalance: {
          devicesIncoming: 50111.99,
          accessoriesIncoming: 6999.01,
        },
        ranking: [
          {
            seller: "janito perez",
            accessoriesIncoming: 4002.21,
            devicesIncoming: 3000.21,
            total: 9000.02,
            profit: 3000.01,
          },
          {
            seller: "janito perez",
            accessoriesIncoming: 4002.21,
            devicesIncoming: 3000.21,
            total: 9000.03,
            profit: 3000.01,
          },
          {
            seller: "perenganito lopez",
            accessoriesIncoming: 4002.21,
            devicesIncoming: 3000.21,
            total: 9000.0,
            profit: 3000.01,
          },
          {
            seller: "fulano de tal",
            accessoriesIncoming: 4002.21,
            devicesIncoming: 3000.21,
            total: 9000.0,
            profit: 3000.01,
          },
          {
            seller: "janito perez",
            accessoriesIncoming: 4002.21,
            devicesIncoming: 3000.21,
            total: 9000.0,
            profit: 3000.01,
          },
        ],
        sellingChart: { globalIncoming: 10000.0, storeIncoming: 4000.01 },
        histogram: [
          { month: 1, profit: 1000 },
          { month: 2, profit: 5000 },
          { month: 3, profit: 2000 },
          { month: 4, profit: 8000 },
        ],
        selling: {
          profit: 241200,
          accessoriesProfit: 46336,
          devicesProfit: 75567,
        },
      },
    },
  })
})

export default dashboard
