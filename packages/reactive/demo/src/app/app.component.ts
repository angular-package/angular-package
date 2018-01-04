import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subscribe } from '@angular-package/reactive/decorator/subscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Subscribe<string>(['name'])
@Subscribe<number>(['age'])
export class AppComponent implements OnInit {

  public nameSubscription: Subscription;
  public ageSubscription: Subscription;

  public name: string;
  public name$: Observable<string>;

  public age$: Observable<number>;
  public age_: number;
  set age(value: number) {
    this.age_ = value;
  }
  get age(): number {
    return this.age_;
  }

  ngOnInit() {
    this.nameSubscription = this.name$.subscribe({
      next: (value: string) => {
        console.log(value);
      }
    });

    this.ageSubscription = this.age$.subscribe({
      next: (value: number) => {
        console.log(value);
      }
    });

    this.age = 27;
    this.name = `Brayan`;
  }
}
