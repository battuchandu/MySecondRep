@isTest
public class CertificatestestClass{
      static testmethod void test(){
          List<certification__c> certification = new List<certification__c>();
          certification__c cer = new certification__c();
          
          cer.certification_Names_del__c = 'Admin 201';
          cer.Certifications_Email__c='ss@ss.com';
            cer.Wissen_COE__c='salesforce coe';
              certification.add(cer);
           
      }
     static testmethod void test2()
     {
          CertificationRecords.Tpswrapper  wrp=new CertificationRecords.Tpswrapper();
         
         wrp.Certicationname='admin';
         wrp.CerticationEmail='siri@gmail.com';
         wrp.CerticationsDate=system.today();
         wrp.EmployeeFirstName='siri';
         wrp.EmployeeLastName='madhu';
         wrp.WissenEmployeeID='5046';
         wrp.FullName='ss';
        // wrp aa=new wrp();
     }
     static testmethod void test3()
     {
       
         
        CertificationRecords.getCertificationRecords();
    }
     static testmethod void test4()
     {

      
    }
}