type CreateCustomerInPut = {
  name: string;
  email: string;
  phone: string;
  street: string;
  zipcode: string;
  age?: number;
  complement?: Complement;
};

type CustomerOutPut = {
  name: string;
  email: string;
  phone: string;
  street: string;
  zipcode: string;
  age?: number;
  complement?: Complement;
  created_at?: Date;
  updated_at?: Date;
};

type Complement = {
  borough: string;
  residential_number: number;
  created_at?: Date;
  updated_at?: Date;
};

export { CreateCustomerInPut, CustomerOutPut };
