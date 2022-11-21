@istest
public class CertificationEmailTestclass {
    @isTest
Public static void CertificationEmailNotification2(){
Test.startTest();
   Employees__c em=new Employees__c();
        em.name='test15';
        em.Wissen_Employee_ID__c='2006';
        em.Last_Name__c='dumay98';
        em.Working_Email__c='ss@gmail.com';
        em.Date_Of_Joining__c= Date.newInstance(1988, 2, 17);
        em.Laptop_W_P_CLIENT__c='Wissen';
        em.Country__c='India';
      
        insert em;
   
      Certification__c cer=new Certification__c();
       // cer.emp_first_name1__c = 'giri';
        cer.Wissen_COE__c='salesforce coe';
        cer.certification_Names_del__c='Velocity';
        cer.Certifications_Email__c='jarkand@gmail.com';
        cer.Certifications_Date__c = system.today();
        cer.Employee__c=em.id;
      
insert cer;
CertificationEmail obj = new CertificationEmail();
DataBase.executeBatch(obj);

Test.stopTest();
}
}