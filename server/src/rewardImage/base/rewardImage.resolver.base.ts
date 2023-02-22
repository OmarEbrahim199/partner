/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateRewardImageArgs } from "./CreateRewardImageArgs";
import { UpdateRewardImageArgs } from "./UpdateRewardImageArgs";
import { DeleteRewardImageArgs } from "./DeleteRewardImageArgs";
import { RewardImageFindManyArgs } from "./RewardImageFindManyArgs";
import { RewardImageFindUniqueArgs } from "./RewardImageFindUniqueArgs";
import { RewardImage } from "./RewardImage";
import { RewardFindManyArgs } from "../../reward/base/RewardFindManyArgs";
import { Reward } from "../../reward/base/Reward";
import { RewardImageService } from "../rewardImage.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rewardimage)
export class RewardImageResolverBase {
  constructor(
    protected readonly service: RewardImageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "read",
    possession: "any",
  })
  async _rewardImagesMeta(
    @graphql.Args() args: RewardImageFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RewardImage])
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "read",
    possession: "any",
  })
  async rewardImages(
    @graphql.Args() args: RewardImageFindManyArgs
  ): Promise<RewardImage[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RewardImage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "read",
    possession: "own",
  })
  async rewardImage(
    @graphql.Args() args: RewardImageFindUniqueArgs
  ): Promise<RewardImage | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RewardImage)
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "create",
    possession: "any",
  })
  async createRewardImage(
    @graphql.Args() args: CreateRewardImageArgs
  ): Promise<RewardImage> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RewardImage)
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "update",
    possession: "any",
  })
  async updateRewardImage(
    @graphql.Args() args: UpdateRewardImageArgs
  ): Promise<RewardImage | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RewardImage)
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "delete",
    possession: "any",
  })
  async deleteRewardImage(
    @graphql.Args() args: DeleteRewardImageArgs
  ): Promise<RewardImage | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reward])
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "any",
  })
  async rewards(
    @graphql.Parent() parent: RewardImage,
    @graphql.Args() args: RewardFindManyArgs
  ): Promise<Reward[]> {
    const results = await this.service.findRewards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
