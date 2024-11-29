// src/users/usersController.ts
import {
  Response,
  Controller,
  Get,
  Path,
  Post,
  Query,
  SuccessResponse,
    Route,
  Body,
 Example
} from "tsoa";
import { User } from "../users/user";
import { UserCreationParams, UsersService,  } from "../services/usersService";
// import { UUID } from "crypto";

interface ValidateErrorJSON {
  message: "Validation failed";
  details: { [name: string]: unknown };
}

@Route("users")
export class UsersController extends Controller {
  @Example<User>({
    id: "52907745-7672-470e-a803-a2f8feb52944",
    name: "tsoa user",
    email: "hello@tsoa.com",
    phoneNumbers: [],
    status: "Happy",
  })

  /**
   * @example userId "52907745-7672-470e-a803-a2f8feb52944"
   * @example userId "e77ef155-bd12-46f0-8559-bf55f6dd4c63"
   */
  /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   * @param userId The user's identifier
   * @param name Provide a username to display
   */
  @Get("{userId}")
  public async getUser(
    @Path() userId: UUID,
    @Query() name?: string
  ): Promise<User> {
    return new UsersService().get(userId, name);
  }

  @Post()
  @SuccessResponse("201", "Created") // Custom success response
  @Response<ValidateErrorJSON>(422, "Validation Failed", {
    message: "Validation failed",
    details: {
      requestBody: {
        message: "id is an excess property and therefore not allowed",
        value: "52907745-7672-470e-a803-a2f8feb52944",
      },
    },
  })
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody);
    return;
  }
  //   @Response<ErrorResponse>("default", "Unexpected error")
  //   @Get("Response")
  //   public async getResponse(): Promise<TestModel> {
  //     return new ModelService().getModel();
  //   }
}

export type UUID = string;
