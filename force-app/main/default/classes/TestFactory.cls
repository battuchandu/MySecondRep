public class TestFactory 
{
 public static void employee()
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
        
        
    }
    public static void certification()
    {
        list<Certification__c> css=new list<Certification__c>();
      
        
        Certification__c cer=new Certification__c();
       // cer.emp_first_name1__c = 'giri';
        cer.Wissen_COE__c='salesforce coe';
        cer.certification_Names_del__c='Admin 201';
        cer.Certifications_Email__c='ss@gmail.com';
        cer.Certifications_Date__c = system.today().adddays(-30);
       
       css.add(cer);
insert css;
        
        
        
    }
    public static void projects()
    {
        list<Project__c> ss=new list<Project__c>();
        
        Project__c Pr =  new Project__c();
       // Pr.PoPupfield__c = 'test5';
        Pr.Project_End_Date__c = Date.newInstance(1988, 2, 17);
       // Pr.Project_Name__c = 'AMES';
        ss.add(pr);
        insert ss;
        
        
        
    }
    
    
    
    
}