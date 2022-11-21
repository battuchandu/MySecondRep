({
	myAction : function(component, event, helper) {
		
	},
    createAccount1:function(component, event, helper) {
        
        var name=component.get("v.Alumni1");
         alert('Are you want to create wissen alumin event');
         
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:wissencomp"});
        navigateEvent.fire();
        
    
  }
})