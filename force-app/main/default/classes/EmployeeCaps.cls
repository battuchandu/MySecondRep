global class EmployeeCaps
{
    global static void Change( Employees__c [] Emo){
      for(Employees__c P :Emo){
         if(P.Name!=null && P.Name!= ' '){
           P.Name= FirstlttrUpper.formatToUpper(P.Name);
   }
          if(p.Last_Name__c!=null && p.Last_Name__c!=''){
               P.Last_Name__c= FirstlttrUpper.formatToUpper(P.Last_Name__c);
              
          }
      }
}
}