export class Sitter {
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

  private calendar?: any;
}