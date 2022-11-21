({
	getDesOptionsHelper : function(component) {
		var action=component.get('c.desPickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}
    			component.set('v.desOptions',options);
    			//console.log(JSON.stringify(options));
        	}
        });
        $A.enqueueAction(action);
	},
        getStatusOptionsHelper : function(component) {
		var action=component.get('c.statusPickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            //alert('status:'+state);
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}				
    			component.set('v.statusOptions',options);    			
        	}
        });
        $A.enqueueAction(action);
	},
        getLocationOptionsHelper : function(component) {
		var action=component.get('c.locPickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            //alert('status:'+state);
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}				
    			component.set('v.locations',options);    			
        	}
        });
        $A.enqueueAction(action);
	},
        getDomainOptionsHelper : function(component) {
		var action=component.get('c.domainPickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            //alert('domain:'+state);
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}				
    			component.set('v.domains',options);    			
        	}
        });
        $A.enqueueAction(action);
	},
        getCategoryOptionsHelper : function(component) {
		var action=component.get('c.catPickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            //alert('category:'+state);
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}				
    			component.set('v.categories',options);    			
        	}
        });
        $A.enqueueAction(action);
	}
})