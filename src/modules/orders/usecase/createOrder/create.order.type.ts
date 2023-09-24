type InputOrder = {
  order_name: string;
  description: string;
  value_paid: number;
  total_value: number;
  number_installments: number;
  quantity: number;
  id_customer: number;
  items: Items[];
};

type Items = {
  id_product: number;
  id_items: number;
  sale_price: number;
};

export { InputOrder };
