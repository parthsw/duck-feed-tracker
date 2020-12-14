import { DuckFeedModel } from '@app/@core/models/duck-feed.model';
import { DuckFeedService } from '@core/services/duck-feed.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { untilDestroyed } from '@app/@core';
import { ApiResponseModel } from '@app/@core/models/api-response.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-duck-feed-pattern',
  templateUrl: './duck-feed-pattern.component.html',
  styleUrls: ['./duck-feed-pattern.component.scss'],
})
export class DuckFeedPatternComponent implements OnInit, OnDestroy {
  duckFeeds: DuckFeedModel[];
  duckFeedSource: MatTableDataSource<DuckFeedModel>;

  @ViewChild(MatPaginator) duckFeedPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) duckFeedSort: MatSort;

  displayedColumns: string[] = [
    'duckFeedId',
    'countryName',
    'parkLocation',
    'foodType',
    'foodDescription',
    'foodQtyGms',
    'noOfDucks',
    'feedDate',
    'feedTime',
  ];

  constructor(private duckFeedService: DuckFeedService) {}

  ngOnInit() {
    this.getDuckFeeds();
  }

  ngOnDestroy() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.duckFeedSource.filter = filterValue.trim().toLowerCase();

    if (this.duckFeedSource.paginator) {
      this.duckFeedSource.paginator.firstPage();
    }
  }

  private getDuckFeeds() {
    this.duckFeedService
      .getDuckFeeds()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: ApiResponseModel) => {
          this.duckFeeds = res.items as DuckFeedModel[];
          this.initializeDuckFeedsGrid();
        },
        (err) => {}
      );
  }

  private initializeDuckFeedsGrid() {
    this.duckFeedSource = new MatTableDataSource<DuckFeedModel>(this.duckFeeds);
    this.duckFeedSource.paginator = this.duckFeedPaginator;
    this.duckFeedSource.sort = this.duckFeedSort;
  }
}
