/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { OrganisationWhereUniqueInput } from "./OrganisationWhereUniqueInput";
import { OrganisationUpdateInput } from "./OrganisationUpdateInput";

@ArgsType()
class UpdateOrganisationArgs {
  @Field(() => OrganisationWhereUniqueInput, { nullable: false })
  where!: OrganisationWhereUniqueInput;
  @Field(() => OrganisationUpdateInput, { nullable: false })
  data!: OrganisationUpdateInput;
}

export { UpdateOrganisationArgs as UpdateOrganisationArgs };
