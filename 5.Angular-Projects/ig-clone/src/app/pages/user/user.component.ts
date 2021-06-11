import { Component, OnInit } from '@angular/core';
import { FetchUserService } from '../../services/fetch-user.service';
import { User } from 'src/app/shared/class/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private fetchUserService: FetchUserService) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.fetchUserService.getUserById(id).subscribe(
      user => this.user = user
    )

  }
}