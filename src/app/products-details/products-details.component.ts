import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { productData } from '../products';
import { Product } from '../products';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})

export class ProductsDetailsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'image', 'description', 'options'];
  dataSource = new MatTableDataSource(productData);
  dataSource2 = productData;

  productId = 0;
  product: any = {};

  constructor( 
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;

    this.product = productData[this.productId - 1];
  }

}
