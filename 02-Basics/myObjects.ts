const Profile = {
  name: "Bassu",
  username: 'bassujk',
  bio: "Lets explore the world!",
  isActive: true
}

function updateProfile({name: string, isActive: boolean}) {

}

updateProfile({name: "Basavaraj", isActive: false});


type User = {
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(user: User) {
  return  {name: "", email: "", isActive: false}
};

createUser({name: "", email: "", isActive: false});


type User1 = {
  readonly _id: string;
  name: string;
  credCardDetail?: string;
}

let myUser: User1 = {
  _id: "12345",
  name: "Bassu",
}

// myUser._id = "nkk"
function user(u: User1){}


type cardNumber ={
  cardNumber: string;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardDate & cardNumber & {
  cvv: number
};

const cardData = (cData:cardDetails) => {
  cData.cardNumber;
}

export {};