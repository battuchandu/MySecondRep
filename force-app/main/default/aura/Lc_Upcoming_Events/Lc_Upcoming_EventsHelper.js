({
    fetchevehelper : function(component, event, helper) {
        component.set('v.mycolumns', [
            {label: ' Event Name', fieldName: 'Event__c', type: 'text'},
                {label: 'Event Date', fieldName: 'Event_Date__c'},
                
            ]);
        var action = component.get("c.GetEvent");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.lstEvent", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})