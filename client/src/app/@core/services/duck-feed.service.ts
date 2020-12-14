import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

// import { GlobalErrorService } from '@core/services/global-error.service';

import { ApiResponseModel } from '@core/models/api-response.model';
import { DuckFeedModel } from '@core/models/duck-feed.model';

@Injectable({ providedIn: 'root' })
export class DuckFeedService {
  constructor(private httpClient: HttpClient) {}

  createDuckFeed(duckFeed: DuckFeedModel): Observable<ApiResponseModel> {
    return this.httpClient.post<any>(this.getDuckFeedBaseUrl(), duckFeed);
  }

  getDuckFeeds(): Observable<ApiResponseModel> {
    return this.httpClient.get<ApiResponseModel>(this.getDuckFeedBaseUrl());
  }

  private getDuckFeedBaseUrl() {
    return `${environment.serverUrl}duck/feed`;
  }
}
