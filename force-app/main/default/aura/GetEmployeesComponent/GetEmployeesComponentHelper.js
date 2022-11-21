({
	/*getAllEmployessHelper : function(component,helper) {
      alert('helper called');
       var action=component.get('c.getEmployees');
        console.log(action);

        
        action.setCallback(this,(response)=>{
            var state=response.getState();
            if(state==='SUCCESS'){
            	
            	var resultList=response.getReturnValue();
             
            	component.set('v.isFound',true);
            	component.set('v.employeeList',resultList);
        }
        });
        
        $A.enqueueAction(action);		
	},*/
     getAccounts: function(component, page, recordToDisply) {
 
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
 
         component.set("v.employeeList", result.acc);
         component.set("v.page", result.page);
         component.set("v.total", result.total);
         component.set("v.pages", Math.ceil(result.total / recordToDisply));
 
      });
      // enqueue the action 
      $A.enqueueAction(action);
   },
    
/*  handleEmployeeFilterHelper:function(component, event, helper){
        //alert('from employee filter helper');
        var searchFilter=event.getParam('searchFilter');
        var searchText1=event.getParam('searchText1');
        var searchText2=event.getParam('searchText2');
        console.log(searchFilter);
        console.log(searchText1);
        console.log(searchText2);
        var action=component.get('c.getFilteredEmployees');
        action.setParams({
            'searchFilter':searchFilter,
            'searchText1':searchText1,
            'searchText2':searchText2
        });
        action.setCallback(this,(response)=>{
            var state=response.getState();
            //alert(state);
            if(state==='SUCCESS'){
            	var resultList=response.getReturnValue();
            	component.set('v.isFound',true);
            	component.set('v.employeeList',resultList);
        }
            
        });
        $A.enqueueAction(action);
    },*/
    handleEmployeeFilterHelper:function(component, event, helper){
        //alert('emp filter helper');
        var data=event.getParam('filters');
        console.log('emp comp'+JSON.stringify(data));
        var action=component.get('c.fEmployees');
        action.setParams({
            filters:data
        });
        action.setCallback(this,(response)=>{
            var state=response.getState();
           // alert('from helper'+state);
            if(state==='SUCCESS'){
            	var resultList=response.getReturnValue();
            	component.set('v.isFound',true);
            	component.set('v.employeeList',resultList);
        }
            
            
        });
        $A.enqueueAction(action)
    },
    showHandlerHelper:function(component,row){
        //alert('show helper: '+JSON.stringify(row.Id));
        //var empId=JSON.stringify(row.Id);
        component.set('v.EmployeeId',row.Id);
        component.set('v.isShow',true);
        
    },
    editHandlerHelper:function(component,row){
        // alert('edit helper: '+JSON.stringify(row.Id));
       var status=row.Approval_Status__c;
        //alert('status'+status);
       component.set('v.EmployeeId',row.Id);
        component.set('v.isEdit',true);
        
        /*if(status=='SubmitForApproval')
        {
            alert('We cannot edit the record because the record is in approval process ');
        }
        else if(status=='Approved')
        {
        component.set('v.EmployeeId',row.Id);
        component.set('v.isEdit',true);
        }
        else if(status=='Reject')
        {
        alert('We cannot edit the record because the record approval is rejected');
        }
        else
        {
            alert('direct we can not edit the Record first we can submit aprroval process');
        }*/
    },
    deleteHandlerHelper:function(component,row){
          //  alert('from helper');
         var empId=row  
       //  alert('id'+empId);
         var action=component.get('c.delEmployee');
        action.setParams({
            'empdel':empId
        });
        action.setCallback(this,(res)=>{
            var state=res.getState();
            if(state==="SUCCESS"){
            alert('Doyou want delete the record');
        }
        });
        $A.enqueueAction(action);
    },
        
       
    getSelectorsHelper:function(component, event, helper){
       //alert('get seletor function');
        component.set('v.selectors',[
            /*{'label':'Employee Id','value':'Wissen_Employee_ID__c'},
            {'label':'First Name','value':'Name'},
            {'label':'Last Name','value':'Last_Name__c'},
            {'label':'Contact Number','value':'PrimaryContactNumber__c'},
            {'label':'Date Of Joining','value':'Joining_Date__c'},*/
            {'label':'Company Location','value':'Company_Location__c'},
            {'label':'Date Of Joining','value':'Joining_Date__c'},
            {'label':'Designation','value':'Designation__c'},
            {'label':'Employee Status','value':'Emp_Status__c'},
            {'label':'Wissen Domain COE','value':'Wissen_Domain_CEO__c'},
            {'label':'Category','value':'Category__c'},
            {'label':'Experience 1','value':'Prev_Admin_Experience_FM__c'},
            {'label':'Experience 2','value':'Prev_Development_Experience__c'},
            {'label':'Experience 3','value':'Other_Experience__c'},
           // {'label':'TotalDevExp','value':'Total_Developer_Experience__c'},
            {'label':'TotalITExp','value':'TotalITExp__c'}
            
        ]);
    },
     /*submitforapproval:function(component,row)
    {
        alert('from helper');
         var empId=row.Id.toString();
        var action=component.get('c.SubmitForApproval');
        action.setParams({
            localId:empId
        });
        action.setCallback(this,(res)=>{
            var state=res.getState();
            if(state==="SUCCESS"){
            alert('success');
        }
        });
        $A.enqueueAction(action);
      
	}*/
    
})