import { Component, OnInit } from '@angular/core';

// declared this in the typings.d.ts file to import successfully
import * as json from './aww.json';

const { children } = json.data;

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  columnDefs = [
    {headerName: 'Id', field: 'id' },
    {headerName: 'Subreddit', field: 'subreddit' },
    {headerName: 'Author', field: 'author' },
    {headerName: 'Upvotes', field: 'ups' },
    {headerName: 'Thumbnail', field: 'thumbnail' },
    {headerName: 'Url', field: 'url' },
  ];

  rowData = children.map((c) => ({
    id: c.data.id,
    author: c.data.author,
    subreddit: c.data.subreddit,
    ups: c.data.ups,
    thumbnail: c.data.thumbnail,
    url: c.data.url,
  }));

  constructor() { }

  ngOnInit() {
  }

}
