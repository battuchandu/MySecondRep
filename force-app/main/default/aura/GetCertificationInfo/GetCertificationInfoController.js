({
	getCredentials: function(component, event, helper) {
        component.set('v.columns',[
            {'label':'Credentials','fieldName':'certification_Names_del__c','type':'text'},
            {'label':'Earned Date','fieldName':'Date_of_Certification__c','type':'text'}
        ]);
        
        helper.getCredentialsHelper(component);        

	}
})