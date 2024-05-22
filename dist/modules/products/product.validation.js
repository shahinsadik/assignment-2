"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateSchema = exports.productSchema = void 0;
const zod_1 = require("zod");
const VariantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const VariantUpdateSchema = zod_1.z.object({
    type: zod_1.z.string().optional(),
    value: zod_1.z.string().optional(),
});
const InventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0),
    inStock: zod_1.z.boolean(),
});
const InventoryUpdateSchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0).optional(),
    inStock: zod_1.z.boolean().optional(),
});
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number().min(0),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(VariantSchema),
    inventory: InventorySchema,
});
exports.productUpdateSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().min(0).optional(),
    category: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    variants: zod_1.z.array(VariantUpdateSchema).optional(),
    inventory: InventoryUpdateSchema.optional(),
});
