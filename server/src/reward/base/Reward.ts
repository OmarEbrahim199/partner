/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsInt,
  IsNumber,
} from "class-validator";
import { ClaimedReward } from "../../claimedReward/base/ClaimedReward";
import { Type } from "class-transformer";
import { FavouriteReward } from "../../favouriteReward/base/FavouriteReward";
import { Organisation } from "../../organisation/base/Organisation";
import { RewardImage } from "../../rewardImage/base/RewardImage";

@ObjectType()
class Reward {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city!: string | null;

  @ApiProperty({
    required: false,
    type: () => [ClaimedReward],
  })
  @ValidateNested()
  @Type(() => ClaimedReward)
  @IsOptional()
  claimedRewards?: Array<ClaimedReward>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  discount!: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expirationDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [FavouriteReward],
  })
  @ValidateNested()
  @Type(() => FavouriteReward)
  @IsOptional()
  favouriteRewards?: Array<FavouriteReward>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  latitude!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  longitude!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  miles!: number | null;

  @ApiProperty({
    required: false,
    type: () => Organisation,
  })
  @ValidateNested()
  @Type(() => Organisation)
  @IsOptional()
  organisation?: Organisation | null;

  @ApiProperty({
    required: false,
    type: () => RewardImage,
  })
  @ValidateNested()
  @Type(() => RewardImage)
  @IsOptional()
  rewardImage?: RewardImage | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  totalCount!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Reward as Reward };
