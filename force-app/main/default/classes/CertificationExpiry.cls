public class CertificationExpiry {
    
    @AuraEnabled
    public static List<Tpswrapper> getCertificationRecords()
   {
        List<Certification__c> clist=new List<Certification__c>([select Id,Name,Full_Name__c,Employee__r.Wissen_Employee_ID__c,Employee__r.Name,Employee__r.Last_Name__c,certification_Names_del__c,Certifications_Email__c,Expiry_Date__c,Certification_Expired_Date__c, Employee__c from Certification__c where Expiry_Date__c=Next_N_Days:30]);
       list<Tpswrapper> returnlist=new list<Tpswrapper>();
       for(Certification__c c:clist)
       {
        Tpswrapper d=new Tpswrapper();
           d.Certicationname = c.certification_Names_del__c;
           d.WissenEmployeeID=c.Employee__r.Wissen_Employee_ID__c;
           d.FullName=c.Full_Name__c;
           d.ExpiryDate = c.Certification_Expired_Date__c;
           returnlist.add(d);
       }
       return returnlist;
       
    }
    
    Public class Tpswrapper{
        @auraEnabled
        public string Certicationname{get;set;}
        @AuraEnabled
        public string WissenEmployeeID{get;set;}
        @AuraEnabled
        public string FullName{get;set;}
        @AuraEnabled
        public string ExpiryDate{get;set;}
        
    }
}