import { NextFunction, Router, Request, Response } from "express"
import { BAD_REQUEST, OK } from "http-status"

const dashboard = Router()

dashboard.route("").post((req: Request, res: Response, next: NextFunction) => {
  // if (
  //   !req?.query?.idUser ||
  //   !req?.query?.company ||
  //   !req?.query?.year ||
  //   !req?.query?.week
  // ) {
  //   res.status(BAD_REQUEST).json({
  //     code: BAD_REQUEST,
  //     statusCode: "STC-DASH-400",
  //     typePayload: "API-DASH-400",
  //     payload: {},
  //   })
  // }
  res.status(OK).json({
    code: 200, // usar codigos de error HTTP
    statusCode: "STC-SAPN-001",
    typePayload: "API-SAPN-001",
    payload: {
      results: [
        {
          Werks: "1015",
          Puesto: "Gerente",
          Vkgrp: "225",
          Bezei: "ESTEFI GUADALUPE MAR",
          Fecha: "",
          VtaAccesorios: "0.000",
          VtaEquipos: "0.000",
          TotalVenta: "434610.380",
          TotalAccesorios: "2038.770",
          PorcMetaAcce: "13.610",
          TotalEquipos: "432571.610",
          PorcMetaEquipos: "102.670",
          FactorAccesorio: "0.490",
          FactorEquipo: "1.220",
          PagoAccesorios: "9.990",
          PagoEquipo: "5277.370",
          TotalPagar: "5287.360",
          Bukrs: "1000",
          Centro: "1015",
          Gjahr: "2022",
          Name1: "MACROPAY MID EULOGIO",
          Ort01: "MERIDA",
          Pstlz: "97000",
          Semana: 40,
          MetaAccesorio: "14976.880",
          TotalAccesorio: "2038.770",
          MetaEquipos: "421330.570",
          TotalEquiposH: "432571.610",
          MetaGlobal: "436307.450",
          TotalSuc: "434610.380",
          PorcMeta: "100.000",
          PorcMin: "85.000",
          PorcBase: "0.000",
          PorcMetaVend: "1.840",
          PorcMinVend: "1.470",
          PorcBaseVend: "0.740",
          PorcMeta1: "100.000",
          PorcMin1: "85.000",
          PorcBase1: "0.000",
          PorcMetaGer: "1.220",
          PorcMinGer: "0.980",
          PorcBaseGer: "0.490",
          Comision: "3132.410",
        },
      ],
    },
  })
})

export default dashboard
