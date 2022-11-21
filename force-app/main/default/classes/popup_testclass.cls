@istest
public class popup_testclass {

     static testmethod void record()
           
     {
         
          Project__c Pr =  new Project__c();
      //  Pr.PoPupfield__c = 'test5';
        Pr.Project_End_Date__c = Date.newInstance(1988, 2, 17);
      //  Pr.Project_Name__c = 'AMES';
        
        insert pr;
       Test.startTest();
       try
      {
          Popup_Class.getProject(pr);
        
      }
      catch(exception e)
         {
           
         }     
        Test.stopTest();
 
     }
    
    static testmethod void projectNames()
    {
        map<string,string> getproject=Popup_Class.getProjectNameValue();
    }
     static testmethod void projectclient()
    {
        map<string,string> getClient=Popup_Class.getClientValue();
    }
    static testmethod void projectTeam()
    {
        map<string,string> getTeam=Popup_Class.getTeamLead();
        
    }
    static testmethod void projectstatus()
    {
        map<string,string> getstatus=Popup_Class.getStatus();
        
    }
    static testmethod void projectdelivery()
    {
        map<string,string> getDelivery=Popup_Class.getDelivery();
        
    }
    static testmethod void projectcycles()
    {
        map<string,string> getcycless=Popup_Class.cycles();
        
    }
    static testmethod void projectversion()
    {
        map<string,string> getversion=Popup_Class.version();
        
    }

}