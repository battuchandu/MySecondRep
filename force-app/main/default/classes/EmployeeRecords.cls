public class EmployeeRecords {

@AuraEnabled
public static List<Employees__c> getEmployeeRecords()
{
List<Employees__c> elist=[select Id,Full_Name__c,Wissen_Employee_ID__c,Date_Of_Joining__c,Working_Email__c from Employees__c where Date_Of_Joining__c =LAST_N_DAYS:180];

return elist;
}


}