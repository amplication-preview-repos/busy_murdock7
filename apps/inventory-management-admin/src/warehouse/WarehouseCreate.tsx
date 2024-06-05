import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";

export const WarehouseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Capacity" source="capacity" />
        <ReferenceArrayInput
          source="inventories"
          reference="Inventory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Location" source="location" />
      </SimpleForm>
    </Create>
  );
};
