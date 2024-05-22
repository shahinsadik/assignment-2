"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCheckOrder = exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number().int().positive(),
});
const validateCheckOrder = (req, res, next) => {
    const { error } = exports.createOrderSchema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation error",
            error: error.errors,
        });
    }
    next();
};
exports.validateCheckOrder = validateCheckOrder;
