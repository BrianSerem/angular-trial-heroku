import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: {};

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => {this.users = data
      console.log(this.users)
    }, 
    (err) => {

    }, 
    () => {
      console.log('observables completes')
    })
  }
}
