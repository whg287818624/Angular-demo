import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})
export class LoginComponent{
  constructor(private router: Router, private service: Service) {}

  data: any;
  subject: any;
  toHome(){
    //路由传参
    this.router.navigate(['/home',{id:110120}])
  }
  sendMessage(action: string) {
    this.data.tx = action;
    this.data.name = "小明"
    this.service.emit(this.data);
    console.log(this.data)
  }
  ngOnInit(){
    this.subject = this.service.subject$.subscribe(value => {
      this.data = value;
    });
    console.log(this.data)
  }
  ngOnDestroy() {
      // 销毁订阅避免内存溢出
      this.subject.unsubscribe();
  }
}
