import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') f: NgForm;
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female'];
  isSubmitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.f.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.f.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.user.username = this.f.value.userData.username;
    this.user.email = this.f.value.userData.email;
    this.user.secretQuestion = this.f.value.secret;
    this.user.questionAnswer = this.f.value.questionAnswer;
    this.user.gender = this.f.value.gender;
    this.isSubmitted = true;

    console.log(this.f);

    this.f.reset();
  }
}
