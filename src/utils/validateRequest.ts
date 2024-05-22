import { RequestHandler } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject): RequestHandler => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (err: any) {
      console.log(err);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
};
export default validateRequest;
