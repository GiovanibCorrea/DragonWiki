import { Component, OnInit } from '@angular/core';
import { dragon } from 'src/app/shared/models/dragon';
import { DragonService } from 'src/app/shared/services/dragon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.css']
})
export class DragonListComponent implements OnInit {

  dataDragons: dragon[] = [];
  isLoadingResults: boolean = true;
  dragonToDeleteId: any = "";

  constructor(
    public api: DragonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDragonsList();
  }

  getDragonsList() {
    this.api.getDragonsList()
      .subscribe(async (result) => {
        
        result.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });

        this.dataDragons = result;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  viewDragon(id) {
    this.router.navigate(['/dragon/dragon-view/' + id], { skipLocationChange: true });
  }

  editDragon(id) {
    this.router.navigate(['/dragon/dragon-new/' + id], { skipLocationChange: true });
  }

  getDragonToDelete(id) {
    this.dragonToDeleteId = id;
  }

  clearDragonToDelete() {
    this.dragonToDeleteId = "";
  }

  deleteDragon(id) {
    this.api.deleteDragon(id)
      .subscribe(res => {
        this.getDragonsList();
      }, (err) => {
        console.log(err);
      }
      );
  }

}
