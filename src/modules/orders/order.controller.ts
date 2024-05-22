import { Request, Response } from "express";
import { orderServices } from "./order.service";
import { productServices } from "../products/product.service";

const crateOrder = async (req: Request, res: Response) => {
  const orderData = req.body;

  try {
    const product = await productServices.getProductById(orderData.productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.inventory.quantity < orderData.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    const result = await orderServices.createOrder(orderData);

    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    await product.save();

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: err.message,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  const result = await orderServices.getAllOrder();

  try {
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: err,
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email query parameter is required.",
    });
  }

  try {
    const result = await orderServices.getOrdersByEmail(email as string);
    res.json({
      success: true,
      message: `Orders fetched successfully for user email '${email}'!`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: err,
    });
  }
};

export const orderController = {
  crateOrder,
  getAllOrder,
  getOrdersByEmail,
};
