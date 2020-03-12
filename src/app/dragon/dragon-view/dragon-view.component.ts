import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DragonService } from 'src/app/shared/services/dragon.service';
import { dragon } from 'src/app/shared/models/dragon';

@Component({
  selector: 'app-dragon-view',
  templateUrl: './dragon-view.component.html',
  styleUrls: ['./dragon-view.component.css']
})
export class DragonViewComponent implements OnInit {

  dataDragon: dragon;
  isLoadingResults: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: DragonService
  ) { }

  ngOnInit() {
    this.getDragon(this.route.snapshot.params['id']);
  }

  getDragon(id) {
    this.api.getDragonById(id).subscribe(async (result) => {
      this.dataDragon = result;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    }
    );
  }

  editDragon() {
    this.router.navigate(['/dragon/dragon-new/' + this.route.snapshot.params['id']], { skipLocationChange: true });
  }

}