import express from "express";
import { productController } from "./product.controller";
import { productSchema, productUpdateSchema } from "./product.validation";
import validateRequest from "../../utils/validateRequest";
const router = express.Router();

router.post(
  "/",
  validateRequest(productSchema),
  productController.crateProduct
);
router.get("/", productController.getAllProduct);
router.get("/:productId", productController.getProductById);
router.put(
  "/:productId",
  validateRequest(productUpdateSchema),
  productController.updateProductById
);
router.delete("/:productId", productController.deleteProductById);
router.get("/", productController.searchProducts);
export const ProductRoutes = router;
