@isTest
public class DupPreventionHelperTest {
   
  @isTest
    static void HelperTest(){
 list<Employees__c> emp = new list<Employees__c>();   
        
        Employees__c emps = new Employees__c();
        emps.Name = '';
        emps.Last_Name__c = '';
        emps.Working_Email__c = '';
        emps.Primary_Contact__c = '';
        emps.Date_Of_Joining__c=system.today();
        emps.Laptop_W_P_CLIENT__c='Wissen';
        emps.Wissen_Employee_ID__c='3333';
        emps.Country__c='India';
        
        
        emp.add(emps);
    
        insert emp;
    }
    @isTest
    public static void testmethod11(){
        test.startTest();
        list<Employees__c> employess = [SELECT Id,Wissen_Employee_ID__c,Name,Last_Name__c,
                                        Working_Email__c,Primary_Contact__c FROM Employees__c ];
        DuppreventionHelperClass.Duplication(employess);
        test.stopTest();
    }
    /*@isTest
    public static void testmethod12()
    {
         list<Employees__c> emp1 = new list<Employees__c>();
        
        LapTopAssign.lapAssign(emp1);
        
    }*/
    /* @isTest
    public static void testmethod13()
    {
         list<Employees__c> emp1 = new list<Employees__c>();
        
        LapTopAssign.paymentForLaptop(emp1);
        
    }*/
    
}