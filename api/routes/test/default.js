import express from "express";
const defaultRoute = express.Router();

defaultRoute.post('/', (req, res) => {
    return res.json({
        msg: 'Hello World'
    })
})

export default defaultRoute