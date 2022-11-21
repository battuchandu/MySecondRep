global class Batchdemo implements Database.Batchable<Sobject>,Database.Stateful {
    integer accnumber=0;
    global database.QueryLocator start(Database.BatchableContext bc){
        return database.getQueryLocator('select id,name,accountnumber from account');
    }
    global void execute(Database.BatchableContext bc,list<account>records)
    {
        for(account acc:records){
            acc.accountnumber=string.valueof(accnumber);
        }
        accnumber=accnumber+1;
        update records;
        }        
    global void finish(Database.BatchableContext BC){
        
    }
}