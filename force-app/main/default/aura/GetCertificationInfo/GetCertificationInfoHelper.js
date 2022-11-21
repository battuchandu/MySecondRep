({
	getCredentialsHelper: function(component) {
		var empId=component.get('v.EmpId');
        console.log(JSON.stringify(empId));
		var action=component.get('c.getEmployeeCertifications');
        action.setParams({
            'empId':empId
        });
        action.setCallback(this,(response)=>{
            var state=response.getState();
            if(state==='SUCCESS'){
            var resultList=response.getReturnValue();
            component.set('v.CertificationList',resultList);
        }
        });
        $A.enqueueAction(action);
	}
})