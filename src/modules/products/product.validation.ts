import { z } from "zod";


const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});
const VariantUpdateSchema = z.object({
  type: z.string().optional(),
  value: z.string().optional(),
});

const InventorySchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});
const InventoryUpdateSchema = z.object({
  quantity: z.number().min(0).optional(),
  inStock: z.boolean().optional(),
});
export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(0),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});
export const productUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().min(0).optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(VariantUpdateSchema).optional(),
  inventory: InventoryUpdateSchema.optional(),
});




