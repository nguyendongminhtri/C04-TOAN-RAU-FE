import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {Category} from '../../../model/Category';
import {success} from 'ng-packagr/lib/utils/log';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form: any = {};
  category: Category;
  error: any = {
    message: "create_error"
  }
  status = 'Please fill in the form to create category'
  success: any = {
    message: "create_success"
  }
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.category = new Category(
      this.form.nameCategory
    );
    this.authService.createCategory(this.category).subscribe(data => {
        if(JSON.stringify(data)==JSON.stringify(this.error)){
          this.status = 'Phai login da!'
        }
        if(JSON.stringify(data)==JSON.stringify(this.success)){
          this.status = 'Create Success!'
        }
    });
  }
}
