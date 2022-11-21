public class SendCelebrationEmail123 {

                    @AuraEnabled
                public static List<Employees__c> cont(){
                List<Employees__c> c = [SELECT Id, Name, Working_Email__c FROM Employees__c where Date_Of_Birth__c =TODAY ];
                return c;
                }
                
                @AuraEnabled
                public static void send(List<String> eid)
                {
                List<Messaging.SingleEmailMessage> mailList = new List<Messaging.SingleEmailMessage>();
                for(Employees__c m :[SELECT Id, Name, Working_Email__c FROM Employees__c WHERE Id IN : eid])
                {
                system.debug('send email---->'+m);
                List<String> toAddresses = new List<String>();
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                toAddresses.add(m.Working_Email__c);
                mail.setToAddresses(toAddresses);
                mail.setSubject('Happy Birthday!!!');
                string body='Dear ';
                body=body+' '+m.name+' ,';
                
                body=body+'<br/>Your birthday is a very special day that could not go unnoticed by us and that is why we extend our warmest congratulations on behalf of the entire organization. We are all excited to have you as part of the team and we want you to know how much we value you.On behalf of Wissen Management, we send you a warm greeting on your birthday and wish you every success and happiness in your life.Happy Birthday!!!Happy Birthday';
                
                body=body+'<br/>Thanks&Regards,';
                body=body+'<br/>Saleforce COE Team';
                mail.setHtmlBody(body);
                mailList.add(mail);
                }
                Messaging.sendEmail(mailList);
                }

}