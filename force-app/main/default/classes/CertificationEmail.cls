global class CertificationEmail implements Database.Batchable<sObject>{
    global Database.QueryLocator start(Database.BatchableContext bc) {
        Date d = Date.today();
        Date expiryOne = System.today()+30;
        Date expiryTwo = System.today()+7;
        Date expiryThree = System.today()+3;
        String soql = 'SELECT Id, CreatedById,Manager_Email_id__c,Certifications_Email__c,Certification_Expired_Date__c,emp_first_name1__c,Emp_last_name2__c,certification_Names_del__c, Employee__c,Expiry_Date__c FROM Certification__c where Expiry_Date__c=:expiryOne OR Expiry_Date__c=:expiryTwo OR Expiry_Date__c=:expiryThree OR Expiry_Date__c=:d';
        return Database.getQueryLocator(soql);
    }
    global void execute(Database.BatchableContext bc, List<Certification__c> recs) {
        List<Messaging.SingleEmailMessage> mailList = new List<Messaging.SingleEmailMessage>(); 
        for(Certification__c m : recs) { 
            List<String> toAddresses = new List<String>();
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            toAddresses.add(m.Certifications_Email__c);
            mail.setToAddresses(toAddresses);
            list<string> ccaddress = new list<string>();
            ccaddress.add(m.Manager_Email_id__c);
            mail.setCcAddresses(ccaddress); 
            mail.setSubject('Certificate will expired');
            string body='Dear '; body=body+' '+m.emp_first_name1__c+' '+m.Emp_last_name2__c+' ,';
            body=body+'<br/>Your'+' '; 
            body=body+''+m.certification_Names_del__c+ 'Certificate will be Expired on...'+' '+m.Certification_Expired_Date__c+' ,';
            body=body+'Kindly Maintain your Certification.';body=body+'<br/>Thanks&Regards,'; body=body+'<br/>Saleforce COE Team'; mail.setHtmlBody(body);mailList.add(mail); } Messaging.sendEmail(mailList);
    }
    global void finish(Database.BatchableContext bc) {}}