import { clothesData } from "../utils/TrendVibeClothes.js";

export const ClotheController = {
    allProduct: (req, res) => {
        try {
            res.status(200).send({ status: 200, message: "Success", data: clothesData})
        } catch (error) {
            res.status(400).send({ status: 400, message: "Something Went Wrong" })
        }
    },
    byId: (req, res) => {
        let { id } = req.params
        let fliterData = clothesData.find((item) => item.id == id)

        if (!fliterData) {
            res.status(404).send({ status: 404, message: "Data Not Found", data: [] })
        }
        else {
            res.status(200).send({ status: 200, message: "Success", data: fliterData })
        }
    },
    byCategory: (req, res) => {
        let { category } = req.params
        let fliterData = clothesData.filter((item) => item.category == category)

        if (!fliterData) {
            res.status(404).send({ status: 404, message: "Data Not Found", data: [] })
        }
        else {
            res.status(200).send({ status: 200, message: "Success", data: fliterData })
        }
    },
    byFabrics: (req, res) => {
        let { fabrics } = req.params
        let fliterData = clothesData.filter((item) => item.fabric == fabrics)

        if (!fliterData) {
            res.status(404).send({ status: 404, message: "Data Not Found", data: [] })
        }
        else {
            res.status(200).send({ status: 200, message: "Success", data: fliterData })
        }
    }
}