const catch_async_err = require("../middlewares/catch_async_err");
const { compare_token } = require("../middlewares/token");
const Art = require("../models/art.model");
const User = require("../models/user.model");

exports.create_art = catch_async_err(async(req,res) => {
    const token = req.cookies
    if(!token) {
        return res.json({
            message : "Please Login!"
        })
    }
    else {
        const jwt_token = await compare_token(token.token)
        const id = jwt_token.data._id
        const art_created = await Art.create(req.body)
        if(art_created) {
            art_created.owner = id,
            art_created.previous_owners.push(id)
            await art_created.save()
            const user_to_update = await User.findById(id)
            user_to_update.digital_art.push(art_created._id)
            user_to_update.save()
            return res.json({
                message : "Art Created Successfully!"
            })
        }
        else {
            return res.json({
                message : "Error While Creating Art!"
            })
        }
    }
})

exports.get_all_arts = catch_async_err(async(req,res) => {
    const found_arts = await Art.find({}).populate("owner")
    return res.json({
        data : found_arts
    })
})