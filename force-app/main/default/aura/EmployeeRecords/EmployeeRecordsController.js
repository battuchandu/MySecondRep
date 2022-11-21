({
	init : function(component, event, helper) {
        
        component.set('v.columns', [
         
            {label: 'Wissen Employee ID',  fieldName: 'Wissen_Employee_ID__c', type: 'text'},
            {label: 'Full Name',       fieldName: 'Full_Name__c', type: 'text'},
          //{label: ' First Name',  fieldName: 'EmployeeFirstName', type: 'text'},
          //{label: ' Last Name',   fieldName: 'EmployeeLastName', type: 'text'},
            {label: 'Working Email', 	fieldName: 'Working_Email__c', type: 'text'},
            {label: 'Date of Joining', 	fieldName: 'Date_Of_Joining__c', type: 'date-local', cellAttributes: { iconName: 'utility:event', iconAlternativeText: 'Close Date'  }},            
            
           
        ]);
        
         var action = component.get("c.getEmployeeRecords"); //Calling Apex class controller 'getAccountRecord' method

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