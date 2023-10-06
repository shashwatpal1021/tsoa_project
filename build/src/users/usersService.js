"use strict";
// src/users/usersService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    get(id, name) {
        return {
            id,
            email: "jane@doe.com",
            name: name !== null && name !== void 0 ? name : "Jane Doe",
            status: "Happy",
            phoneNumbers: [],
        };
    }
    create(userCreationParams) {
        return Object.assign({ id: String(Math.floor(Math.random() * 10000)), 
            // id: UUIDv4,
            status: "Happy" }, userCreationParams);
    }
}
exports.UsersService = UsersService;
