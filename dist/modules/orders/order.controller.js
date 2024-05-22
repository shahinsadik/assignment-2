"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const product_service_1 = require("../products/product.service");
const crateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    try {
        const product = yield product_service_1.productServices.getProductById(orderData.productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        if (product.inventory.quantity < orderData.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        const result = yield order_service_1.orderServices.createOrder(orderData);
        product.inventory.quantity -= orderData.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        yield product.save();
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err.message,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.orderServices.getAllOrder();
    try {
        res.json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err,
        });
    }
});
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email query parameter is required.",
        });
    }
    try {
        const result = yield order_service_1.orderServices.getOrdersByEmail(email);
        res.json({
            success: true,
            message: `Orders fetched successfully for user email '${email}'!`,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err,
        });
    }
});
exports.orderController = {
    crateOrder,
    getAllOrder,
    getOrdersByEmail,
};
