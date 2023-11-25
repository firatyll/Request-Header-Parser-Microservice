const router = require("express").Router()

router.get("/api/:name", (req, res) => {
    if (req.params.name == "whoami") {
        return res.json({
            ipaddress: req.socket.remoteAddress,
            language: req.headers["accept-language"],
            software: req.headers["user-agent"]
        })
    }
})

module.exports = router