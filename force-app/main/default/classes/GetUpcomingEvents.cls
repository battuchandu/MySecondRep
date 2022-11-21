public class GetUpcomingEvents {
@AuraEnabled
public static List<Alumni__c> GetEvent()
{
List<Alumni__c> lstEvent=[Select Id,Event__c,Event_Date__c FROM Alumni__c where Event_Date__c = Next_N_Days:30 ];
return lstEvent;
} 
}