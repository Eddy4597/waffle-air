import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  json: any;
  items: any;
  sortBy = 1;
  constructor(private membersService: MembersService) { }  
  
  ngOnInit() {
    this.retrieveMembers();
  }

  retrieveMembers() {
    this.membersService.getAll()
        .subscribe((data) => {
            //console.log(JSON.stringify(data));
            this.json = data;
            this.items = this.json.data;
            //console.log(this.items);
          },
          error => {
            console.log(error);
          }
      );
  }

}
