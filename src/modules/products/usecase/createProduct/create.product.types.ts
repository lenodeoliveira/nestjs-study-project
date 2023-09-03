type InputProduct = {
  name_product: string;
  image_url: string;
  available: boolean;
  quantity_in_stock: number;
  purchase_price: number;
  sale_price: number;
};

type OutPutProduct = InputProduct & {
  created_at?: Date;
  updated_at?: Date;
};

export { InputProduct, OutPutProduct };
