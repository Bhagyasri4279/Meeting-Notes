import { Component, OnInit } from '@angular/core';

var q = new Date();
var m = q.getMonth()+1;
var d = q.getDay();
var y = q.getFullYear();

var date = new Date(d,m,y);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  MeeetingList = [
    { 
      'host': 'Kunal',
      'title': 'ABC Sprint1 Demo',
      'date': '12-12-2018' 
    },
    {
      'host': 'Kalpesh',
      'title': 'ABC Sprint2 Demo',
      'date': '22-12-2018' 
  },
  {
    'host': 'Rahul',
    'title': 'ABC Sprint3 Demo',
     'date': '31-12-2018' 
  },
  {
    'host': 'Kunal',
    'title': 'ABC Sprint1 Demo1',
    'date': '02-01-2019' 
  },
  { 
    'host': 'Soni',
    'title': 'ABC Sprint1 Demo2',
    'date': '12-01-2019' 
  },
  {
    'host': 'Kalpesh',
    'title': 'ABC Sprint2 Scrum',
    'date': '22-01-2019' 
},
{
  'host': 'Kunal',
  'title': 'ABC Sprint2 Demo1',
  'date': '02-02-2019' 
},
{
  'host': 'Soni',
  'title': 'ABC Sprint2 Demo2',
  'date': '12-02-2019' 
},
{
  'host': 'Kunal',
  'title': 'ABC Sprint2 Demo1',
  'date': '22-02-2019' 
},
{
  'host': 'Soni',
  'title': 'ABC Sprint2 Demo2',
  'date': '31-02-2019' 
},
]
  displayedColumns: string[] = ['host', 'title', 'date','edit','delete'];
  dataSource=[]
  upcoming=[];

  constructor() { }

  ngOnInit() {
    this.dataSource=this.MeeetingList;
  }

  tabChange(event) {
    console.log(event.index)
    if(date > this.Currentdate ){
           
            this.dataSource=this.upcoming;
    }
    else{

    }
  }
  date=this.date;
  Currentdate=new Date(); 
  
  
}
