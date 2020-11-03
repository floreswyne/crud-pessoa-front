import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Person } from '../interfaces/person/person';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() person: Person;
  @Input() state: string;

  public selectedPerson: Person;
  public title: string;
  public checkoutForm: any;

  constructor()
  {
    this.selectedPerson = this.person;
    this.title = this.state;
    console.log(this.state, this.person);
  }

  clickOverlay()
  {
    console.log("Opa");
  }

  ngOnInit(): void {
  }

}
