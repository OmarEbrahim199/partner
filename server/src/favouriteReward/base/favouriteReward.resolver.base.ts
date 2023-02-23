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
import { CreateFavouriteRewardArgs } from "./CreateFavouriteRewardArgs";
import { UpdateFavouriteRewardArgs } from "./UpdateFavouriteRewardArgs";
import { DeleteFavouriteRewardArgs } from "./DeleteFavouriteRewardArgs";
import { FavouriteRewardFindManyArgs } from "./FavouriteRewardFindManyArgs";
import { FavouriteRewardFindUniqueArgs } from "./FavouriteRewardFindUniqueArgs";
import { FavouriteReward } from "./FavouriteReward";
import { User } from "../../user/base/User";
import { FavouriteRewardService } from "../favouriteReward.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavouriteReward)
export class FavouriteRewardResolverBase {
  constructor(
    protected readonly service: FavouriteRewardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "read",
    possession: "any",
  })
  async _favouriteRewardsMeta(
    @graphql.Args() args: FavouriteRewardFindManyArgs
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
  @graphql.Query(() => [FavouriteReward])
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "read",
    possession: "any",
  })
  async favouriteRewards(
    @graphql.Args() args: FavouriteRewardFindManyArgs
  ): Promise<FavouriteReward[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FavouriteReward, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "read",
    possession: "own",
  })
  async favouriteReward(
    @graphql.Args() args: FavouriteRewardFindUniqueArgs
  ): Promise<FavouriteReward | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FavouriteReward)
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "create",
    possession: "any",
  })
  async createFavouriteReward(
    @graphql.Args() args: CreateFavouriteRewardArgs
  ): Promise<FavouriteReward> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FavouriteReward)
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "update",
    possession: "any",
  })
  async updateFavouriteReward(
    @graphql.Args() args: UpdateFavouriteRewardArgs
  ): Promise<FavouriteReward | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => FavouriteReward)
  @nestAccessControl.UseRoles({
    resource: "FavouriteReward",
    action: "delete",
    possession: "any",
  })
  async deleteFavouriteReward(
    @graphql.Args() args: DeleteFavouriteRewardArgs
  ): Promise<FavouriteReward | null> {
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
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: FavouriteReward): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
