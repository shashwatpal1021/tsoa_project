// src/users/usersService.ts

import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
  public get(id: string, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: String(Math.floor(Math.random() * 10000)), // Random
        // id: UUIDv4,
        status: "Happy",
      ...userCreationParams,
    };
  }
}
