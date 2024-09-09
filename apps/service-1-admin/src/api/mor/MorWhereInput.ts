import { StringFilter } from "../../util/StringFilter";
import { VikaListRelationFilter } from "../vika/VikaListRelationFilter";

export type MorWhereInput = {
  id?: StringFilter;
  vikas?: VikaListRelationFilter;
};
