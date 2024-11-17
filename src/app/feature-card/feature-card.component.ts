import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  lambda(){
    console.log("lambda")
  }
  scrHeight:any;
  scrWidth:any;
  
  toggleView(){
    if(document.getElementById('mainGenesisCard')!.style.height!="1500px"){
      console.log("fired")
      document.getElementById('mainGenesisCard')!.style.height="1500px";
      document.getElementById('genesisOpenButton')!.style.position="absolute";
      document.getElementById('genesisOpenButton')!.style.transform="rotate(180deg)";
      document.getElementById('genesisOpenButton')!.style.bottom="20px";
    } else {
      
      document.getElementById('mainGenesisCard')!.style.height="500px";
      document.getElementById('genesisOpenButton')!.style.position="absolute";
      document.getElementById('genesisOpenButton')!.style.transform="rotate(360deg)";
      document.getElementById('genesisOpenButton')!.style.bottom="20px";
    }
  }
  toggleViewMobile(){
    if(document.getElementById('mainGenesisCard')!.style.height!="2200px"){
      console.log("fired")
      document.getElementById('mainGenesisCard')!.style.height="2200px";
      document.getElementById('genesisOpenSmallButton')!.style.position="relative";
      document.getElementById('genesisOpenSmallButton')!.style.transform="rotate(180deg)";
    } else {
      
      document.getElementById('mainGenesisCard')!.style.height="500px";
      document.getElementById('genesisOpenSmallButton')!.style.position="relative";
      document.getElementById('genesisOpenSmallButton')!.style.transform="rotate(360deg)";
    }
  }
}
