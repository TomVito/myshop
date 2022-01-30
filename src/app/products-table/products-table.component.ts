import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productData } from '../products';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-products-table',
  styleUrls: ['products-table.component.scss'],
  templateUrl: 'products-table.component.html',
})
export class ProductsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'price', 'image', 'description', 'options'];
  dataSource = new MatTableDataSource(productData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
}