const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true

    }, password: {
        type: String,
        required: true

    }, phone: {
        type: String,
        required: true

    }, bio: {
        type: String,
        required: true

    }

})
// export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);
export const userModel = mongoose.models.users ?? mongoose.model("users", schema)

/**
 * name
"Maria Com Com"
email
"mcomcom@gmail.com"
password
"12345"
phone
997234567
bio

 */