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

  constructor(private fb: FormBuilder,
              private http:AjaxService,
              private nav: iNavigation){}

  ngOnInit(): void {
    this.initForm()
  }

  login(){
    let username = this.loginForm.get("username")?.value;
    if(username.indexOf("@") !== -1)
      this.loginForm.get("email")?.setValue(username);
    else
      this.loginForm.get("mobile")?.setValue(username);
    
    let value = this.loginForm.value;
    this.http.post("login/authenticateLogin", value).then((res:ResponseModel) => {
      if(res.ResponseBody)
        this.nav.navigate(Dashboard, null);
    }).catch(e=>{
      alert(e.message);
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


