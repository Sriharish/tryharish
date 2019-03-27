import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { FeedDataSource, FeedItem } from './feed-datasource';
import { Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: FeedDataSource;
  subscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'content'];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.subscription = this.db.list<FeedItem>('posts').valueChanges().subscribe(f => {
      this.dataSource = new FeedDataSource(this.paginator, this.sort);
      this.dataSource.data = f;
    });
    this.dataSource = new FeedDataSource(this.paginator, this.sort);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
