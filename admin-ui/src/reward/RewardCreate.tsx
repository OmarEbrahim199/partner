import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClaimedRewardTitle } from "../claimedReward/ClaimedRewardTitle";
import { OrganisationTitle } from "../organisation/OrganisationTitle";
import { RewardImageTitle } from "../rewardImage/RewardImageTitle";

export const RewardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <ReferenceArrayInput
          source="claimedRewards"
          reference="ClaimedReward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClaimedRewardTitle} />
        </ReferenceArrayInput>
        <TextInput label="country" source="country" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="discount" source="discount" />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="latitude" source="latitude" />
        <TextInput label="longitude" source="longitude" />
        <NumberInput label="miles" source="miles" />
        <ReferenceInput
          source="organisation.id"
          reference="Organisation"
          label="Organisation"
        >
          <SelectInput optionText={OrganisationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="rewardimage.id"
          reference="RewardImage"
          label="RewardImage"
        >
          <SelectInput optionText={RewardImageTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="totalCount" source="totalCount" />
      </SimpleForm>
    </Create>
  );
};
