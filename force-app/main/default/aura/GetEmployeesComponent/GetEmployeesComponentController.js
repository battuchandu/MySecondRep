({
    updateSelectedText : function(component, event, helper){
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
    
    navigatetoform : function(component, event, helper)
    {
        alert('Are you sure to create new employee record');
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:LC_EmployeeSaveForm1"});
        navigateEvent.fire();
    },
    
    /*navigate1 : function(component, event, helper)
    {
        //alert('Are you sure to create new employee record');
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:LC_SendCelebrationEmail"});
        navigateEvent.fire();
    },*/
    
    
    /*getAllEmployees : function(component, event, helper) {
       
       
        
        var actions=[
            {'label':'Edit','name':'edit'},
            {'label':'Delete','name':'delete'},
            
            {'label':'View','name':'view'}
        ];
        component.set('v.columns',[
            {'label':'Employee Id','fieldName':'Wissen_Employee_ID__c','type':'text'},
            {'label':'Full Name','fieldName':'Full_Name__c','type':'text'},          
            {'label':'Wissen Domain COE','fieldName':'Wissen_Domain_CEO__c','type':'text'},
            {'label':'Designation','fieldName':'Designation__c','type':'text'},
            {'label':'Contact Number','fieldName':'PrimaryContactNumber__c','type':'text'},
            {'label':'Employee Status','fieldName':'Emp_Status__c','type':'text'},*//*
           {'label':'Role','fieldName':'Role__c','type':'text'},            
            {'label':'Date Of Joining','fieldName':'Joining_Date__c','type':'text'},
            {'label':'Company Location','fieldName':'Company_Location__c','type':'text'},
            {'label':'Wissen Experience','fieldName':'WissenInfotech_Experience__c','type':'text'},
            {'label':'Prev Admin Experience','fieldName':'Prev_Admin_Experience_FM__c','type':'text'},
            {'label':'Prev Development Experience','fieldName':'Prev_Development_Experience_FM__c','type':'text'},
            {'label':'Other Experience','fieldName':'Other_Experience__c','type':'text'},
            {'label':'Total IT Experience','fieldName':'TotalITExp__c','type':'text'},
            {'label':'Total Admin Experience','fieldName':'Total_Admin_Experience__c','type':'text'},
            {'label':'Total Developer Experience','fieldName':'Total_Developer_Experience__c','type':'text'},
            {'label':'Category','fieldName':'Category__c','type':'text'},*/
    /* {'type':'action',typeAttributes:{'rowActions':actions}}
        ]);
        
        helper.getAllEmployessHelper(component,helper);
        alert('recordsfetch');
        helper.getSelectorsHelper(component, event, helper);
	},*/
    getAllEmployees: function(component, event, helper) {  
        // this function call on the component load first time     
        // get the page Number if it's not define, take 1 as default
        
        var page = component.get("v.page") || 1;
        // get the select option (drop-down) values.   
        var recordToDisply = component.find("recordSize").get("v.value");
        var actions=[
            {'label':'Edit','name':'edit'},
            {'label':'Delete','name':'delete'},
            {'label':'View','name':'view'},
           //{'label':'submitApproval','name':'submitApproval'}
        ];
        component.set('v.columns', [
            {'label':'Employee Id','fieldName':'Wissen_Employee_ID__c','type':'text'},
            {'label':'Full Name','fieldName':'Full_Name__c','type':'text'},          
            {'label':'Wissen Domain COE','fieldName':'Wissen_Domain_CEO__c','type':'text'},
            {'label':'Designation','fieldName':'Designation__c','type':'text'},
            {'label':'Date of Joining','fieldName':'Date_Of_Joining__c','type':'date'},
            {'label':'Contact Number','fieldName':'PrimaryContactNumber__c','type':'text'},
            {'label':'Employee Status','fieldName':'Emp_Status__c','type':'text'},
            //{'label':'Approved Status','fieldName':'Approval_Status__c','type':'text'},
            {'type':'action',typeAttributes:{'rowActions':actions}}
        ]);
        
        var action = component.get("c.date");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.employeeList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    
        
        helper.getAccounts(component, page, recordToDisply);
        helper.getSelectorsHelper(component, event, helper);
    },
    navigate: function(component, event, helper) {
        // this function call on click on the previous page button  
        var page = component.get("v.page") || 1;
        // get the previous button label  
        var direction = event.getSource().get("v.label");
        // get the select option (drop-down) values.  
        var recordToDisply = component.find("recordSize").get("v.value");
        // set the current page,(using ternary operator.)  
        page = direction === "Previous Page" ? (page - 1) : (page + 1);
        // call the helper function
        helper.getAccounts(component, page, recordToDisply);
        
    },
    
    onSelectChange: function(component, event, helper) {
        // this function call on the select opetion change,     
        var page = 1
        var recordToDisply = component.find("recordSize").get("v.value");
        helper.getAccounts(component, page, recordToDisply);
    },
    
    handleEmployeeFilter:function(component, event, helper){
        //alert('employee filter is fired');
        helper.handleEmployeeFilterHelper(component, event, helper);
    },
    handleRowAction:function(component, event, helper){
        // alert('row action');
        var action=event.getParam('action');
        var row=event.getParam('row');
        // alert(JSON.stringify(row.Id));
        switch(action.name){
            case 'view':
                helper.showHandlerHelper(component,row);
                break;
            case 'edit':
                helper.editHandlerHelper(component,row);
                break;
            case 'delete':
                helper.deleteHandlerHelper(component,row);
                //  alert('controller');
                break;
           // case 'submitApproval':
                // alert('from controller');
                //helper.submitforapproval(component,row);               
                //break;
        }
    },
    handleCloseModal:function(component, event, helper){
        component.set('v.isShow',false);
        component.set('v.isEdit',false);
        //helper.getAllEmployessHelper(component);
        $A.get('e.force:refreshView').fire();
    },
    handleLmsMessage:function(component,message,helper){
        if(message!=null){
            var lmsFilters=message.getParam("filters").value;
            component.set('v.lmsData',lmsFilters);
            helper.handleEmployeeFilterHelper(component);
            console.log('Form Aura : ');
            console.log(typeof(lmsFilters));
            console.log(JSON.stringify(lmsFilters));
        }
    },
    handleMenu:function(component,event,helper) {
        component.set('v.isTest',true);
    },
    handleMenuClose:function(component,event,helper) {
        component.set('v.isTest',false);
    },
    handleSelectors:function(component,event,helper) {
        var actions=[
            {'label':'Edit','name':'edit'},
            {'label':'Delete','name':'delete'},
            {'label':'View','name':'view'},
            //{'label':'submitApproval','name':'submitApproval'}
        ];
        var opList=[
            {'label':'Employee Id','fieldName':'Wissen_Employee_ID__c','type':'text'},
            {'label':'Full Name','fieldName':'Full_Name__c','type':'text'},            
            {'label':'Contact Number','fieldName':'PrimaryContactNumber__c','type':'text'}
        ];
        var selList=component.get('v.selector');
        var checkList=component.get('v.selectors');
        selList.map((item)=>{
            checkList.map((check)=>{
            if(check.value==item){
            opList.push({'label':check.label,'fieldName':check.value,'type':'text'});
            }
        })
        });
            opList.push({'type':'action',typeAttributes:{'rowActions':actions}});
            component.set('v.columns',opList);
            // alert(JSON.stringify(opList));
            //alert(event.getParam('label')+'-------'+event.getParam('value'));
            },
    clearselect:function(component,event,helper) 
	{
    //alert('check');
    component.set("v.selector",[]); 
},  
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
                component.set("v.employeeList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
      
        clearcheckbox:function(component,event,helper)
    {
         var whichOne = event.getSource().getLocalId();
     //  alert(whichOne);
        if(whichOne=='totalitId')
        {
             component.set("v.startdate",[]);
        }
         
    }
        
})