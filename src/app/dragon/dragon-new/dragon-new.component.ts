import { Component, OnInit, ViewChild } from '@angular/core';
import { DragonService } from 'src/app/shared/services/dragon.service';
import { dragon } from 'src/app/shared/models/dragon';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dragon-new',
  templateUrl: './dragon-new.component.html',
  styleUrls: ['./dragon-new.component.css']
})
export class DragonNewComponent implements OnInit {

  @ViewChild('formDragon') formValues;
  public dragon: dragon = new dragon;
  public typedHistorie: any;
  public editMode: boolean = false;
  dateNow: Date = new Date();

  constructor(
    public api: DragonService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.editMode = true;
      this.getDragon(this.route.snapshot.params['id']);
    } else {
      this.dragon.histories = new Array();
    }
  }

  addTypedHistorie() {
    if (this.typedHistorie) {
      this.dragon.histories.push(
        this.typedHistorie
      )
      this.typedHistorie = null;
    }
  }

  removeHistorie(historie) {
    this.dragon.histories = this.dragon.histories.filter(o => o != historie);
  }

  getDragon(id) {
    this.api.getDragonById(id).subscribe(async (result) => {
      this.dragon = result;
    }, err => {
      console.log(err);
    }
    );
  }

  onFormSubmit() {
    if (!this.route.snapshot.params['id']) { // novo cadastro
      this.dragon.createdAt = this.datepipe.transform(this.dateNow, 'yyyy-MM-ddTHH:mm:ss');
      this.api.addDragon(this.dragon)
        .subscribe(res => {
          this.formValues.resetForm();
          this.router.navigate(['/dragon/dragon-list']);
        }, (err) => {
          console.log(err);
        });
    } else { // alterar cadastro existente
      this.dragon.updatedAt = this.datepipe.transform(this.dateNow, 'yyyy-MM-ddTHH:mm:ss');
      this.api.updateDragon(this.route.snapshot.params['id'], this.dragon)
        .subscribe(res => {
          this.formValues.resetForm();
          this.router.navigate(['/dragon/dragon-list']);
        }, (err) => {
          console.log(err);
        });
    }
  }

}
