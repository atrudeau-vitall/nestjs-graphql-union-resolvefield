import { forwardRef, Module } from "@nestjs/common";
import { TeamService } from "./team.service";
import { TeamResolver } from "./team.resolver";

@Module({
  imports: [],
  providers: [TeamService, TeamResolver],
  exports: [TeamService],
})
export class TeamModule {}
