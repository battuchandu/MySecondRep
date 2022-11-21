trigger Dupprevention on Employees__c (before insert,before update) {
    /*if(trigger.isinsert && trigger.isbefore)
    {
       LapTopAssign.lapAssign(trigger.new); 
        LapTopAssign.paymentForLaptop(trigger.new);
        
    }
     if(trigger.isupdate && trigger.isbefore)
    {
      LapTopAssign.lapAssign(trigger.new);  
         LapTopAssign.paymentForLaptop(trigger.new);
        
    }*/
    
    
   
    if(trigger.isbefore && trigger.isinsert)
    {
         DuppreventionHelperClass.Duplication(trigger.new);
         EmployeeCaps.Change(trigger.new);
        
      
        if(trigger.isBefore )
         if(trigger.IsInsert ||trigger.IsUpdate )
           EmployeeCaps.Change(trigger.new);
      
    }
    
}