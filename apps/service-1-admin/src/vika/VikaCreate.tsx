import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MorTitle } from "../mor/MorTitle";

export const VikaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="mor.id" reference="Mor" label="Mor">
          <SelectInput optionText={MorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
