({
	init : function(component, event, helper) {
		component.set('v.columns', [
         
            {label: 'Wissen Employee ID',  fieldName: 'WissenEmployeeID', type: 'text'},
            {label: 'Full Name',       fieldName: 'FullName', type: 'text'},
            {label: 'Certification Name', 	fieldName: 'Certicationname', type: 'text',iconName: 'standard:opportunity'},
            {label: 'Expiry Date',  fieldName: 'ExpiryDate'},
   
        ]);
        
         var action = component.get("c.getCertificationRecords"); //Calling Apex class controller 'getAccountRecord' method

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