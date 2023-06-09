const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        product: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: 'Product'
        }

    }],
    lecturerId: { type: mongoose.SchemaTypes.ObjectId },
    deliveredAt: {
        type: Date
    },
    orderStatus: {
        type: String,
        required: true,
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

let orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;