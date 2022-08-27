export class User {

  public id: Number;
  public userId: string;
  public firstname: string;
  public lastname: string;
  public username: string;
  public email: string;
  public lastLoginDate: Date;
  public lastLoginDateDisplay: Date;
  public joinDate: Date;
  public profileImageUrl: string;
  public active: boolean;
  public notLocked: boolean;
  public role: string;
  public authorities: [];

  constructor() {
    this.id = 0;
    this.userId = '';
    this.firstname = '';
    this.lastname = '';
    this.username = '';
    this.email = '';
    this.lastLoginDate = null as any;
    this.lastLoginDateDisplay = null as any;
    this.joinDate = null as any;
    this.profileImageUrl = '';
    this.active = false;
    this.notLocked = false;
    this.role = '';
    this.authorities = [];
  }

}
