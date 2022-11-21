public class EmpDupCertifications {
    public static void checkDup(List<Certification__c> cers){
        Set<Id> empIds=new Set<Id>();
        Set<string> cerNames=new Set<String>();
        for(Certification__c c:cers){
            empIds.add(c.Employee__c);
        }
        system.debug(empIds);
        List<Certification__c> certifications=[Select Id,Employee__c,certification_Names_del__c,
                                               emp_first_name1__c,Certifications_Email__c 
                                               from Certification__c WHERE Employee__c IN :empIds];
        system.debug(certifications);
        List<string> existCer=new List<String>();
        List<string> dupCer=new List<String>();
        for(Certification__c c:certifications){
            existCer.add(c.certification_Names_del__c);
    		}
        
        for(Certification__c c:cers){
            
          if(existCer.contains(c.certification_Names_del__c)){
                	//dupCer.add(c.certification_Names_del__c);
            		c.certification_Names_del__c.AddError('This Certification already done by You...');
            		
       			 }
            
        }
        
    }
}