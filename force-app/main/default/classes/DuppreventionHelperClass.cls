public class DuppreventionHelperClass {
 
    Public Static Void Duplication(list<Employees__c> emps){
  // Set to store Empid
    Set <String> EmpIdSet = new Set<String>();
    // Set to store FirstName
   Set <String> firstNameSet = new Set<String>();
   
    // Set to store LastName
    Set <String> lastNameSet = new Set<String>();
  
    // Set to store email ids
     Set <String> emailSet = new Set<String>(); 
    
    // Set to store phone numbers
    Set <String> phoneSet = new Set<String>(); 
    
    // Iterate through each Contact and add their email and phone number to their respective Sets
    for (Employees__c emp:emps) {
        
         EmpIdSet.add(emp.Wissen_Employee_ID__c);
        firstNameSet.add(emp.Name);
        lastNameSet.add(emp.Last_Name__c);
        emailSet.add(emp.Working_Email__c);
        phoneSet.add(emp.Primary_Contact__c);
        
    }
        // New list to store the found email or phone numbers
    List <Employees__c> EmpList = new List<Employees__c>();

    // Populating the list using SOQL
    EmpList = [SELECT Wissen_Employee_ID__c,Name,Last_Name__c,Working_Email__c,Primary_Contact__c FROM Employees__c 
               WHERE Wissen_Employee_ID__c IN :EmpIdSet OR
               Name IN :firstNameSet OR 
               Last_Name__c IN : lastNameSet OR
               Working_Email__c IN :emailSet OR 
               Primary_Contact__c IN :phoneSet];

    // Iterating through each Contact record to see if the same email or phone was found
    for (Employees__c con:emps) {
      
        If (EmpList.size() > 0) {
           
            // Displaying the error
            con.Wissen_Employee_ID__c.adderror('Duplicate EmployeId Found. Using Existing Employee');
            con.Name.adderror( 'Duplicate Name Found. Using Existing Employee.' );
            con.Last_Name__c.adderror( 'Duplicate Last Name Found. Using Existing Employee.' );
            con.Working_Email__c.adderror( 'Duplicate Email Found. Using Existing Employee.' );
            con.Primary_Contact__c.adderror( 'Duplicate ContactNumber Found. Using Existing Employee.' );
        }
    }
    
}
}