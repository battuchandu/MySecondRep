public class CL_FROM_TO_DATE 
{
 @AuraEnabled
    
    public static list<Employees__c> dateFilters(date startdate,date endDate)
    {
         Date start = Date.valueOf(startdate);
         Date endda = Date.valueOf(endDate);
        
        list<Employees__c> opp=[select id,Name,Date_Of_Joining__c from Employees__c where Date_Of_Joining__c>=:startdate and Date_Of_Joining__c<=:endDate];
        return opp;
        
    }
         @AuraEnabled
    public static list<Employees__c> date()
    {
        list<Employees__c> opp1=[select id,Name,Date_Of_Joining__c from Employees__c ];
        return opp1;
        
    }
}