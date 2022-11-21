public class EmployeeListEmail {
 @AuraEnabled
                public static List<Employees__c> cont(){
                List<Employees__c> c = [SELECT Id, Full_Name__c,Wissen_Employee_ID__c, Working_Email__c FROM Employees__c];
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
                mail.setSubject('Record Creation');
                string body='Dear ';
                body=body+' '+m.name+' ,';
                
                body=body+'<br/> Your Record is created successfully';
                
                body=body+'<br/>Thanks&Regards,';
                body=body+'<br/>Saleforce COE Team';
                mail.setHtmlBody(body);
                mailList.add(mail);
                }
                Messaging.sendEmail(mailList);
                }

}