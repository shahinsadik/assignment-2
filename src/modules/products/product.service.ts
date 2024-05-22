import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct= async (payLoad:TProduct)=>{

    const result = await Product.create(payLoad);
    return result;
}
const getAllProduct= async ()=>{

    const result = await Product.find();
    return result;
}
const getProductById= async (_id: string)=>{

    const result = await Product.findOne({_id});
    return result;
}
const updateProductById = async (productId: string, productData: any) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });
        return updatedProduct;
    } catch (error) {
        throw new Error('Error updating product');
    }
};
const deleteProductById = async (productId: string) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        return deletedProduct;
    } catch (error) {
        throw new Error('Error deleting product');
    }
};
const searchProducts = async (searchTerm: string) => {
    try {
        const products = await Product.find({ 
            name: { $regex: searchTerm, $options: 'i' } 
        });
        return products;
    } catch (error) {
        throw new Error('Error searching for products');
    }
};
export const productServices={
    createProduct,getAllProduct,getProductById, updateProductById,deleteProductById, searchProducts
}