import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-page2',
  imports: [RouterModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css',
  
})
export class Page2Component implements OnInit {
  title='page';
  id:number|undefined;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router
  ){
    //this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(){
    this.activateRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });
  }

  goMain():void{
    //this.router.navigate(['/']);
    this.router.navigateByUrl('/');
  } 
}
