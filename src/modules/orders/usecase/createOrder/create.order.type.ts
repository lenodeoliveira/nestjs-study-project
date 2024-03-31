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
  product_id: number;
  order_id?: number;
};

type OutPutOrder = InputOrder;

export { InputOrder, OutPutOrder };
