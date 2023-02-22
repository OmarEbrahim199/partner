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
import { CreateClaimedRewardArgs } from "./CreateClaimedRewardArgs";
import { UpdateClaimedRewardArgs } from "./UpdateClaimedRewardArgs";
import { DeleteClaimedRewardArgs } from "./DeleteClaimedRewardArgs";
import { ClaimedRewardFindManyArgs } from "./ClaimedRewardFindManyArgs";
import { ClaimedRewardFindUniqueArgs } from "./ClaimedRewardFindUniqueArgs";
import { ClaimedReward } from "./ClaimedReward";
import { Reward } from "../../reward/base/Reward";
import { User } from "../../user/base/User";
import { ClaimedRewardService } from "../claimedReward.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Claimedreward)
export class ClaimedRewardResolverBase {
  constructor(
    protected readonly service: ClaimedRewardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "read",
    possession: "any",
  })
  async _claimedRewardsMeta(
    @graphql.Args() args: ClaimedRewardFindManyArgs
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
  @graphql.Query(() => [ClaimedReward])
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "read",
    possession: "any",
  })
  async claimedRewards(
    @graphql.Args() args: ClaimedRewardFindManyArgs
  ): Promise<ClaimedReward[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ClaimedReward, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "read",
    possession: "own",
  })
  async claimedReward(
    @graphql.Args() args: ClaimedRewardFindUniqueArgs
  ): Promise<ClaimedReward | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ClaimedReward)
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "create",
    possession: "any",
  })
  async createClaimedReward(
    @graphql.Args() args: CreateClaimedRewardArgs
  ): Promise<ClaimedReward> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        reward: args.data.reward
          ? {
              connect: args.data.reward,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ClaimedReward)
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "update",
    possession: "any",
  })
  async updateClaimedReward(
    @graphql.Args() args: UpdateClaimedRewardArgs
  ): Promise<ClaimedReward | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          reward: args.data.reward
            ? {
                connect: args.data.reward,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => ClaimedReward)
  @nestAccessControl.UseRoles({
    resource: "ClaimedReward",
    action: "delete",
    possession: "any",
  })
  async deleteClaimedReward(
    @graphql.Args() args: DeleteClaimedRewardArgs
  ): Promise<ClaimedReward | null> {
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
  @graphql.ResolveField(() => Reward, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Reward",
    action: "read",
    possession: "any",
  })
  async reward(
    @graphql.Parent() parent: ClaimedReward
  ): Promise<Reward | null> {
    const result = await this.service.getReward(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: ClaimedReward): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}