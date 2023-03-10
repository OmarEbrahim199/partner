/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyDetailWhereInput } from "./CompanyDetailWhereInput";
import { Type } from "class-transformer";
import { CompanyDetailOrderByInput } from "./CompanyDetailOrderByInput";

@ArgsType()
class CompanyDetailFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompanyDetailWhereInput,
  })
  @Field(() => CompanyDetailWhereInput, { nullable: true })
  @Type(() => CompanyDetailWhereInput)
  where?: CompanyDetailWhereInput;

  @ApiProperty({
    required: false,
    type: [CompanyDetailOrderByInput],
  })
  @Field(() => [CompanyDetailOrderByInput], { nullable: true })
  @Type(() => CompanyDetailOrderByInput)
  orderBy?: Array<CompanyDetailOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CompanyDetailFindManyArgs as CompanyDetailFindManyArgs };
