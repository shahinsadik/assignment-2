"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const order_validation_1 = require("./order.validation");
const router = express_1.default.Router();
router.post("/", order_validation_1.validateCheckOrder, order_controller_1.orderController.crateOrder);
router.get("/", order_controller_1.orderController.getAllOrder);
router.get("/by-email", order_controller_1.orderController.getOrdersByEmail);
exports.OrderRoutes = router;
