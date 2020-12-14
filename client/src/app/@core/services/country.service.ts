import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

// import { GlobalErrorService } from '@core/services/global-error.service';

import { ApiResponseModel } from '@core/models/api-response.model';

@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor(private httpClient: HttpClient) {}

  getAllCountries(): Observable<ApiResponseModel> {
    return this.httpClient.get<ApiResponseModel>(`${this.getCountryBaseUrl()}`);
  }

  private getCountryBaseUrl() {
    return `${environment.serverUrl}country/`;
  }
}
