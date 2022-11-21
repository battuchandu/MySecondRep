({
    clickLogo : function(component, event, helper) {		        
        alert('logo Clicked');
    },
    doSomething :function(component, event, helper) {		        
        //  alert('logo Clicked');
    },
    handleBlur : function(component, event, helper) {		              
        //var validity = component.find("myinput").get("v.validity"); 
        console.log('hai',event);   
    },
    handleBlur1 : function(component, event, helper) {		              
        //var validity = component.find("myinput").get("v.validity");    
    },
    handlePopup : function(component, event, helper) {		              
        component.set("v.popup",true); 
    },
    handleClick : function(component, event, helper) {		           
        var fnvalidity = component.find("firstname").get("v.validity");  
        var lnvalidity = component.find("lastname").get("v.validity");  
        console.log('attribute',component.get("v.test1"));
         console.log('aura-id',component.find("firstname"));
        console.log('aura-id VALID',component.find("firstname").get("v.validity"));
        if(fnvalidity.valid && lnvalidity.valid ){ //&& component.get("v.emailValid")
      		component.set("v.displayForm",false); 
            console.log('====>>>',component.get("v.deloitteinternal"));
             var action = component.get("c.savePer");
    		 action.setParams({"datae": component.get("v.deloitteinternal")});
            action.setCallback(this, function(a) {
                var state = a.getState();
                if (state === "SUCCESS") {
                    var name = a.getReturnValue();
                    component.set("v.mainpage",name);
                    if(name == 'registration')
                        component.set("v.showpage",false);
                    console.log('name',name);
                    // alert("thanks for submitting");
                }
        	});
    		$A.enqueueAction(action)
        }else{
            if(!fnvalidity.valid){
                var fn = component.find("firstname");
                fn.set('v.validity', {valid:false});
                
            }
            alert('Please make sure all fields are complete11.');

        }
        //component.set("v.displayForm",false);      
    },
    doCheck : function(component, event, helper) {		           
        if(component.get("v.eventOptionVal") == '7'){ //'7' is value for others
            component.set("v.displayOtherField",true);
        }else{
            component.set("v.displayOtherField",false);
        }
        
    },
    doCheck1 : function(component, event, helper) {		           
        if(component.get("v.eventOptionVal1") == '6'){ //'7' is value for others
            component.set("v.displayOtherFieldd",true);
        }else{
            component.set("v.displayOtherFieldd",false);
        }
        
    },
    handleEmailBlur : function(component, event, helper) {		           
        var isValidEmail = true; 
        var emailField = component.find("emailValue"); //document.getelementbyid
        var emailFieldValue = emailField.get("v.value");
        // Store Regular Expression That 99.99% Works. [ http://emailregex.com/] 
        var regExpEmailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;  
        // check if Email field in not blank,
        // and if Email field value is valid then set error message to null, 
        // and remove error CSS class.
        // ELSE if Email field value is invalid then add Error Style Css Class.
        // and set the error Message.  
        // and set isValidEmail boolean flag value to false.
        
        if(!$A.util.isEmpty(emailFieldValue)){   
            if(emailFieldValue.match(regExpEmailformat)){			  
              isValidEmail = true;
                if(emailFieldValue.indexOf("@gmail.com", emailFieldValue.length - "@gmail.com".length) !== -1){
                    //emailField.messageWhenPatternMismatch = 'Valid Domain Email';                        
                    //alert('Valid Domain Email');
                    emailField.set('v.validity', {valid:true, patternMismatch :false});                                
                    component.set("v.emailValid",true);
                }else{ 
				    //emailField.messageWhenPatternMismatch = 'Valid Email but Invalid Domain';                    
                    alert('Valid Email but Invalid Domain');
                    emailField.set('v.validity', {valid:false, patternMismatch :true});                    
                    component.set("v.emailValid",false);
                }
  
            }else{                    
                	emailField.set('v.validity', {valid:false});
                	alert('InValid Email');
                	component.set("v.emailValid",false);
            }
       }        
     // if Email Address is valid then execute code     
       if(isValidEmail){
         // code write here..if Email Address is valid. 
       }
    },
    handleProceed : function(component, event, helper) {		        
        //component.set("v.confirmAdditional",true);        
        //component.set("v.displayAdditional",true);
    },
    handleConfirmYes : function(component, event, helper) {		        
        //component.set("v.confirmAdditional",false);        
        //component.set("v.displayAdditional",true);
    },
    handleConfirmNo : function(component, event, helper) {		        
        //component.set("v.confirmAdditional",false);   //ex = false;
        component.set("v.displayAdditional",false);   // ex1 = ex;
        //component.set("v.displayContinuebtn",true);
        
        //component.set("v.displayForm",false);  
        //component.set("v.displayAdditional",true);
    },
    handleConfirmPopup : function(component, event, helper) {		        
        //component.set("v.confirmAdditional",false);    
    },
    handleAdditonalInfo : function(component, event, helper) {	                
       // component.set("v.displayAdditional",component.find("addInfo").get("v.checked"));
        //component.set("v.confirmAdditional",false);    
    },
})