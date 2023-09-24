import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ResponseModel } from 'src/auth/jwtService';
import { AjaxService } from 'src/provider/ajax.service';
import { Dashboard } from 'src/provider/constants';
import { iNavigation } from 'src/provider/iNavigation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading : boolean = false;

  constructor(private fb: FormBuilder,
              private http:AjaxService,
              private nav: iNavigation){}

  ngOnInit(): void {
    this.initForm()
  }

  login(){
    this.isLoading = true;
    let username = this.loginForm.get("username")?.value;
    if(username.indexOf("@") !== -1)
      this.loginForm.get("email")?.setValue(username);
    else
      this.loginForm.get("mobile")?.setValue(username);
    
    let value = this.loginForm.value;
    this.http.post("login/authenticateLogin", value).then((res:ResponseModel) => {
      if(res.ResponseBody){
        this.nav.navigate(Dashboard, null);
        this.isLoading = false;
      }
    }).catch(e=>{
      alert(e.message);
      this.isLoading = false;
    })
    console.log(value);

  }

  initForm(){
    this.loginForm = this.fb.group({
      email: new FormControl(""),
      mobile: new FormControl(""),
      username: new FormControl(""),
      password: new FormControl("")
    })
  }
}


