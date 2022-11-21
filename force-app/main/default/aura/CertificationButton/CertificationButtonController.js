({
	
       handleError: function(component, event) {
        var errors = event.getParams();
        console.log("response", JSON.stringify(errors));
    },
    cersub: function(component, event) {
        alert('Record is created sucessfully');
    },
        
        
        
         
		
	
    cancelModal: function(component, event, helper) {
         var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:GetCertifications"});
        navigateEvent.fire();
        
       
           }
    
})