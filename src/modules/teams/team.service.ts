import { Injectable } from "@nestjs/common";

@Injectable()
export class TeamService {
  constructor() {}

  async getAll() {
    await Promise.resolve();
    return [
      {
        id: 12345,
        name: "My Team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
