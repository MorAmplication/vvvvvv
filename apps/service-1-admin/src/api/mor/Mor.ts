import { Vika } from "../vika/Vika";

export type Mor = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  vikas?: Array<Vika>;
};
