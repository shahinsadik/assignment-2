import express from "express";
import { orderController } from "./order.controller";
import { validateCheckOrder } from "./order.validation";

const router = express.Router();





router.post("/",validateCheckOrder, orderController.crateOrder);
router.get("/", orderController.getAllOrder);
router.get("/by-email", orderController.getOrdersByEmail);

export const OrderRoutes = router;