import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IDuckFeed } from '../IDuckFeed';

@Component({
  selector: 'app-duck-feed-form',
  templateUrl: './duck-feed-form.component.html',
  styleUrls: ['./duck-feed-form.component.scss'],
})
export class DuckFeedFormComponent implements OnInit {
  duckFeedForm: FormGroup;
  duckFeed: IDuckFeed;

  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit() {}

  onSubmit() {}

  createDuckFeedForm() {
    this.duckFeedForm = this.formBuilder.group({
      foodTypeId: [0, Validators.required],
      foodDescription: ['', Validators.required],
      foodQtyGms: ['', [Validators.required, Validators.min(1)]],
      noOfDucks: ['', [Validators.required, Validators.min(1)]],
      countryId: ['', Validators.required],
      feedTime: ['', Validators.required],
      feedDate: ['', Validators.required],
      parkLocation: ['', Validators.required],
      isRepetitive: [false],
      participantName: [''],
      participantEmail: ['', Validators.email],
    });
  }
}
