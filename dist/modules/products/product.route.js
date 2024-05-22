"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(product_validation_1.productSchema), product_controller_1.productController.crateProduct);
router.get("/", product_controller_1.productController.getAllProduct);
router.get("/:productId", product_controller_1.productController.getProductById);
router.put("/:productId", (0, validateRequest_1.default)(product_validation_1.productUpdateSchema), product_controller_1.productController.updateProductById);
router.delete("/:productId", product_controller_1.productController.deleteProductById);
router.get("/", product_controller_1.productController.searchProducts);
exports.ProductRoutes = router;
