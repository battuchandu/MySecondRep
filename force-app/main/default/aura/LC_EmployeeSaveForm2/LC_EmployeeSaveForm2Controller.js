({
    onClickCheckBox : function(component, event, helper) {
        alert('hi');
        var checkBoxV = component.find("checkBoxId").get("v.checked");
        component.set("v.CheckboxValue", checkBoxV);
        var cb = component.get("v.CheckboxValue");
        
        var streetStr=component.get("v.NewEmp.Address_Line1__c");
        
        
        if(cb==true) {
            component.set("v.NewEmp.Address_Line2__c",streetStr);
            
        }
        else{
            component.set("v.NewEmp.Address_Line2__c","");
                    }
    },
    
    SubmitFunction : function(component, event, helper) {
        var newacc = component.get('v.NewEmp');
        var action=component.get('c.createLead');
        action.setParams({'acc':newacc});
        action.setCallback(this,function(response){
            component.set('v.NewAccount',response.getReturnValue()); 
        });
        $A.enqueueAction(action);
    }
})