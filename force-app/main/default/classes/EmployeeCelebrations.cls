public class EmployeeCelebrations {
@auraEnabled
    
public static List<Employees__c> getAllEmployees()
{
   
        //Date DOB = System.today()+364;
List<Employees__c> emp=new LIST<Employees__c>();
    
emp=[select id, Full_Name__c , Wissen_Employee_ID__c, Working_Email__c from Employees__c where Date_Of_Birth__c =TODAY];
return emp;
    
}
    
   public static list<Employees__c> getRecords() {
    date thismonth = System.today();
    list<Employees__c> ss= [SELECT Name, Date_Of_Birth__c FROM Employees__c WHERE Date_Of_Birth__c = This_Week];
       system.debug('ss==>'+ss);
       return ss;
       
}
    /*
       public static list<Employees__c> getRecordsss() {
    Integer thisMonth = System.today().month();
    list<Employees__c> ss= [
        SELECT Name, Date_Of_Birth__c
        FROM Employees__c
        WHERE CALENDAR_MONTH(Date_Of_Birth__c) = :thisMonth
    ];
       system.debug('ss==>'+ss);
       return ss;

       
}*/

}