import { LightningElement, wire } from 'lwc';
import EMP_MC from '@salesforce/messageChannel/empSearchFilterChannel__c';
import { MessageContext,publish } from 'lightning/messageService';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import EMP_OBJ from '@salesforce/schema/Employees__c';
import DESIGNATION from '@salesforce/schema/Employees__c.Designation__c';
import STATUS from '@salesforce/schema/Employees__c.Emp_Status__c';
import LOCATION from '@salesforce/schema/Employees__c.Company_Location__c';
import DOMAIN from '@salesforce/schema/Employees__c.Wissen_Domain_CEO__c';
import CATEGORY from '@salesforce/schema/Employees__c.Category__c';


export default class GetEmployeesFilters extends LightningElement {
    
   // options=[]
   filters={
       name:'',
       designation:'',
       empStatus:'',
       empDomain:'',
       empLocation:'',
       empCategory:''
   };
   @wire(getObjectInfo,{objectApiName:EMP_OBJ})
   objInfo;
   @wire(getPicklistValues,{
       recordTypeId:'$objInfo.data.defaultRecordTypeId',
       fieldApiName:DESIGNATION
   })designations;   
   @wire(getPicklistValues,{
    recordTypeId:'$objInfo.data.defaultRecordTypeId',
    fieldApiName:DOMAIN
    })domains;   
    @wire(getPicklistValues,{
        recordTypeId:'$objInfo.data.defaultRecordTypeId',
        fieldApiName:LOCATION
    })locations;  
    @wire(getPicklistValues,{
        recordTypeId:'$objInfo.data.defaultRecordTypeId',
        fieldApiName:STATUS
    })statuses; 
    @wire(getPicklistValues,{
        recordTypeId:'$objInfo.data.defaultRecordTypeId',
        fieldApiName:CATEGORY
    })categories;      
   
    @wire(MessageContext)
    context;

   handleName(event){
    this.filters={...this.filters,'name':event.target.value};
    this.handleLmsPublish();
   }
   handleDesignation(event){
    this.filters={...this.filters,'designation':event.target.dataset.value};
    this.handleLmsPublish();
   }
   handleStatus(event){
    this.filters={...this.filters,'empStatus':event.target.dataset.value};
    this.handleLmsPublish();
   }
   handleLocation(event){
    this.filters={...this.filters,'empLocation':event.target.dataset.value};
    this.handleLmsPublish();
   }
   handleDomain(event){
    this.filters={...this.filters,'empDomain':event.target.dataset.value};
    this.handleLmsPublish();
   }
   handleCategory(event){
       this.filters={...this.filters,'empCategory':event.target.dataset.value};
       this.handleLmsPublish();
   }

   handleLmsPublish(){
       publish(this.context,EMP_MC,{
           filters:{
               value:this.filters
            }
       })
   }

}