import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "UserManager";
  public users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  public submitAction(addForm: NgForm, type: String): void {
    if (type == "Save") {
      this.setUser(addForm);
    }
    if (type == "Search") {
      this.searchUser(addForm);
    }
    if (type == "Read") {
      this.getUser();
    }
  }

  public getUser(): void {
    this.userService.getUser().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public setUser(addForm: NgForm): void {
    if (addForm.value.firstName == null ||
      addForm.value.lastName == null ||
      addForm.value.gender == null ||
      addForm.value.dateOfBirth == null) {
      this.showAlert();
      addForm.reset();
    } else {
      this.userService.setUser(addForm.value).subscribe(
        (response: User) => {
          console.log(response);
          this.getUser();
          addForm.reset();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      );
    }
  }


  public searchUser(addForm: NgForm): void {
    if (addForm.value.firstName == null &&
      addForm.value.lastName == null &&
      addForm.value.gender == null &&
      addForm.value.dateOfBirth == null) {
      this.showAlert();
      addForm.reset();
    } else {
      this.userService.searchUser(addForm.value).subscribe(
        (response: User[]) => {
          this.users = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      addForm.reset();
    }
  }


  public showAlert(): void {
    alert("Some fields are empty");
  }

}
