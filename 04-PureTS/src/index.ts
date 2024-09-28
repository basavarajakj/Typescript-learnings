class User {
  private email: string
  name: string
  readonly city: string = "kadur"
  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}

class User2 {

  private _courseCount = 1;
  readonly city: string = "kadur"
  constructor( 
    public email: string,
    public name: string,
    private userId: number | string
  ){
    
  }

  private deleteToken() {
    console.log("Token deleted");
    
  }

  get getAppleEmail(): string{
    return `apple${this.email}`;
  } 

  get getCourseCount():string {
    return `count ${this._courseCount}`;
  }

  set setCourseCount(count: number) {
    this._courseCount = count
  }

}




const bassu =  new User("bs@b.com","bassu");
// bassu.email;
// bassu.city = "mysore"