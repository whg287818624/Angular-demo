import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class Service {
    data: any = {};
    subject$ = new BehaviorSubject<any>(this.data);

    // service定义方法 --> 子组件调用此方法传递的值，并在父组件通过subscribe去订阅传递的值
    emit(data: any) {
        this.data = data;
        this.subject$.next(this.data);
    }
}
