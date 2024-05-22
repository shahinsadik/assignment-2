import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const createOrderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number().int().positive(),
});


export const validateCheckOrder = (req:Request, res:Response, next:NextFunction) => {
  const { error } = createOrderSchema.safeParse(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      error: error.errors,
    });
  }
  next();
};