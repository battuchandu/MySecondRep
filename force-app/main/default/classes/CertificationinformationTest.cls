@isTest
public class CertificationinformationTest {
    @istest
    public static void test1()
    {
        
        list<Employees__c> ss=new list<Employees__c>();
        Employees__c em=new Employees__c();
        em.name='test1';
        em.Wissen_Employee_ID__c='5046';
        em.Last_Name__c='dumay2';
        em.Working_Email__c='ss@gmail.com';
        em.Date_Of_Joining__c= Date.newInstance(1988, 2, 17);
        em.Laptop_W_P_CLIENT__c='Wissen';
        em.Country__c='India';
        ss.add(em);
        insert ss;
        list<Certification__c> css=new list<Certification__c>();
        
        
        Certification__c cer=new Certification__c();
        // cer.emp_first_name1__c = 'giri';
        cer.Wissen_COE__c='salesforce coe';
        cer.certification_Names_del__c='Admin 201';
        cer.Certifications_Email__c='ss@gmail.com';
        cer.Certifications_Date__c = system.today().adddays(-30);
        cer.Employee__c=em.id;
        css.add(cer);
        insert css;
         list<Certification__c> emp=CertificationsInformation.getEmployeeCertifications(em.id);
        
    }
    @istest
    public static void getCertificationsTest()
    {
            list<Certification__c> cer=CertificationsInformation.getCertifications();
        
    }
    @istest
    public static void getFilteredCertificationsTest()
    {
        string dom='Wissen_COE__c';
          string cert='certification_Names_del__c';
          string emails='Certifications_Email__c';
          string dd='Certifications_Date__c';
        
        
        list<Certification__c> cer=CertificationsInformation.getFilteredCertifications('Wissen_COE__c',dom);
        
        
        
    }
    @isTest
    public static void getEmpFilterCertificationsTest()
    {
        string cer='Last_Name__c';
        list<Employees__c> emp=CertificationsInformation.getEmpFilterCertifications('Last_Name__c',cer);
        
    }
      
    @isTest
    public static void FilterCertificationsTest()
    {
        CertificationsInformation.AccountPagerWrapper ss = new CertificationsInformation.AccountPagerWrapper();
        ss.pageSize =  10;
        ss.page = 5;
        ss.total = 20;
       CertificationsInformation.fetchAccount(10.5,43);
        
    }
    
    
}