export interface BaseUser {
  customer: string;
  postcode: string;
  prefecture: string;
  municipality: string;
  address1: string;
  address2: string;
  department: string;
  responsibleparty: string;
  tel: string;
  email: string;
}
export interface User extends BaseUser {
  id: number;
}