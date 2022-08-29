import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/useManagementService.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  userName: string = '';
  password: string = '';
  email: string = '';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signUp(form: FormGroup): void {
    this.userManagementService
      .signUpService(
        form.value.username,
        form.value.password,
        form.value.email
      )
      .subscribe((data: any) => {
        if (data && data['registerMessage']) {
          this.router.navigate(['/home']);
        }
      });
  }
  clearForm(form: FormGroup) {
    form.reset();
  }
}
