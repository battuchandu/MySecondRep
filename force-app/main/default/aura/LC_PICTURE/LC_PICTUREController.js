({ 
    /*doInit : function(component, event, helper) { 
        var action = component.get("c.getAllEmployees"); 
        action.setCallback(this, function(response){ 
            component.set("v.data", response.getReturnValue()); 
        }); 
     $A.enqueueAction(action); 
    } ,*/
    
    navigatetoform : function(component, event, helper)
    {
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:LC_SendCelebrationEmail"});
        navigateEvent.fire();
    },
    navigatetoform1 : function(component, event, helper)
    {
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:LC_SendCelebrations123"});
        navigateEvent.fire();
    },
    doInit : function(component, event, helper) {
        
        component.set('v.columns', [
         
            {label: 'Wissen Employee ID',  fieldName: 'Wissen_Employee_ID__c', type: 'text'},
            {label: 'Full Name',       fieldName: 'Full_Name__c', type: 'text'},
            //{label: 'Date Of Birth',       fieldName: 'Birth_Date_DD_MM_YYYY__c', type: 'text'},
          //{label: ' First Name',  fieldName: 'EmployeeFirstName', type: 'text'},
          //{label: ' Last Name',   fieldName: 'EmployeeLastName', type: 'text'},
            {label: 'Working Email', 	fieldName: 'Working_Email__c', type: 'text'}
            //{label: 'Date of Joining', 	fieldName: 'Date_Of_Joining__c', type: 'date-local', cellAttributes: { iconName: 'utility:event', iconAlternativeText: 'Close Date'  }},            
            
           
        ]);
        
         var action = component.get("c.getAllEmployees"); //Calling Apex class controller 'getAccountRecord' method

        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS")
                component.set("v.data", response.getReturnValue());
            console.log(response.getReturnValue());// Adding values in Aura attribute variable.   
        });
        $A.enqueueAction(action);
                }

})