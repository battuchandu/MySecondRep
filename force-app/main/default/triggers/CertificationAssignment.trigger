trigger CertificationAssignment on Certification__c (before insert , before update,after insert,after update) {
    
    if((trigger.isbefore && trigger.isInsert)||(trigger.isbefore&&trigger.isUpdate))
    {
         EmployeeCertificationsAdd.addCertifications(trigger.new);
       /* set<Id> empId = new set<Id> ();
        String certName;
        for(Certification__c cert: trigger.new){
            empId.add(cert.Employee__c);
            certName = cert.certification_Names_del__c;
        }
        system.debug('empid-->'+empId);
        System.debug('certName-->'+certName);
        List<Employees__c> employeesList = new List<Employees__c> ();
        for(Employees__c emp: [SELECT Id,Certification_Name__c from Employees__c WHERE Id in:empId]){
            if(emp.Certification_Name__c != null){
                emp.Certification_Name__c = emp.Certification_Name__c + '; ' + certName;
            }
            else{
                emp.Certification_Name__c = certName;
            }
            employeesList.add(emp);
        }
        update employeesList;*/
    }
     if(Trigger.isBefore && Trigger.isInsert){                                                          
           EmpDupCertifications.checkDup(Trigger.new);                                           
    }
    
 
}