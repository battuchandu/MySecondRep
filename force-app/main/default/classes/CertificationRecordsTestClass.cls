@isTest
public class CertificationRecordsTestClass{
      static testmethod void test(){
          List<certification__c> certification = new List<certification__c>();
          certification__c cer = new certification__c();
          
          cer.certification_Names_del__c = 'Admin 201';
          
          
           
              certification.add(cer);
           test.startTest();
       List<Certification__c> clist=new List<Certification__c>([select Id,Name,Employee__r.Wissen_Employee_ID__c,certification_Names_del__c,
                                                      Employee__r.Name,Employee__r.Last_Name__c,Certifications_Date__c,
                      Certifications_Email__c,Employee__c,OwnerId from Certification__c where Certifications_Date__c=LAST_N_DAYS:90]); 

          
          CertificationRecords.getCertificationRecords();
     test.stopTest();
      }
}