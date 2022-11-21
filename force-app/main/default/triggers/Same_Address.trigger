trigger Same_Address on Employees__c (before insert,before update) {
for(Employees__c ac : Trigger.new) 
        {
            if(ac.Is_Present_address_same_as_Permanen_addr__c == True)
            {
                ac.Address_Line2__c = ac.Address_Line1__c;
            }
        } 
}