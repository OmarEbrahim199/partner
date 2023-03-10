/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyDetailWhereInput } from "./CompanyDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CompanyDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CompanyDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyDetailWhereInput)
  @IsOptional()
  @Field(() => CompanyDetailWhereInput, {
    nullable: true,
  })
  every?: CompanyDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyDetailWhereInput)
  @IsOptional()
  @Field(() => CompanyDetailWhereInput, {
    nullable: true,
  })
  some?: CompanyDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyDetailWhereInput)
  @IsOptional()
  @Field(() => CompanyDetailWhereInput, {
    nullable: true,
  })
  none?: CompanyDetailWhereInput;
}
export { CompanyDetailListRelationFilter as CompanyDetailListRelationFilter };
