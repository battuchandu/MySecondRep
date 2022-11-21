({
	save : function(cmp, event, helper) {
		
        var action = cmp.get("c.createAccount");
        
        action.setParams({acc : cmp.get("v.acc")});
        
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            
            if (state === "SUCCESS") {
                
                alert("From server: " + response.getReturnValue());
            }
            
            else if (state === "ERROR") {
                
                var errors = response.getError();
                
                alert(JSON.stringify(errors));
            }
        });

        $A.enqueueAction(action);
	},
   
})