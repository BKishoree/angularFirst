import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
//  housingLocationId = 0;
housingService = inject(HousingService);
housingLocation: HousingLocation | undefined;
applyForm: FormGroup = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
})

 constructor(){
  //this.housingLocationId = Number(this.route.snapshot.params['id'])
  const housingLocationId = Number(this.route.snapshot.params['id'])
  this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
 }

 submitForm():void{
  this.housingService.submitForm(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  )
 }
}
