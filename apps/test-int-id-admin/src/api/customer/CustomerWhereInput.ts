import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerWhereInput = {
  id?: IntFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  address?: AddressWhereUniqueInput;
};
