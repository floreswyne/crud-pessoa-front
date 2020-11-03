import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person/person';
import { PersonService } from '../services/person/person.service';

@Component({
  selector: 'app-people', 
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public people: any = [];
  public selectedPerson: Person;
  public state: string = "";

  constructor(
    private personService: PersonService
  )
  {
    personService
      .getPeople()
      .subscribe(
        (result) => {
          
          for (let id in result)
          {
            let person = result[id];
            this.people.push(person);
          }

        }
      );
    
  }

  selectPerson(person: Person)
  {
    this.state = "detail";
    this.selectedPerson = person;
  }

  ngOnInit(): void {
  }

}
