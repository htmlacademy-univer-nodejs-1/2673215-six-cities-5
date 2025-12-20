export default class UserWithTokenDto {
  public email!: string;

  public avatarPath!: string;

  public name!: string;

  public type!: 'обычный' | 'pro';

  public token!: string;
}
