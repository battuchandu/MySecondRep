public class EmployeeCertificationsAdd
{
    public static void addCertifications(list<Certification__c> cer)
    {
        set<Id> empId = new set<Id> ();
        String certName;
        for(Certification__c cert: cer)
        {
            empId.add(cert.Employee__c);
            certName = cert.certification_Names_del__c;
        }
        system.debug('empid-->'+empId);
        System.debug('certName-->'+certName);
        List<Employees__c> employeesList = new List<Employees__c> ();
        for(Employees__c emp: [SELECT Id,Certification_Name__c from Employees__c WHERE Id in:empId]){
            if(emp.Certification_Name__c != null)
            {
                emp.Certification_Name__c = emp.Certification_Name__c + '; ' + certName;
            }
            else
            {
                emp.Certification_Name__c = certName;
            }
            employeesList.add(emp);
        }
        update employeesList;
    }

}