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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RewardUpdateManyWithoutRewardImagesInput } from "./RewardUpdateManyWithoutRewardImagesInput";
import { Type } from "class-transformer";

@InputType()
class RewardImageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  largeImageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mediumImageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rewardId?: string | null;

  @ApiProperty({
    required: false,
    type: () => RewardUpdateManyWithoutRewardImagesInput,
  })
  @ValidateNested()
  @Type(() => RewardUpdateManyWithoutRewardImagesInput)
  @IsOptional()
  @Field(() => RewardUpdateManyWithoutRewardImagesInput, {
    nullable: true,
  })
  rewards?: RewardUpdateManyWithoutRewardImagesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  smallImageUrl?: string | null;
}

export { RewardImageUpdateInput as RewardImageUpdateInput };
