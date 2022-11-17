import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    City: new FormControl(),
    Street: new FormControl(),
    Number: new FormControl(),
    Zipcode: new FormControl(),
    Phone: new FormControl(),
  });

  constructor(private _registerService: RegisterService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._registerService.create({
      email: registerForm.get('email')?.value,
      username: registerForm.get('username')?.value,
      password: registerForm.get('password')?.value,
      name: {
        firstName:registerForm.get('firstname')?.value,
        lastName: registerForm.get('lastname')?.value,
      },
      address: {
        city: registerForm.get('City')?.value,
        street: registerForm.get('Street')?.value,
        number: registerForm.get('Number')?.value,
        zipcode: registerForm.get('Zipcode')?.value,
        phone: registerForm.get('Phone')?.value,
      }
    }).subscribe();
  }
}
