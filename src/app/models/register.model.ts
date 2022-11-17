export interface RegisterModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    firstName:string;
    lastName:string;
  };
  readonly address: {
    readonly city: string;
    readonly street: string;
    readonly number: number;
    readonly zipcode: number;
    readonly phone: number;
  }
}
