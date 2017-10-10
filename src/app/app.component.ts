import { Component } from '@angular/core';
import { Http, HttpModule } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users;
  container;
  values = {
    'users': [],
    'state': true
  };
  title = 'app';
  search: string;
  query: any;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data.json();
      this.container = data.json();
      console.log(this.users);
    });
  }

  searchUser() {

    console.log(this.search);
    this.values.users = [];
    for(let i in this.container){
      if(this.container[i].name.indexOf(this.search) > -1)
        this.values.users.push(this.container[i]);
    }
    this.users = this.values.users;
  }
}

