({
            newPopup : function(component, event, helper){
            var cmpTarget = component.find('Modalbox1');
            var cmpBack = component.find('Modalbackdrop');
            $A.util.addClass(cmpTarget, 'slds-fade-in-open');
            $A.util.addClass(cmpBack, 'slds-backdrop--open');
            
            component.set('v.mycolumns', [
            {label: 'Employee ID', fieldName: 'Wissen_Employee_ID__c', type: 'text'},
            {label: 'Full Name', fieldName: 'Full_Name__c', type: 'text'},
            {label: 'WorkingEmail', fieldName: 'Working_Email__c', type: 'text'}
            ]);
            
            var action = component.get('c.cont');
            action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
            component.set('v.mydata',response.getReturnValue());
            }
            else if (state === "ERROR"){
            var errors = response.getError();
            if(errors){
            if(errors[0] && error[0].message){
            console.log('Error Message: ' + errors[0].message);
            }
            }
            else{
            console.log('Unknown Error');
            }
            }
            });
            $A.enqueueAction(action);
            },
            
            closeNewModal : function(component, event, helper){
            component.set("v.accForm",{'LastName':''});
            var navigateEvent = $A.get("e.force:navigateToComponent");
            navigateEvent.setParams({componentDef:"c:GetEmployeesComponent"});
            navigateEvent.fire();
            var cmpTarget = component.find('Modalbox1');
            var cmpBack = component.find('Modalbackdrop');
            $A.util.removeClass(cmpBack,'slds-backdrop--open');
            $A.util.removeClass(cmpTarget, 'slds-fade-in-open');
            },
            
            handleRowAction : function(component, event, helper){
            var selRows = event.getParam('selectedRows');
            var rowsIds = [];
            for (var i = 0; i < selRows.length; i++){
            rowsIds.push(selRows[i].Id);
            }
            component.set("v.selIds",rowsIds);
            },
            
            sendMail : function(component, event, helper){
            var selectedrowsid = component.get('v.selIds');
            console.log('selectedrowsid-->>> ' + JSON.stringify(selectedrowsid));
            
            var action = component.get("c.send");
            action.setParams({ 'eid': selectedrowsid });
            action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
            // console.log('Result from server-->>> ' + response.getReturnValue());
            if(selectedrowsid != ''){
            alert('Email Sent Successfully');
            }
            else{
            alert('Enter Recipients');
            }
            component.set('v.selectedRows', '');
            }
            });
            $A.enqueueAction(action);
            },

})