({
    Send : function(component, event, helper) {
        var email=helper._e('txtEmail').value;
        var Subject=helper._e('txtSubject').value;
        var Message=component.get("v.myMessage");        
        var regExpEmailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        
        if(email==''){
            alert('Email-Id is required');
        }
        else if(Subject==''){
            alert('Subject is required');
        }
        else if(Message==''){
         alert('Message is required');
        }
        else{
            if(!email.match(regExpEmailformat)){
                alert("Invalid Email Id");
            }
            else{
                helper.SendEmail(component);
            }
        }
    },
    
    showSpinner: function(component, event, helper) {        
        component.set("v.Spinner", true); 
    },
    
    hideSpinner : function(component,event,helper){        
        component.set("v.Spinner", false);
    },
    navigateback : function(component, event, helper) {
       var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:GetEmployeesComponent"});
        navigateEvent.fire();
        },
    
 })