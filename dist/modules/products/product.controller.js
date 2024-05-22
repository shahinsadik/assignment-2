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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const crateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.productServices.createProduct(productData);
    try {
        res.json({
            success: true,
            message: "Product created successfully!",
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
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.getAllProduct();
    try {
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
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
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_service_1.productServices.getProductById(productId);
    try {
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
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
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const productData = req.body;
    try {
        const updatedProduct = yield product_service_1.productServices.updateProductById(productId, productData);
        if (updatedProduct) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: updatedProduct,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err.message,
        });
    }
});
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const deletedProduct = yield product_service_1.productServices.deleteProductById(productId);
        if (deletedProduct) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: deletedProduct,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err.message,
        });
    }
});
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    try {
        const products = yield product_service_1.productServices.searchProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: products,
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
exports.productController = {
    crateProduct,
    getAllProduct, getProductById, updateProductById, deleteProductById, searchProducts
};
