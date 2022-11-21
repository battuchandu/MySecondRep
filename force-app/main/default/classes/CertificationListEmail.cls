public class CertificationListEmail {
               @AuraEnabled
                public static List<Certification__c> cont(){
                List<Certification__c> c = [SELECT Id, certification_Names_del__c,Full_Name__c,Wissen_Employees_ID__c, Certifications_Email__c FROM Certification__c];
                return c;
                }
                
                @AuraEnabled
                public static void send(List<String> eid)
                {
                List<Messaging.SingleEmailMessage> mailList = new List<Messaging.SingleEmailMessage>();
                for(Certification__c m :[SELECT Id, Full_Name__c, Certifications_Email__c FROM Certification__c WHERE Id IN : eid])
                {
                system.debug('send email---->'+m);
                List<String> toAddresses = new List<String>();
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                toAddresses.add(m.Certifications_Email__c);
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