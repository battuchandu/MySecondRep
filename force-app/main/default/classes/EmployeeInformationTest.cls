@isTest
public class EmployeeInformationTest 
{ 
    @isTest static void getEmployeesMethod()
    {
        Test.startTest();
        List<Employees__c> employees=EmployeeInformation.getEmployees();
        system.assertEquals(true, employees!=null);
        Test.stopTest();
    }  
    
     @isTest static void getFilteredEmployeesMethod(){
        Test.startTest();
        List<Employees__c> employees=EmployeeInformation.getFilteredEmployees('Total_Admin_Experience__c','2','3');
        system.assertEquals(true, employees!=null);
        
        List<Employees__c> employees1=EmployeeInformation.getFilteredEmployees('Name','sirisha',null);
        system.assertEquals(true, employees1!=null);
        
        List<Employees__c> employees2=EmployeeInformation.getFilteredEmployees('Emp_status__c','inproject',null);
        system.assertEquals(true, employees2!=null);
        Test.stopTest();
    }
    
    @isTest static void getFilteredEmployeesMethodFilter2()
    {
        Test.startTest();
         EmployeeInformation.Filters  wrp=new EmployeeInformation.Filters();
         List<String> designation = new List<String>();
         designation.add('Trainee Engineer');
         List<String> empStatus = new List<String>();
         empStatus.add('Active');
        List<String> empDomain = new List<String>();
         empDomain.add('Salesforce COE');
        List<String> empLocation = new List<String>();
         empLocation.add('Pune');
        List<String> empCategory = new List<String>();
         empCategory.add('B1');
        Map<String,Map<String,String>> c = new  Map<String,Map<String,String>>();  
        
        c.put('pAdmin',new Map<String,String>());
         c.put('pDev',new Map<String,String>());
         c.put('oexp',new Map<String,String>());
         c.put('tAdmin',new Map<String,String>());
        c.put('tDev',new Map<String,String>());
        c.put('tIT',new Map<String,String>());
        
        c.get('pAdmin').put('eFrom','2');
        c.get('pAdmin').put('eTo','4');
        
        c.get('pDev').put('eFrom','2');
        c.get('pDev').put('eTo','4');
        
        c.get('oexp').put('eFrom','2');
        c.get('oexp').put('eTo','4');
        
        c.get('tAdmin').put('eFrom','2');
        c.get('tAdmin').put('eTo','4');
        
        c.get('tDev').put('eFrom','2');
        c.get('tDev').put('eTo','4');
        
        c.get('tIT').put('eFrom','2');
        c.get('tIT').put('eTo','4');
        
         wrp.name = 'Abhijeet Ahire';
         wrp.designation = designation;
         wrp.empStatus = empStatus;
         wrp.empDomain = empDomain;
         wrp.empLocation = empLocation ; 
         wrp.empCategory = empCategory;
         wrp.empExp = c;  
        
         list<Employees__c> employees=EmployeeInformation.fEmployees(wrp);
         system.assertEquals(true, employees!=null);
         Test.stopTest();
    }
}