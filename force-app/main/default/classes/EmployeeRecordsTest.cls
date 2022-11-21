@IsTest
public class EmployeeRecordsTest {
@IsTest
    
    static void HelperTest(){
 list<Employees__c> emp = new list<Employees__c>();   
        
        Employees__c emps = new Employees__c();
        emps.Name = '';
        emps.Last_Name__c = '';
        emps.Working_Email__c = '';
        emps.Primary_Contact__c = '';
        emps.Date_Of_Joining__c=system.today();
        
        emps.Wissen_Employee_ID__c='3333';
        emps.Country__c='India';
        
        
        emp.add(emps);
    
        insert emp;
    }
    @isTest
    public static void testmethod11(){
        test.startTest();
        
        EmployeeRecords.getEmployeeRecords();
        test.stopTest();
    }
}