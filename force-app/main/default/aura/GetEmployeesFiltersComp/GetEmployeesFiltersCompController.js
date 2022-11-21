({
	doInIt : function(component, event, helper) {
        helper.getDesOptionsHelper(component);
        helper.getStatusOptionsHelper(component);
        helper.getLocationOptionsHelper(component);
        helper.getDomainOptionsHelper(component);
        helper.getCategoryOptionsHelper(component);
    },
    handleFilterChange:function(component,event,helper){
        var expObj=component.get('v.Exp');
        //console.log('MapType:'+JSON.stringify(expObj));
        var eName=component.get('v.empName');
        var eDesignation=component.get('v.desOption');
        var eStatus=component.get('v.status');
        var eLocation=component.get('v.location');
        var eDomain=component.get('v.domain');
        var eCategory=component.get('v.category');
        //var eStartdate=component.get('v.startdates');
        //var eEnddate=component.get('v.enddates');
        //console.log(eLocation);
        var eFilters={
                "name":eName,
                "designation":eDesignation,
                "empStatus":eStatus,
                "empDomain":eDomain,
                "empLocation":eLocation,
                "empCategory":eCategory,
            	//"empStartdate":eStartdate,
           		 //"empEnddate":eEnddate,
            	"empExp":expObj
            }
        //console.log(JSON.stringify(eFilters));
        
        var filterEvent=component.getEvent('EmployeesFilterEvent');
        filterEvent.setParams({
            filters:eFilters
        });
        filterEvent.fire();
    },
     clearcheckbox:function(component,event,helper)
    {
         var whichOne = event.getSource().getLocalId();
     //  alert(whichOne);
        if(whichOne=='desId')
        {
             component.set("v.desOption",[]);
        }
        else if(whichOne=='staId')
        {
              component.set("v.status",[]); 
        }
       else if(whichOne=='locId')
        {
              component.set("v.location",[]); 
        }
         else if(whichOne=='domid')
        {
              component.set("v.domain",[]); 
        }
         else if(whichOne=='catid')
        {
              component.set("v.category",[]); 
        }
         else if(whichOne=='ConId')
        {
              component.set("v.Con.cCount.eFrom",null); 
            component.set("v.Con.cCount.eTo",null); 
        }
        
         else if(whichOne=='preadminId')
        {
              component.set("v.Exp.pAdmin.eFrom",null); 
            component.set("v.Exp.pAdmin.eTo",null); 
        }
         else if(whichOne=='predevId')
        {
              component.set("v.Exp.pDev.eFrom",null); 
            component.set("v.Exp.pDev.eTo",null); 
        }
         else if(whichOne=='totaladminId')
        {
              component.set("v.Exp.tAdmin.eFrom",null); 
            component.set("v.Exp.tAdmin.eTo",null); 
        }
         else if(whichOne=='totalpredevId')
        {
              component.set("v.Exp.tDev.eFrom",null); 
            component.set("v.Exp.tDev.eTo",null); 
        }
         else if(whichOne=='totalitId')
        {
              component.set("v.Exp.tIT.eFrom",null); 
            component.set("v.Exp.tIT.eTo",null); 
        }
          else if(whichOne=='oId')
        {
              component.set("v.Exp.oexp.eFrom",null); 
            component.set("v.Exp.oexp.eTo",null); 
        }
       
        
    }
    
    
})