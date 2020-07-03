import { Component,Input } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomeComponent{
  id:number;
  num = 5;
  name = '小新';
  address = {
    province: '福建',
    city: '厦门'
  };
  arr = ["福州","厦门","龙岩","泉州","漳州"];
  myVal = '';
  iclick() {
    console.log(this);
  }
  callPhone(e){
    console.log(e);
  }
  callFax(e){
    console.log(e);
  }
  toLogin(){
    this.router.navigate(['/login']);
    this.data.name = this.name;
    this.data.num = this.num;
    this.service.emit(this.data);
  }

  // http请求
  constructor(private http: HttpClient,private router: Router,private service: Service,private routerinfo:ActivatedRoute) {}
  getUser() {
    let api: any = '/geo/';

    this.http.get(api).subscribe(res => {
      console.log(res);
      this.address = res['address'];
    });
  }

  // @Input() value: any;

  data: any;
  subject: any;
  ngOnInit() {
    //可以在这里做初始数据渲染
    // console.log('ngOnInit');
    // 父组件订阅 【subject$】，获取到子组件传递的值
    this.subject = this.service.subject$.subscribe(value => {
        this.data = value;
    });
    //获取路由传递的参数
    this.id =this.routerinfo.snapshot.params["id"];
    console.log(this.data);
    console.log(this.id);
  }
  ngOnChanges(changes) {
    console.log('ngOnChanges');
  }
  ngOnDestroy() {
      // 销毁订阅避免内存溢出
      this.subject.unsubscribe();
  }
}
