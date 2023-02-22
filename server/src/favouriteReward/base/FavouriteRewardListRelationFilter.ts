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
import { FavouriteRewardWhereInput } from "./FavouriteRewardWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FavouriteRewardListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FavouriteRewardWhereInput,
  })
  @ValidateNested()
  @Type(() => FavouriteRewardWhereInput)
  @IsOptional()
  @Field(() => FavouriteRewardWhereInput, {
    nullable: true,
  })
  every?: FavouriteRewardWhereInput;

  @ApiProperty({
    required: false,
    type: () => FavouriteRewardWhereInput,
  })
  @ValidateNested()
  @Type(() => FavouriteRewardWhereInput)
  @IsOptional()
  @Field(() => FavouriteRewardWhereInput, {
    nullable: true,
  })
  some?: FavouriteRewardWhereInput;

  @ApiProperty({
    required: false,
    type: () => FavouriteRewardWhereInput,
  })
  @ValidateNested()
  @Type(() => FavouriteRewardWhereInput)
  @IsOptional()
  @Field(() => FavouriteRewardWhereInput, {
    nullable: true,
  })
  none?: FavouriteRewardWhereInput;
}
export { FavouriteRewardListRelationFilter as FavouriteRewardListRelationFilter };
