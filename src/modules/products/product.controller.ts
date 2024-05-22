import { Request, Response } from "express";
import { productServices } from "./product.service";

const crateProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await productServices.createProduct(productData);

  try{
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
  }catch(err:any){
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        data: err,
      });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  const result = await productServices.getAllProduct();

  try{
    res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
  }catch(err:any){
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        data: err,
      });
  }
};
const getProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;
  const result = await productServices.getProductById(productId);

  try{
    res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
  }catch(err:any){
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        data: err,
      });
  }
};

const updateProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const productData = req.body;

    try {
        const updatedProduct = await productServices.updateProductById(productId, productData);
        
        if (updatedProduct) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: updatedProduct,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err.message,
        });
    }
};
const deleteProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const deletedProduct = await productServices.deleteProductById(productId);
        
        if (deletedProduct) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: deletedProduct,
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err.message,
        });
    }
};

const searchProducts = async (req: Request, res: Response) => {
    const { searchTerm } = req.query;

    try {
        const products = await productServices.searchProducts(searchTerm as string);
        
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: products,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            data: err.message,
        });
    }
};
export const productController = {
  crateProduct,
  getAllProduct,getProductById,updateProductById,deleteProductById,searchProducts
};
