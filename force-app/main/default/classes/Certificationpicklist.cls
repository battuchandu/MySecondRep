public class Certificationpicklist 
{
     @AuraEnabled(cacheable=true)
    public static Map<String,String> CerPickList(){
        Map<String,String> desOptions=new Map<String,String>();
        Schema.DescribeFieldResult fieldResult=Certification__c.certification_Names_del__c.getDescribe();
        List<schema.PicklistEntry> pValues=fieldResult.getPickListValues();
        system.debug('picklistcer'+pValues);
        for(schema.PicklistEntry pl:pValues){
            desOptions.put(pl.getLabel(),pl.getValue());
        }
        return desOptions;
    }
    
    @AuraEnabled(cacheable=true)
     public static Map<String,String> statusPickList(){
            Map<String,string> statusList=new Map<String,String>();
            Schema.DescribeFieldResult fieldResult=Certification__c.Certification_Status__c.getDescribe();
            List<Schema.PicklistEntry> pValues=fieldResult.getPickListValues();
            for(Schema.PicklistEntry pl:pValues){
                statusList.put(pl.getLabel(),pl.getValue());
            }
            return statusList;
        }
     @AuraEnabled(cacheable=true)
     public static Map<String,String> wissencoePickList(){
            Map<String,string> statusList=new Map<String,String>();
            Schema.DescribeFieldResult fieldResult=Certification__c.Wissen_COE__c.getDescribe();
            List<Schema.PicklistEntry> pValues=fieldResult.getPickListValues();
            for(Schema.PicklistEntry pl:pValues){
                statusList.put(pl.getLabel(),pl.getValue());
            }
            return statusList;
        }

}