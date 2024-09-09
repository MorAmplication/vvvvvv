import { Mor } from "../mor/Mor";

export type Vika = {
  createdAt: Date;
  id: string;
  mor?: Mor | null;
  updatedAt: Date;
};
