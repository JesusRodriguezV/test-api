import { NextFunction, Router, Request, Response } from "express"
import { BAD_REQUEST, OK } from "http-status"

const get_stock = Router()

get_stock.route("").get((req: Request, res: Response, next: NextFunction) => {
  if (!req?.query?.MATNR || !req?.query?.WERKS) {
    res.status(BAD_REQUEST).json({
      code: BAD_REQUEST, // usar codigos de error HTTP
      statusCode: "STC-SAPN-008",
      typePayload: "API-SAPN-008",
      payload: {
        result: {
          data: "Complete todos los campos obligatorios",
        },
      },
    })
  }
  res.status(OK).json({
    code: OK,
    statusCode: "STC-DASH-000",
    typePayload: "API-DASH-000",
    payload: {
      result: {
        MESSAGE: "Se obtuvieron las existencias",
        TIPO: "S",
        IMEI: "",
        MATERIAL: "",
        PLANT: "1001",
        STGLOC: "",
        IMEI_DETAIL: [
          {
            MATNR: "000000000000100313",
            WERKS: "1001",
            LGORT: "0010",
            CHARG: "0000013566",
            IMEI: "8952020520582775604",
          },
        ],
        ITEMS_DETAIL: [
          {
            MATERIAL: "000000000000106054",
            WERKS: "1001",
            STGE_LOC: "0010",
            AV_QTY_PLT: "2.000",
            DMBTR: "0.00",
          },
        ],
      },
    },
  })
})

export default get_stock
