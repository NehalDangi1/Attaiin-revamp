import { AfterViewInit, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls:['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit, AfterViewInit {
  title = 'dashboard';
  dashboardData:any;
  continueWatchingData:any;
  recentWatchedTopics:any;
  public loading = false;

  dashBoardSectionOneIndex =0;

  dashBoardSectionOne:any[]=[
    {
      title:'overall achievement',
      description:'98%',
      icon:'section1_card1_Icon.png',
      footer:{
        icon:'section1_cardFooterIcon.png',
        footerPercentage:'5.5%',
        text:'Up from past week'
      }
    },
    {
      title:'modules completion',
      description:'60',
      icon:'section1_card2_Icon.png',
      footer:{
        icon:'section1_cardFooterIcon.png',
        footerPercentage:'1.3%',
        text:'Up from past week'
      }
    },
    {
      title:'test completion',
      description:'88',
      icon:'section1_card3_Icon.png',
      footer:{
        icon:'section1_cardFooterIcon.png',
        footerPercentage:'1.3%',
        text:'Up from past week'
      }
    }
  ];
  dashBoardSectionTwo:any[]=[
    {
      title:'english',
      icon:'section2_card1_Icon.png',
      noOfModule:'4/20',
      moduleText:'modules',
      modulePercentage:'95'
    },
    {
      title:'economics',
      icon:'section2_card2_Icon.png',
      noOfModule:'4/20',
      moduleText:'modules',
      modulePercentage:'45'
    },
    {
      title:'mathematics',
      icon:'section2_card3_Icon.png',
      noOfModule:'4/20',
      moduleText:'modules',
      modulePercentage:'95'
    },
    {
      title:'english',
      icon:'section2_card1_Icon.png',
      noOfModule:'4/20',
      moduleText:'modules',
      modulePercentage:'95'
    },
    {
      title:'economics',
      icon:'section2_card2_Icon.png',
      noOfModule:'4/20',
      moduleText:'modules',
      modulePercentage:'45'
    },
    {
      title:'mathematics',
      icon:'section2_card3_Icon.png',
      noOfModule:'4/20',
      moduleText:'modules',
      modulePercentage:'95'
    }
  ];

  dashBoardSectionFour:any[] = [
    {
      title:'basic user interface design for beginner',
      image:'section4_cardIcon.png',
      modulePercentage:'40',
      noOfModule:'11/22',
      time:{
        icon:'section4_card_time_icon.png',
        timestamp:'02:30hr - tue, aug 26'
      }
    },
    {
      title:'basic user interface design for beginner',
      image:'section4_cardIcon.png',
      modulePercentage:'40',
      noOfModule:'11/22',
      time:{
        icon:'section4_card_time_icon.png',
        timestamp:'02:30hr - tue, aug 26'
      }
    },
    {
      title:'basic user interface design for beginner',
      image:'section4_cardIcon.png',
      modulePercentage:'40',
      noOfModule:'11/22',
      time:{
        icon:'section4_card_time_icon.png',
        timestamp:'02:30hr - tue, aug 26'
      }
    }
  ];



  constructor(
    private api: ApiService,
    private toster: ToastrService
  ){}

  ngOnInit(): void {
    this.loading = true;
    this.api.getDashBoardData().subscribe({
        next: (response:any)=>{

          console.log('this.dashboardData..', response);
          this.dashboardData = response.result;
          this.getContinueWatchingData(this.dashboardData?.subjectPercentage,this.dashboardData?.subjectBoardContent);
          this.recentWatchedTopics = this.dashboardData.lastTopicActivites;
          console.log('...continueWatchingData..', this.continueWatchingData);
          this.loading = false;

        },
        error: (error):any=>{
          this.toster.error("An error occurred. Please try again later.");
          this.loading = false;
        }
    });
  }

  onClickDashBoardSectionOne(){
    // this.dashBoardSectionOneIndex = index;
  }

  ngAfterViewInit(): void {
    register();
  }

  getContinueWatchingData(subjectPercentage:any, subjectBoardContent:any){
    if (Array.isArray(subjectPercentage) && Array.isArray(subjectBoardContent) && subjectPercentage.length > 0 && subjectBoardContent.length > 0) {
      this.continueWatchingData = subjectPercentage.map(element => ({
        ...element,
        data: subjectBoardContent.find(obj => obj.subjectId === element.subjectId)
      }));
      // Further code using optimizedSubjectPercentage
    } else {
      console.error("One or both arrays are undefined or empty.");
    }
  }
  

}
