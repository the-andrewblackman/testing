import { PuppyServiceService } from './../../services/puppy-service.service';
import { Component, OnInit } from '@angular/core';
import { DogTable } from 'src/app/models/DogTable';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private PuppyServiceService:PuppyServiceService) { }

  ngOnInit(): void {
    this.findDogByBreedName("terrier")
  }

  findDogByBreedNameInput:DogTable[] = []

  public findDogByBreedName(breedname:String) {
    // findDogByBreedName from the service layer, passing in breedname
    this.PuppyServiceService.findDogByBreedName(breedname).subscribe(
      (data) => {
        // sends all dogs to findAllDogAPIInput variable
        this.findDogByBreedNameInput = data;
        console.log(this.findDogByBreedNameInput)
      },
      () => {
        console.log("findDogByBreedName didn't work.")
      }
    )
  }

}
