export class Sitter {
  customerId?: string;
  _id?: string;
  username: string;
  password: string;

  firstname: string;
  lastname: string;  
  age: number;
  gender: string;
  hourlyWage: number;
  address: string;
  zipCode: string;
  city: string;
  // rating: Rating[];

}

export class Rating {
  rating: number; // 1 - 5
  description?: String;
  babyId: String; // the baby who rated the sitter
}