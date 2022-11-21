({  
    Registration : function(component, event) {
        var a={sobjectType:'Employees__c',
                Full_Name__c:'',Working_Email__c:''
                };
        component.set("v.Alumni1",a);
        component.set("v.mainpage",'registration');
        component.set("v.showpage",true);
    },
    createAccount1 : function(component, event) {
    var newAcc = component.get("v.Alumni1");
    var action = component.get("c.saveAcc");
    action.setParams({"Accdate": newAcc });
    action.setCallback(this, function(a) {
           var state = a.getState();
            if (state === "SUCCESS") {
                var name = a.getReturnValue();
                component.set("v.mainpage",name);
                if(name == 'registration')
                    component.set("v.showpage",false);
                console.log('name',name);
              alert("thanks for submitting");
            }
        });
    $A.enqueueAction(action)
},
    /*Close: function(component, event) {
        var retValue = component.get('v.newAccount');
        if(window.opener == null){
           href = "https://lightning95-dev-ed.my.salesforce.com/001/o"
        }else{
            window.close();
        }
    }*/
    
  handleBlur : function(component, event, helper) {		              
        //var validity = component.find("myinput").get("v.validity"); 
     
    },
  handleBlur1 : function(component, event, helper) {		              
        //var validity = component.find("myinput").get("v.validity"); 
     
    },
handleBlur2 : function(component, event, helper) {		              
        //var validity = component.find("myinput").get("v.validity"); 
     
    },  
    
})