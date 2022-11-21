({
    handle : function(component, event, helper) {
        alert('search');
        var start=component.get("v.startdate");
        console.log(start);
        var end=component.get("v.enddate");
        console.log(end);
        
        var action = component.get("c.dateFilters");
        action.setParams({
            "startdate":start,
            "endDate":end,
            
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.oppList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
     init : function(component, event, helper) {
         component.set('v.mycolumns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
                {label: 'Date', fieldName: 'Date_Of_Joining__c', type: 'date'}
                
            ]);
        var action = component.get("c.date");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.oppList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
   
})