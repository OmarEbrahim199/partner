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
import { CreateRewardArgs } from "./CreateRewardArgs";
import { UpdateRewardArgs } from "./UpdateRewardArgs";
import { DeleteRewardArgs } from "./DeleteRewardArgs";
import { RewardFindManyArgs } from "./RewardFindManyArgs";
import { RewardFindUniqueArgs } from "./RewardFindUniqueArgs";
import { Reward } from "./Reward";
import { ClaimedRewardFindManyArgs } from "../../claimedReward/base/ClaimedRewardFindManyArgs";
import { ClaimedReward } from "../../claimedReward/base/ClaimedReward";
import { FavouriteRewardFindManyArgs } from "../../favouriteReward/base/FavouriteRewardFindManyArgs";
import { FavouriteReward } from "../../favouriteReward/base/FavouriteReward";
import { Organisation } from "../../organisation/base/Organisation";
import { RewardImage } from "../../rewardImage/base/RewardImage";
import { RewardService } from "../reward.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Reward)
export class RewardResolverBase {
  constructor(
    protected readonly service: RewardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "any",
  })
  async _rewardsMeta(
    @graphql.Args() args: RewardFindManyArgs
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
  @graphql.Query(() => [Reward])
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "any",
  })
  async rewards(@graphql.Args() args: RewardFindManyArgs): Promise<Reward[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Reward, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "own",
  })
  async reward(
    @graphql.Args() args: RewardFindUniqueArgs
  ): Promise<Reward | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reward)
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "create",
    possession: "any",
  })
  async createReward(@graphql.Args() args: CreateRewardArgs): Promise<Reward> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organisation: args.data.organisation
          ? {
              connect: args.data.organisation,
            }
          : undefined,

        rewardImage: args.data.rewardImage
          ? {
              connect: args.data.rewardImage,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Reward)
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "update",
    possession: "any",
  })
  async updateReward(
    @graphql.Args() args: UpdateRewardArgs
  ): Promise<Reward | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organisation: args.data.organisation
            ? {
                connect: args.data.organisation,
              }
            : undefined,

          rewardImage: args.data.rewardImage
            ? {
                connect: args.data.rewardImage,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Reward)
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "delete",
    possession: "any",
  })
  async deleteReward(
    @graphql.Args() args: DeleteRewardArgs
  ): Promise<Reward | null> {
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
  @graphql.ResolveField(() => [ClaimedReward])
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "read",
    possession: "any",
  })
  async claimedRewards(
    @graphql.Parent() parent: Reward,
    @graphql.Args() args: ClaimedRewardFindManyArgs
  ): Promise<ClaimedReward[]> {
    const results = await this.service.findClaimedRewards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [FavouriteReward])
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "read",
    possession: "any",
  })
  async favouriteRewards(
    @graphql.Parent() parent: Reward,
    @graphql.Args() args: FavouriteRewardFindManyArgs
  ): Promise<FavouriteReward[]> {
    const results = await this.service.findFavouriteRewards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Organisation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "read",
    possession: "any",
  })
  async organisation(
    @graphql.Parent() parent: Reward
  ): Promise<Organisation | null> {
    const result = await this.service.getOrganisation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => RewardImage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RewardImage",
    action: "read",
    possession: "any",
  })
  async rewardImage(
    @graphql.Parent() parent: Reward
  ): Promise<RewardImage | null> {
    const result = await this.service.getRewardImage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
