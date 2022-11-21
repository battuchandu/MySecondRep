Global class CL_CurrencyCon implements Database.Batchable<sobject>,Database.AllowsCallouts
{
   Global Database.QueryLocator start(Database.BatchableContext bc)
   {
       String query = 'Select id,Amount,INR_Value__c from Opportunity';
       return Database.getQueryLocator(query);
           
   }
    
    Global Void Execute(Database.BatchableContext bc, List<opportunity> scope)
    {
        String ep ='http://api.apilayer.com/currency_data/live?apikey=EPHjL3vuIncfMXJ7cN2JGViD90zNQviE&source=USD&currencies=inr';
        Http p = New Http();
        HttpRequest rq = new HttpRequest();
        rq.setTimeout(60000);
        rq.setEndpoint(ep);
        rq.setMethod('GET');
        
        HttpResponse rs = p.send(rq);
        String result = rs.getBody();
        
        
        system.JSONParser jp =JSON.createParser(result);
        Decimal amt;
        
        While(jp.nextToken()!=null)
        {
            if(jp.getText()=='USDINR')
            {
                jp.nextToken();
                amt = (Decimal) jp.getDecimalValue();
            }
        }
        for (Opportunity op:scope)
        {
            if(op.Amount != null)
            {
               op.INR_Value__c = 'RS.' + (amt*op.Amount) ;
            }
        }
        Update scope;
    }
    
    Global Void Finish(Database.BatchableContext bc)
    {
        
    }
    
}