import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { untilDestroyed } from '@app/@core';
import { CountryService } from '@core/services/country.service';
import { FoodService } from '@core/services/food.service';
import { DuckFeedService } from '@core/services/duck-feed.service';

import { ApiResponseModel } from '@app/@core/models/api-response.model';
import { DuckFeedModel } from '@app/@core/models/duck-feed.model';
import { CountryModel } from '@core/models/country.model';
import { FoodTypeModel } from '@core/models/food-type.model';

@Component({
  selector: 'app-duck-feed-form',
  templateUrl: './duck-feed-form.component.html',
  styleUrls: ['./duck-feed-form.component.scss'],
})
export class DuckFeedFormComponent implements OnInit, OnDestroy {
  duckFeedForm: FormGroup;
  duckFeed: DuckFeedModel;
  countries: CountryModel[];
  foodTypes: FoodTypeModel[];

  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private foodService: FoodService,
    private duckFeedService: DuckFeedService,
    private router: Router
  ) {
    this.createDuckFeedForm();
  }

  get foodTypeId() {
    return this.duckFeedForm.controls.foodTypeId;
  }

  get foodDescription() {
    return this.duckFeedForm.controls.foodDescription;
  }

  get foodQtyGms() {
    return this.duckFeedForm.controls.foodQtyGms;
  }

  get noOfDucks() {
    return this.duckFeedForm.controls.noOfDucks;
  }

  get countryId() {
    return this.duckFeedForm.controls.countryId;
  }

  get feedTime() {
    return this.duckFeedForm.controls.feedTime;
  }

  get feedDate() {
    return this.duckFeedForm.controls.feedDate;
  }

  get parkLocation() {
    return this.duckFeedForm.controls.parkLocation;
  }

  get isRepetitive() {
    return this.duckFeedForm.controls.isRepetitive;
  }

  get participantName() {
    return this.duckFeedForm.controls.participantName;
  }

  get participantEmail() {
    return this.duckFeedForm.controls.participantEmail;
  }

  ngOnInit() {
    this.resetDuckFeedForm();
    this.getAllCountries();
    this.getAllFoodTypes();
  }

  ngOnDestroy() {}

  submitDuckFeed() {
    if (this.duckFeedForm.valid) {
      this.transformFormToModel(this.duckFeedForm.value);
      this.createDuckFeed(this.duckFeed);
    }
  }

  private getAllCountries() {
    this.countryService
      .getAllCountries()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this.countries = res.items as CountryModel[];
        },
        (err) => {}
      );
  }

  private getAllFoodTypes() {
    this.foodService
      .getAllFoodTypes()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this.foodTypes = res.items as FoodTypeModel[];
        },
        (err) => {}
      );
  }

  private createDuckFeed(duckFeed: DuckFeedModel) {
    this.duckFeedService
      .createDuckFeed(duckFeed)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          if (res.success) {
            this.showThankYouScreen();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  private createDuckFeedForm() {
    this.duckFeedForm = this.formBuilder.group({
      foodTypeId: ['', Validators.required],
      foodDescription: ['', Validators.required],
      foodQtyGms: ['', [Validators.required, Validators.min(1)]],
      noOfDucks: ['', [Validators.required, Validators.min(1)]],
      countryId: ['', Validators.required],
      feedTime: ['', Validators.required],
      feedDate: new FormControl(this.getCurrentDate()),
      parkLocation: ['', Validators.required],
      isRepetitive: new FormControl(false),
      participantName: new FormControl(''),
      participantEmail: ['', Validators.email],
    });
  }

  private resetDuckFeedForm() {
    this.duckFeedForm.reset();
  }

  private getCurrentDate() {
    const todaysDate = new Date();
    return `${todaysDate.getFullYear()}-${todaysDate.getMonth()}-${todaysDate.getDate()}`;
  }

  private transformFormToModel(value: any) {
    this.duckFeed = value;
    if (this.duckFeed.feedDate == null) {
      this.duckFeed.feedDate = this.getCurrentDate();
    }
    if (this.duckFeed.isRepetitive == null) {
      this.duckFeed.isRepetitive = false;
    }
  }

  private showThankYouScreen() {
    this.router.navigate(['/thank-you']);
  }
}
