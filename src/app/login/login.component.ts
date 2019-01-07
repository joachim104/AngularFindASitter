import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  // her har vi dependecies injected vores router klasse
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }


  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['username', [Validators.required, Validators.minLength(5)] ],
        password: ['password', Validators.required] 
      }
    )
  }

  onSubmit(loginForm) {
    
    if (loginForm.valid) {
      // Send request to back-end to validate login.
      this.authService.login().subscribe(result => {
        // Navigate based on a certain condition.
        this.router.navigate(['/portal']); // her kan man bruge router-klassen fordi vi har depencies injected router klassen længere op
      });
    } else {
      // Punish user for not filling out fields.
    }
  }
}
