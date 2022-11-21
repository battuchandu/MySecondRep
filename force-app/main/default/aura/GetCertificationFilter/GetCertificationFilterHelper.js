({
	getDesOptionsHelper : function(component) {
		var action=component.get('c.CerPickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}
    			component.set('v.Cerifications',options);
    			//console.log(JSON.stringify(options));
        	}
        });
        $A.enqueueAction(action);
	},
    
        getLocationOptionsHelper : function(component) {
		var action=component.get('c.wissencoePickList');
        action.setCallback(this,(res)=>{
            var state=res.getState();
            //alert('status:'+state);
            if(state==='SUCCESS'){
            var result=res.getReturnValue();
            var options=[];
            for(var item in result){
            options.push({label:result[item],value:result[item]});
        	}				
    			component.set('v.WissenCoes',options);    			
        	}
        });
        $A.enqueueAction(action);
	},
     
})