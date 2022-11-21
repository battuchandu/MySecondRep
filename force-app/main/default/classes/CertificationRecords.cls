public class CertificationRecords {
    
    @AuraEnabled
    public static List<Tpswrapper> getCertificationRecords()
   {
        List<Certification__c> clist=new List<Certification__c>([select Id,Name,Full_Name__c,Employee__r.Wissen_Employee_ID__c,certification_Names_del__c,Employee__r.Name,Employee__r.Last_Name__c,Certifications_Date__c,Certifications_Email__c,Employee__c from Certification__c where Certifications_Date__c=LAST_N_DAYS:90]);
       list<Tpswrapper> returnlist=new list<Tpswrapper>();
       for(Certification__c c:clist)
       {
        Tpswrapper d=new Tpswrapper();
           d.Certicationname = c.certification_Names_del__c;
           d.CerticationsDate=c.Certifications_Date__c;
           d.CerticationEmail=c.Certifications_Email__c;
           d.EmployeeFirstName=c.Employee__r.Name;
           d.EmployeeLastName=c.Employee__r.Last_Name__c;
           d.WissenEmployeeID=c.Employee__r.Wissen_Employee_ID__c;
           d.FullName=c.Full_Name__c;
           
           returnlist.add(d);
       }
       return returnlist;
       
    }
    
    Public class Tpswrapper{
        @auraEnabled
        public string Certicationname{get;set;}
        @auraEnabled
        public string CerticationEmail{get;set;}
        @auraEnabled
        public date CerticationsDate{get;set;}
        @auraEnabled
        public string EmployeeFirstName{get;set;}
        @AuraEnabled
        public string EmployeeLastName{get;set;}
        @AuraEnabled
        public string WissenEmployeeID{get;set;}
        @AuraEnabled
        public string FullName{get;set;}        
    }
}