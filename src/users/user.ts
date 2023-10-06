/**
 * User objects allow you to associate actions performed
 * in the system with the user that performed them.
 * The User object contains common information across
 * every user in the system regardless of status and role.
 */

import { UUID } from "./usersController";

// import { UUID } from "crypto";

// export interface User {
//   id: number;
//   email: string;
//   name: string;
//   status?: "Happy" | "Sad";
//   phoneNumbers: string[];
// }


/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 * @pattern [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}
 * @format uuid
 */

// export type UUID = string;

export interface User {
  id: UUID;
  email?: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}