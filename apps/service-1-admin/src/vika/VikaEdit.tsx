import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MorTitle } from "../mor/MorTitle";

export const VikaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="mor.id" reference="Mor" label="Mor">
          <SelectInput optionText={MorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
