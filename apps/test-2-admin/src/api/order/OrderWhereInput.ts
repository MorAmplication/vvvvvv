import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  discount?: FloatNullableFilter;
  totalPrice?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  fld1?: StringNullableFilter;
};
