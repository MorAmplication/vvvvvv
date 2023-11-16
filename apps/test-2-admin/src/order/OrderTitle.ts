import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "fld1";

export const OrderTitle = (record: TOrder): string => {
  return record.fld1?.toString() || String(record.id);
};
