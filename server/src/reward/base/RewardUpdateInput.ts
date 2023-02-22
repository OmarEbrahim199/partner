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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsInt,
  IsDate,
  IsNumber,
} from "class-validator";
import { ClaimedRewardUpdateManyWithoutRewardsInput } from "./ClaimedRewardUpdateManyWithoutRewardsInput";
import { Type } from "class-transformer";
import { OrganisationWhereUniqueInput } from "../../organisation/base/OrganisationWhereUniqueInput";
import { RewardImageWhereUniqueInput } from "../../rewardImage/base/RewardImageWhereUniqueInput";

@InputType()
class RewardUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: () => ClaimedRewardUpdateManyWithoutRewardsInput,
  })
  @ValidateNested()
  @Type(() => ClaimedRewardUpdateManyWithoutRewardsInput)
  @IsOptional()
  @Field(() => ClaimedRewardUpdateManyWithoutRewardsInput, {
    nullable: true,
  })
  claimedRewards?: ClaimedRewardUpdateManyWithoutRewardsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  discount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expirationDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  latitude?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  longitude?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  miles?: number | null;

  @ApiProperty({
    required: false,
    type: () => OrganisationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganisationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganisationWhereUniqueInput, {
    nullable: true,
  })
  organisation?: OrganisationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RewardImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RewardImageWhereUniqueInput)
  @IsOptional()
  @Field(() => RewardImageWhereUniqueInput, {
    nullable: true,
  })
  rewardImage?: RewardImageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  totalCount?: string | null;
}

export { RewardUpdateInput as RewardUpdateInput };
