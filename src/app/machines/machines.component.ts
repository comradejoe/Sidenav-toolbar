import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  esn: number;
  serial: any;
  enginemodel:any;
  model:any;
  faultcode:any;
  CD:string;
  Date:any;
  source:string;
  current:number;



}

const ELEMENT_DATA: PeriodicElement[] = [
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS', faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873",esn:65600018,  enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
  {serial: "SP20-27873", esn:65600018, enginemodel: 'ISX15 CM2350 X101', model:'EX200LCSUPERPLUS',faultcode:'EID:100034 DL:None',CD:'Yes',Date:"6/29/2020|06:24",source:'Engine',current:2248},
];


@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['serial', 'esn', 'enginemodel', 'model','faultcode','CD','Date','severity','source','current'];
  
  dataSource = ELEMENT_DATA;

}
