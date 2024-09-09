import { StringFilter } from "../../util/StringFilter";
import { MorWhereUniqueInput } from "../mor/MorWhereUniqueInput";

export type VikaWhereInput = {
  id?: StringFilter;
  mor?: MorWhereUniqueInput;
};
