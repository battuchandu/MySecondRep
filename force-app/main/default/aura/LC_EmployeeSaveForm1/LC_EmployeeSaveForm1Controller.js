({
    onClickCheckBox : function(component, event, helper) {
       console.log(event.getSource().get("v.value"))
    var check=component.find("checkBoxId").get("v.value");
        console.log('find',check);
         var state=component.find("sta1").get("v.value");
        console.log('add1',state);
         var distact=component.find("dis2").get("v.value");
        console.log('add1',distact);
        var address1=component.find("add1").get("v.value");
        console.log('add1',address1);
        var land=component.find("lan").get("v.value");
        console.log('add1',land);
        var post=component.find("pos").get("v.value");
        console.log('add1',post);
        var city=component.find("ct1").get("v.value");
        console.log('add1',city);
        
        if(check==true)
        {
           alert('add address1 to address2');
          var adree=component.set("v.state",state);
          var adree=component.set("v.distact",distact);
             var adree=component.set("v.address2",address1);
             var adree=component.set("v.landmark",land);
             var adree=component.set("v.postalcode",post);
            var adree=component.set("v.city",city);
            console.log(adree);
            
        }
        else{
            alert('Removing all details from permanent address');
            var adree=component.set("v.state","");
            var adree=component.set("v.distact","");
            var adree=component.set("v.address2","");
            var adree=component.set("v.landmark","");
            var adree=component.set("v.postalcode","");
            var adree=component.set("v.city","");
                    }
    },
    
    
     /* onPicklistChange : function(component, event, helper)
    {
         var checkBoxV = component.find("picklistField").get("v.check");
       component.set("v.check", checkBoxV);
          var address1 = component.find("add1").get("v.address1");
        var address2 = component.find("add2").get("v.address2");
        component.set(address2);
      if(checkBoxV==true)
      {
          Address_Line2__c=Address_Line1__c;
      }
    }, */
    
	 handleError: function(component, event) {
        var errors = event.getParams();
        console.log("response", JSON.stringify(errors));
    },
     cersub: function(component, event) {
        alert('Record is created sucessfully');
           $A.get('e.force:refreshView').fire();     
    },
    navigateback : function(component, event, helper) {
       var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:GetEmployeesComponent"});
        navigateEvent.fire();
    },
    handleAdditonalInfo : function(component, event, helper) {	                
       // component.set("v.displayAdditional",component.find("addInfo").get("v.checked"));
        //component.set("v.confirmAdditional",false);    
    },
    
   /*handleClick : function(component, event, helper) {
        //c.set("v.toastMessage", "Error");
        //c.set("v.toastIconName", "utility:error");
        //sc.set("v.showError", true);
    },*/ 
    /*navigateback1 : function(component, event, helper) {
        alert('Record Saved');
       var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:GetEmployeesComponent"});
        navigateEvent.fire();
    },*/
    
    
})