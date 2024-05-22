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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payLoad);
    return result;
});
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
const getProductById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id });
    return result;
});
const updateProductById = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield product_model_1.Product.findByIdAndUpdate(productId, productData, { new: true });
        return updatedProduct;
    }
    catch (error) {
        throw new Error('Error updating product');
    }
});
const deleteProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield product_model_1.Product.findByIdAndDelete(productId);
        return deletedProduct;
    }
    catch (error) {
        throw new Error('Error deleting product');
    }
});
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find({
            name: { $regex: searchTerm, $options: 'i' }
        });
        return products;
    }
    catch (error) {
        throw new Error('Error searching for products');
    }
});
exports.productServices = {
    createProduct, getAllProduct, getProductById, updateProductById, deleteProductById, searchProducts
};
