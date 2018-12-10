export class Sitter {
  customerId?: string;
  _id?: string;
  username: string;
  password: string;

  firstname: string;
  lastname: string;  
  age: number; // We learn about js dates...
  gender: string; // Female, Male, Other...
  hourlyWage: number;
  address: string;
  zipCode: string;
  city: string;

  // her skal jeg tilføje et array af ratings.

}

export class Rating {
  rating: number; // 1 - 5
  description?: String;
  babyId: String; // the baby who rated the sitter
}