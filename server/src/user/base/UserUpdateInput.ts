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
import { ClaimedRewardUpdateManyWithoutUsersInput } from "./ClaimedRewardUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString, IsJSON } from "class-validator";
import { Type } from "class-transformer";
import { CompanyDetailUpdateManyWithoutUsersInput } from "./CompanyDetailUpdateManyWithoutUsersInput";
import { FavouriteRewardUpdateManyWithoutUsersInput } from "./FavouriteRewardUpdateManyWithoutUsersInput";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ClaimedRewardUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ClaimedRewardUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ClaimedRewardUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  claimedRewards?: ClaimedRewardUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CompanyDetailUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CompanyDetailUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CompanyDetailUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  companyDetails?: CompanyDetailUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => FavouriteRewardUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FavouriteRewardUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FavouriteRewardUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  favouriteRewards?: FavouriteRewardUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}

export { UserUpdateInput as UserUpdateInput };
