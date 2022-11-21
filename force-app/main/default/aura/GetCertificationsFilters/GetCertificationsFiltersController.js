({
	doInit : function(component, event, helper) {
        component.set('v.filterOptions',[
            {label:'Employee Id',value:'Wissen_Employees_ID__c'},
           // {label:'Employee Name',value:'emp_first_name1__c'},
            {label:'Full Name',value:'Full_Name__c'},
            {label:'Certification Email',value:'Certifications_Email__c'},
            {label:'Certification Name',value:'Certification_Name__c'},            
            {label:'Certification Count',value:'Total_Certtifications_Count__c'},
            {label:'Certification Status',value:'Certification_Status__c'}
        ]);
        
		
	},
    navigatetoform1 : function(component, event, helper)
    {
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:LC_CertificationSendListEmail"});
        navigateEvent.fire();
    },
    handleFilterChange:function(component,event,helper){
       
        var searchFilter=component.get('v.searchFilter');
        //alert(searchFilter);
        
       var searchText1=component.get('v.searchText1');
         switch(searchFilter){
            case 'Wissen_Employees_ID__c':
                component.set('v.labelText','Enter Employee Id');
                component.set('v.helpText','Ex: 5432');
                break;
                case 'Full_Name__c':
                component.set('v.labelText','Enter Employee Name');
                component.set('v.helpText','Ex: John');
                break;
            case 'Certifications_Email__c':
                component.set('v.labelText','Enter Certification Mail');
                component.set('v.helpText','Ex: abc@gmail.com');
                break;
            case 'Total_Certtifications_Count__c':
                component.set('v.labelText','Enter No.Of Certifications');
                component.set('v.helpText','Ex: 2');
                break;
            case 'certification_Names_del__c':
                component.set('v.labelText','Select Certification Name');
                break;
            case 'Certification_Status__c':
                component.set('v.labelText','Select Certification Status');
                break;
                
        }
        
        /*if(searchFilter=='Certification_Name__c'){
            //component.set('v.searchText1','');
            component.set('v.isPickList',false);
            component.set('v.isText',false);
            component.set('v.isCerPicklist',true);
            
            component.set('v.filterOptions2',[
            		{label:'Admin 201',value:'Admin 201'},
            		{label:'Advance Administrator',value:'Advance Administrator'},
            		{label:'App Builder',value:'App Builder'},
            		{label:'CPQ Specialist',value:'CPQ Specialist'},            
            		{label:'Platform Developer I',value:'Platform Developer I'},
            		{label:'Platform Developer II',value:'Platform Developer II'},
                	{label:'Sales Cloud Consultant',value:'Sales Cloud Consultant'},
                	{label:'Data Architect & Management',value:'Data Architect & Management'},
                	{label:'FSL',value:'FSL'},
               		{label:'Identity Access Management',value:'Identity Access Management'},
                	{label:'Integration Architecture',value:'Integration Architecture'},
                	{label:'MC Administrator',value:'MC Administrator'},
                	{label:'Omni Studio Consultant',value:'Omni Studio Consultant'},
                	{label:'Omni Studio Developer',value:'Omni Studio Developer'},
                	{label:'Pardot Consultant',value:'Pardot Consultant'},
                	{label:'Service Cloud Consultant',value:'Service Cloud Consultant'},
                	{label:'Sharing and Visibility',value:'Sharing and Visibility'},
                	{label:'Velocity',value:'Velocity'},
                	{label:'Java Script Developer I',value:'Java Script Developer I'},
                	{label:'MC Email Specialist',value:'MC Email Specialist'},
                	{label:'Other Certification',value:'Other Certification'}
                ]);
        }else if(searchFilter=='Certification_Status__c'){
            component.set('v.isCerPicklist',false);            
            component.set('v.isPickList',true);
            component.set('v.isText',false);
            component.set('v.filterOptions2',[
            		{label:'Active',value:'Active'},
            		{label:'Expired',value:'Expired'}            		
       			 ]);
        }else{
            component.set('v.isCerPicklist',false);
            component.set('v.isPickList',false);
            component.set('v.isText',true);
        }*/
        if(searchFilter=='Certification_Name__c' || searchFilter=='Certficatin_staus__c'){
            //alert('from both'+searchFilter);
            //alert('pick:'+component.get('v.isPickList'));
            //alert('cerPick'+component.get('v.isCerPicklist'));
           if(searchFilter=='certification_Names_del__c'){ 
               // alert('from cname'+searchFilter);
               component.set('v.isPickList',true);
                component.set('v.isCerPicklist',true);
                component.set('v.filterOptions2',[
            		{label:'Admin 201',value:'Admin 201'},
            		{label:'Advance Administrator',value:'Advance Administrator'},
            		{label:'App Builder',value:'App Builder'},
            		{label:'CPQ Specialist',value:'CPQ Specialist'},            
            		{label:'Platform Developer I',value:'Platform Developer I'},
            		{label:'Platform Developer II',value:'Platform Developer II'},
                	{label:'Sales Cloud Consultant',value:'Sales Cloud Consultant'},
                	{label:'Data Architect & Management',value:'Data Architect & Management'},
                	{label:'FSL',value:'FSL'},
               		{label:'Identity Access Management',value:'Identity Access Management'},
                	{label:'Integration Architecture',value:'Integration Architecture'},
                	{label:'MC Administrator',value:'MC Administrator'},
                	{label:'Omni Studio Consultant',value:'Omni Studio Consultant'},
                	{label:'Omni Studio Developer',value:'Omni Studio Developer'},
                	{label:'Pardot Consultant',value:'Pardot Consultant'},
                	{label:'Service Cloud Consultant',value:'Service Cloud Consultant'},
                	{label:'Sharing and Visibility',value:'Sharing and Visibility'},
                	{label:'Velocity',value:'Velocity'},
                	{label:'Java Script Developer I',value:'Java Script Developer I'},
                	{label:'MC Email Specialist',value:'MC Email Specialist'},
                	{label:'Other Certification',value:'Other Certification'}
                ]);
            }else if(searchFilter=='Certficatin_staus__c'){
                alert('from status'+searchFilter);
                //component.set('v.isPickList',true);
                component.set('v.isCerPicklist',true);
                alert(component.get('v.isCerPicklist'));
                component.set('v.filterOptions2',[
            		{label:'Active',value:'Active'},
            		{label:'Expired',value:'Expired'}            		
       			 ]);
            }
        }else{
            component.set('v.isPickList',true);
            
        } 
       
        
        //var searchText2=component.get('v.searchText2');
        var filterEvent=component.getEvent('GetCertificationsFiltersEvent');
        filterEvent.setParams({
            'searchFilter':searchFilter,
            'searchText1':searchText1
        });
        filterEvent.fire();
    },
    handleChange:function(component, event, helper){
        
    },
   /* openModel:function(component, event, helper){
         alert('Are you sure to create new certification');
         
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:CertificationButton"});
        navigateEvent.fire();
   
        
    },*/
   /* handleComponentEvent:function(component, event, helper)
    {
        alert('eventwillfire');
         var closemodel = event.getParam("iscancel"); 
        console.log("sirisha"+closemodel);
        component.set('v.isclosedpopup',closemodel);
       
    },
     closeModel:function(component, event, helper){
         alert('if you want close this popup');
          
         component.set("v.isModalOpen", false);
        
    },*/
})