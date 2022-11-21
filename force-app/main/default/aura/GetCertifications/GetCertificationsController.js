({
    getAllCertifications:function(component, event, helper){
       //alert('all is fired');
        // this function call on the component load first time     
      // get the page Number if it's not define, take 1 as default
     
      var page = component.get("v.page") || 1;
      // get the select option (drop-down) values.   
      var recordToDisply = component.find("recordSize").get("v.value");
       var actions=[
           {'label':'Edit','name':'edit'},
            {'label':'Delete','name':'delete'},
            {'label':'View','name':'view'}
        ];
       component.set('v.columns',[
            {'label':'Employee Id','fieldName':'Wissen_Employees_ID__c','type':'text','sortable':true},
            {'label':'Full Name','fieldName':'Full_Name__c','type':'text','sortable':true},
            //{'label':'First Name','fieldName':'emp_first_name1__c','type':'text','sortable':true},
            //{'label':'Last Name','fieldName':'Emp_last_name2__c','type':'text','sortable':true},
            {'label':'Certification Email','fieldName':'Certifications_Email__c','type':'text','sortable':true},
            {'label':'Certification Name','fieldName':'Certification_Name__c','type':'text','sortable':true},
            {'label':'Certification Date','fieldName':'Date_of_Certification__c','type':'text','sortable':true},
            {'label':'Expiry Date','fieldName':'Certification_Expired_Date__c','type':'text','sortable':true},
            {'label':'Status','fieldName':'Certification_Status__c','type':'text','sortable':true},
            {'label':'Certification Count','fieldName':'Total_Certtifications_Count__c','type':'Number','sortable':true},
            {'type':'action',typeAttributes:{'rowActions':actions}}
        ]);
               
          helper.getAllCertificationsHelper1(component, page, recordToDisply);
       
        
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
      helper.getAllCertificationsHelper1(component, page, recordToDisply);
 
   },
 
   onSelectChange: function(component, event, helper) {
      // this function call on the select opetion change,     
      var page = 1
      var recordToDisply = component.find("recordSize").get("v.value");
      helper.getAllCertificationsHelper1(component, page, recordToDisply);
   },
 
   
    
    handleClick : function(component, event, helper){
        //Created var that store the recordIds of selected rows.
        var records = component.get("v.selectedCer");
        //Console log.
        console.log(records);
        //Calling helper to perform delete action.
        helper.deltingCheckboxAccounts(component, event, records);
    },
    
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
                alert(v.selectedRows);
            }
        });
        $A.enqueueAction(action);
    },
        clearCheckbox : function(component, event, helper){
            alert('Are you sure want to uncheck selected recoreds');
              $A.get('e.force:refreshView').fire();
              
        },
    
    
    
   /* updateSelectedText: function (component, event) {
        //Get sleceted Checkbox rows.
        var selectedRows = event.getParam('selectedRows');
        //Store a count in an attribute.
        component.set('v.selectedRowsCount', selectedRows.length);
        //Stored in var to display count in console.
        //You can skip next two lines.
        var slectCount =selectedRows.length;
        console.log('slectCount'+slectCount);
        //Created var to store record id's for selected checkboxes. 
        var setRows = [];
        for ( var i = 0; i < selectedRows.length; i++ ) {
             
            setRows.push(selectedRows[i]);
             
        }
        //Adding slelected recordIds to an attribute.
        component.set("v.selectedCer", setRows);
        console.log('selected data:'+setRows);
 
        //Added this condition to show the button "Delete Leads".
        //If checkbox is selected then only it will show else no.
        if(slectCount>0){
            component.set('v.ButtonShow', true);
        }else{
            component.set('v.ButtonShow', false);
        }
    },*/
 
    // function to handle the Modal Popup window.
    handleConfirmDialog : function(component, event, helper) {
        component.set('v.showDeleteBox', true);
    },
 
    //Function to handle Cancel Popup.
    handleConfirmDialogCancel : function(component, event, helper) {
        console.log('Cancel');
        component.set('v.showDeleteBox', false);
    },
 
	handleCertificationFilter:function(component, event, helper){
       // alert('employee filter is fired');
       var searchFilter=event.getParam('searchFilter');
        var searchText1=event.getParam('searchText1');
        
        if(searchFilter=='Certification_Name__c'){
            var actions=[
           // {'label':'Edit','name':'edit'},
            {'label':'Delete','name':'delete'},
            {'label':'View','name':'view'}
        ];
            component.set('v.columns',[
            {'label':'Employee Id','fieldName':'Wissen_Employee_ID__c','type':'text'},
            {'label':'Full Name','fieldName':'Full_Name__c','type':'text'},
           // {'label':'First Name','fieldName':'Name','type':'text'},
           // {'label':'Last Name','fieldName':'Last_Name__c','type':'text'},
           {'label':'Certifications','fieldName':'Certification_Name__c','type':'text'},
            {'label':'Date Of Joining','fieldName':'Joining_Date__c','type':'text'},
            {'label':'Company Location','fieldName':'Company_Location__c','type':'text'},
            {'label':'Designation','fieldName':'Designation__c','type':'text'},
            {'label':'Contact Number','fieldName':'PrimaryContactNumber__c','type':'text'},
            {'label':'Working Email','fieldName':'Working_Email__c','type':'text'},
            {'label':'Employee Status','fieldName':'Emp_status__c','type':'text'}
            
           
           // {'type':'action',typeAttributes:{'rowActions':actions}}
        ]);
            helper.handleEmpCertFilterHelper(component,event);
       }else{
       var actions=[
           // {'label':'Edit','name':'edit'},
            {'label':'Delete','name':'delete'},
            {'label':'View','name':'view'}
        ];
       component.set('v.columns',[
            {'label':'Employee Id','fieldName':'Wissen_Employees_ID__c','type':'text'},
             {'label':'Full Name','fieldName':'Full_Name__c','type':'text'},
           // {'label':'First Name','fieldName':'emp_first_name1__c','type':'text'},
           // {'label':'Last Name','fieldName':'Emp_last_name2__c','type':'text'},
            {'label':'Certification Email','fieldName':'Certifications_Email__c','type':'text'},
            {'label':'Certification Name','fieldName':'certification_Names_del__c','type':'text'},
            {'label':'Certification Date','fieldName':'Date_of_Certification__c','type':'text'},
            {'label':'Expiry Date','fieldName':'Certification_Expired_Date__c','type':'text'},
            {'label':'Status','fieldName':'Certification_Status__c','type':'text'},
            {'label':'Certification Count','fieldName':'Total_Certtifications_Count__c','type':'Number'},
            {'type':'action',typeAttributes:{'rowActions':actions}}
        ]);
           helper.handleCertificationFilterHelper(component, event);
       }
        
    },
    handleRowAction:function(component, event, helper){
       // alert('from row');
       var action=event.getParam('action');
       var row=event.getParam('row');
       // console.log(JSON.stringify(row));
        
        switch(action.name){
            case 'view':
                helper.showHandlerHelper(component,row);
                break;
            case 'edit':
                helper.editHandlerHelper(component,row);
                break;
            case 'delete':
                helper.deleteHandlerHelper(component,row);
                break;
                
        }
        
    },
    handleCloseModal:function(component, event, helper){
        component.set('v.isShow',false);
         component.set('v.isTest',false);
    },
    handleSort: function(component,event,helper) {
        var fieldName=event.getParam('fieldName');
        var sortDirection=event.getParam('sortDirection');
        component.set('v.sortDirection',sortDirection);
        component.set('v.sortedBy', fieldName);
        helper.sortData(component,fieldName,sortDirection);
    } ,
    openModel:function(component, event, helper){
         alert('Are you sure to create new certification');
         
        var navigateEvent = $A.get("e.force:navigateToComponent");
        navigateEvent.setParams({componentDef:"c:CertificationButton"});
        navigateEvent.fire();
   
        
    },
      handleCloseModal:function(component, event, helper){
        component.set('v.isShow',false);
        component.set('v.isEdit',false);
        //helper.getAllEmployessHelper(component);
        $A.get('e.force:refreshView').fire();
    },
})