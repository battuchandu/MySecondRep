public class EmployeePickListValues {
    @AuraEnabled(cacheable=true)
    public static Map<String,String> desPickList(){
        Map<String,String> desOptions=new Map<String,String>();
        Schema.DescribeFieldResult fieldResult=Employees__c.Designation__c.getDescribe();
        List<schema.PicklistEntry> pValues=fieldResult.getPickListValues();
        for(schema.PicklistEntry pl:pValues){
            desOptions.put(pl.getLabel(),pl.getValue());
        }
        return desOptions;
    }
    
    @AuraEnabled(cacheable=true)
     public static Map<String,String> statusPickList(){
            Map<String,string> statusList=new Map<String,String>();
            Schema.DescribeFieldResult fieldResult=Employees__c.Emp_status__c.getDescribe();
            List<Schema.PicklistEntry> pValues=fieldResult.getPickListValues();
            for(Schema.PicklistEntry pl:pValues){
                statusList.put(pl.getLabel(),pl.getValue());
            }
            return statusList;
        }
    @AuraEnabled(cacheable=true)
    public static Map<string,string> locPickList(){
        Map<string,string>  locList=new Map<string,string>();
        Schema.DescribeFieldResult fieldResult=Employees__c.Company_Location__c.getDescribe();
        List<schema.PicklistEntry> pValues=fieldResult.getPickListValues();
        for(Schema.PicklistEntry pl:pValues){
            locList.put(pl.getLabel(),pl.getValue());
        }
        return locList;
    }
    @AuraEnabled(cacheable=true)
    public static Map<String,String> domainPickList(){
        Map<String,String> domainList=new Map<String,String>();
        Schema.DescribeFieldResult fieldResult=Employees__c.Wissen_Domain_CEO__c.getDescribe();
        List<Schema.PicklistEntry> pValues=fieldResult.getPickListValues();
        for(Schema.PicklistEntry pl:pValues){
            domainList.put(pl.getLabel(),pl.getValue());
        }
        return domainList;        
    }
    @AuraEnabled(cacheable=true)
    public static Map<String,String> catPickList(){
        Map<String,String> catList=new Map<String,String>();
        Schema.DescribeFieldResult fieldResult=Employees__c.Category__c.getDescribe();
        List<Schema.PicklistEntry> pValues=fieldResult.getPickListValues();
        for(Schema.PicklistEntry pl:pValues){
            catList.put(pl.getLabel(),pl.getValue());
        }
        return catList;
    }
    
}