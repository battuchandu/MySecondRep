({
   /* getAllCertificationsHelper:function(component){
    	//alert('helper');
        var action=component.get('c.getCertifications');
        action.setCallback(this,(response)=>{
            var state=response.getState();
            if(state==='SUCCESS'){
            var resultList=response.getReturnValue();
            
            component.set('v.isFound',true);
            component.set('v.certificationsList',resultList);
        }
        });
        
        $A.enqueueAction(action);
    	
	},*/
    getAllCertificationsHelper1:function(component, page, recordToDisply){
          // create a server side action. 
      var action = component.get("c.fetchAccount");
      // set the parameters to method 
      action.setParams({
         "pageNumber": page,
         "recordToDisply": recordToDisply
      });
      // set a call back   
      action.setCallback(this, function(a) {
         // store the response return value (wrapper class insatance)  
         var result = a.getReturnValue();
         console.log('result ---->' + JSON.stringify(result));
         // set the component attributes value with wrapper class properties.   
 
         component.set("v.certificationsList", result.acc);
         component.set("v.page", result.page);
         component.set("v.total", result.total);
         component.set("v.pages", Math.ceil(result.total / recordToDisply));
 
      });
        
          
      // enqueue the action 
      $A.enqueueAction(action);
    },
    deltingCheckboxAccounts : function(component, event, deltIds) {
    //Calling apex method.
        var action = component.get('c.DeleteRecord');
        //passing the all selected record's Id's to apex method.
        action.setParams({
            "DeleteIds": deltIds
        });
        
       //Getting response.
        action.setCallback(this, function(response) {
            var state = response.getState();
            //If state is sucess then refreshing the View.
            if (state === "SUCCESS") {
                console.log('Inside delete'+state);
                //Refresh the View.
                $A.get('e.force:refreshView').fire();
            }
        });
         
        $A.enqueueAction(action);
    },
    
    
  
    handleCertificationFilterHelper: function(component, event){        
        //alert('handleCertificationFilterHelper');    	
    	//alert('from parent'+searchFilter);
    	//alert(searchText1);       
    	var searchFilter=event.getParam('searchFilter');
        var searchText1=event.getParam('searchText1'); 
    	var action=component.get('c.getFilteredCertifications');
        action.setParams({
            'searchFilter':searchFilter,
            'searchText':searchText1
        });
        action.setCallback(this,(response)=>{
            var state=response.getState();
            //alert(state);
            if(state==='SUCCESS'){
            component.set('v.certificationsList',response.getReturnValue());
        }
        });
        $A.enqueueAction(action);
	},
    handleEmpCertFilterHelper:function(component,event){
       
        var searchFilter=event.getParam('searchFilter');
        var searchText1=event.getParam('searchText1'); 
        var action=component.get('c.getEmpFilterCertifications');
        action.setParams({
            'searchFilter':searchFilter,
            'searchText':String(searchText1)
        });
        action.setCallback(this,(response)=>{
            var state=response.getState();
           // alert(state);
           if(state==='SUCCESS'){
            component.set('v.certificationsList',response.getReturnValue());
        }
        });
        $A.enqueueAction(action);
	},
    showHandlerHelper:function(component,row){
        var empId=row.Certification__c;
        component.set('v.EmployeeId',empId);
        component.set('v.isShow',true);
         
    },
    editHandlerHelper:function(component,row){
		//var row=row.Id;
        component.set('v.EmployeeId',row.Id);
        component.set('v.isEdit',true);
        
    },
    deleteHandlerHelper:function(component,row){
        
        //alert("You cann't delete "+JSON.stringify(row.emp_first_name1__c)+" record..");
          var cerId=row  
       //  alert('id'+cerId);
         var action=component.get('c.DeleteRec');
        action.setParams({
            'DeleteIds':cerId
        });
        action.setCallback(this,(res)=>{
            var state=res.getState();
            if(state==="SUCCESS"){
            alert('Doyou want delete the record');
             $A.get('e.force:refreshView').fire();
        }
        });
        $A.enqueueAction(action);
      
	
        
   
        
    },
     sortData: function (component,fieldName,sortDirection) {
        var data = component.get("v.certificationsList");
        var reverse = sortDirection === 'asc' ? 1 : -1;
        data.sort(this.sortBy(fieldName, reverse));         
        component.set("v.certificationsList", data);
        
         //alert('after:'+fieldName+'   '+sortDirection);
         
    },
    sortBy: function(field, reverse, primer) {
        var key = primer
            ? function(x) {
                return primer(x[field]);
              }
            : function(x) {
                  return x[field];
              };

        return function(a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }
})