({
	doInit : function(component, event, helper) {
        component.set('v.filterOptions',[
            {label:'Name',value:'Name'},
        //  {label:'Certifications can Have',value:'Certifications_Can_Have__c'},
            {label:'Designation',value:'Designation__c'},
            {label:'Employee Status',value:'Emp_status__c'},
            {label:'Experience 1',value:'Prev_Admin_Experience_FM__c'},
            {label:'Experience 2',value:'Prev_Development_Experience_FM__c'},
            {label:'Total IT Experience',value:'TotalITExp__c'},
            {label:'Total Admin Experience',value:'Total_Admin_Experience__c'},
            {label:'Total Developer Experience',value:'Total_Developer_Experience__c'},
           {label:'Company Location',value:'Company_Location__c'},
           {label:'Wissen Domain COE',value:'Wissen_Domain_CEO__c'},
           {label:'Category',value:'Category__c'}

        ]);
		
	},
    handleFilterChange:function(component,event,helper){
        var searchFilter=component.get('v.searchFilter');
        if(searchFilter=='TotalITExp__c' || searchFilter=='Prev_Admin_Experience_FM__c' || searchFilter=='Prev_Development_Experience_FM__c' || 
           searchFilter=='Total_Admin_Experience__c' || searchFilter=='Total_Developer_Experience__c'){
            component.set('v.isExperience',true);
        }else{
            component.set('v.isExperience',false);
        }
        
        switch(searchFilter){
            case 'Name': 	
                component.set('v.labelText','Enter Employee Name');
                component.set('v.helpText','Ex: John');
                break;
            case 'Designation__c': 
                component.set('v.labelText','Enter Employee Designation');
                component.set('v.helpText','Ex: software engineer');
                break;
            case 'Emp_status__c': 
                component.set('v.labelText','Enter Employee Status');
                component.set('v.helpText','Ex: Active');
                break;
            case 'Prev_Admin_Experience_FM__c': 
                component.set('v.helpText','Enter Previous Admin Experience');
                break;
            case 'Prev_Development_Experience_FM__c':
                component.set('v.helpText','Enter Enter Previous Dev Experience');
                break;
            case 'Total_Admin_Experience__c':
                component.set('v.helpText','Enter Total Admin Experience');
                break;
            case 'Total_Developer_Experience__c': 
                component.set('v.helpText','Enter Total Dev Experience');
                break;
            case 'Company_Location__c': 
                component.set('v.labelText','Enter Company Location');
                component.set('v.helpText','Ex: Hyderabad');
                break;
            case 'Wissen_Domain_CEO__c': 
                component.set('v.labelText','Enter Wissen Domain CEO');
                component.set('v.helpText','Ex: Salesforce COE');
                break;
         case 'Category__c':
                component.set('v.labelText','Enter Category');
                component.set('v.helpText','Ex: PR1-A/AMES/B1/SE');
               break;
           case 'TotalITExp__c': component.set('v.helpText','Enter Total IT Experience');
                					break;
        }
        
        
        var searchText1=component.get('v.searchText1');
        var searchText2=component.get('v.searchText2');
        if(searchText1!=null && searchText2!=null ){
            var search1=parseInt(searchText1);
            var search2=parseInt(searchText2);
            if(search1 > search2){
                //alert('ExperienceTo not Less Than ExperienceFrom');
                component.set('v.msg','ExperienceTo not Less Than ExperienceFrom');
            }
            else{
                component.set('v.msg',null);
                
            }
        }
        var filterEvent=component.getEvent('EmployeesFilterEvent');
        filterEvent.setParams({
            'searchFilter':searchFilter,
            'searchText1':searchText1,
            'searchText2':searchText2,
        });
        filterEvent.fire();
    }
})