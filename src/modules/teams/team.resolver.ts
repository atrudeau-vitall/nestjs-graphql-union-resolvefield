import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { MyUnion, Team } from "./team.model";
import { TeamService } from "./team.service";

@Resolver(() => Team)
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Query(() => [Team], { name: "teams", nullable: true })
  async getTeams() {
    return this.teamService.getAll();
  }

  @ResolveField("members", () => [MyUnion], { nullable: true })
  async getMembers(@Parent() team: Team) {
    await Promise.resolve(team.id);
    return [
      {
        id: 123,
        name: "Bobby Alice",
        birthday: new Date(),
      },
      {
        id: 456,
        name: "Eiffel Tower",
        address: "123 Easy St",
      },
    ];
  }
}
