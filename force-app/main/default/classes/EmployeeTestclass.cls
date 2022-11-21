@istest
public class EmployeeTestclass {
    
    static testMethod void employeeTest()
    {
        TestFactory.employee();
       // string error;
       //System.assert(error.getMessage().contains('Update failed.'));
    }
     static testMethod void employeeTestpicklist1()
     {
        
        map<string,string> getproject=EmployeePickListValues.statusPickList();
    
         
     }
    static testMethod void employeeTestpicklist2()
     {
        
        map<string,string> getproject=EmployeePickListValues.locPickList();
    
         
     }
    static testMethod void employeeTestpicklist3()
     {
        
        map<string,string> getproject=EmployeePickListValues.domainPickList();
    
         
     }
      static testMethod void employeeTestpicklist4()
     {
        
        map<string,string> getproject=EmployeePickListValues.catPickList();
    
         
     }
    static testMethod void employeeTestpicklist5()
     {
        
        map<string,string> getproject=EmployeePickListValues.desPickList();
    test.startTest();
    EmployeeCelebrations.getAllEmployees();
         
    test.stopTest();
       
         
     }
    
   
}