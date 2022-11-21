({
	doInIt : function(component, event, helper) {
        helper.getDesOptionsHelper(component);
     
        helper.getLocationOptionsHelper(component);
        
    },
    handleFilterChange:function(component,event,helper){
     
        //console.log('MapType:'+JSON.stringify(expObj));
        var eName=component.get('v.empName');
        var eDesignation=component.get('v.desOption');
        var eStatus=component.get('v.status');
        var eLocation=component.get('v.location');
        var eDomain=component.get('v.domain');
        var eCategory=component.get('v.category');
        //console.log(eLocation);
        var eFilters={
                "name":eName,
                "designation":eDesignation,
                "empStatus":eStatus,
                "empDomain":eDomain,
                "empLocation":eLocation,
                "empCategory":eCategory,
            	"empExp":expObj
            }
        //console.log(JSON.stringify(eFilters));
        
        var filterEvent=component.getEvent('EmployeesFilterEvent');
        filterEvent.setParams({
            filters:eFilters
        });
        filterEvent.fire();
    },
})