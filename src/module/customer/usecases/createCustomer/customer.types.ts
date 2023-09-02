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
};

type Complement = {
  borough: string;
  residential_number: number;
};

export { CreateCustomerInPut, CustomerOutPut };
