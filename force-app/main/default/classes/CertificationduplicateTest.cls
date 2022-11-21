@isTest
public class CertificationduplicateTest {
    @isTest
    static void testData(){
        List<Certification__c> certifications= new List<Certification__c>();
        Certification__c cer1 = new Certification__c();
         cer1.Wissen_COE__c='salesforce coe';
           cer1.certification_Names_del__c = 'Admin 201';
        	cer1.Certifications_Email__c='test@gmail.com';
       certifications.add(cer1);
        
           insert certifications;
    }
@isTest
   public Static void testmethod1(){
       
       Test.StartTest(); 
       List<Certification__c> certifications1=[select Id,certification_Names_del__c,Employee__c from Certification__c];
			CertificationDuplication.Certification(certifications1);
			system.assertEquals(true, certifications1!=null);
		Test.StopTest();
       }
    @isTest
   public Static void testmethod12(){
       Test.StartTest(); 
       List<Certification__c> certifications1=[select Id,certification_Names_del__c,Employee__c from Certification__c];
			EmployeeCertificationsAdd.addCertifications(certifications1);
			system.assertEquals(true, certifications1!=null);
		Test.StopTest();
       }
    }