export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly name: {
    firstname: string;
    lastname: string;
  };
}
