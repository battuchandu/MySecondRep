Public with sharing class Employee{
@AuraEnabled
Public static List<Alumni__c > getAllRecords(){
return[Select id,name from Alumni__c ];
}
@AuraEnabled
Public static Alumni__c saveAcc(Alumni__c recordDetail){
   Insert recordDetail;
   return recordDetail;
}

       @AuraEnabled
        Public static string sendmail(Alumni__c value) {   
        if(value.Working_Email__c != null){
        	List<Messaging.SingleEmailMessage> mails =  new List<Messaging.SingleEmailMessage>();
         Messaging.SingleEmailMessage mail =  new Messaging.SingleEmailMessage();
        
        List<String> sendTo = new List<String>();
      sendTo.add(value.Working_Email__c);
        mail.setToAddresses(sendTo);      
        mail.setSenderDisplayName('WissenInfotech');
        mail.setSubject('Wissen Alumni Event');
        mail.setHtmlBody('Thank you for registering Wissen Alumni Event. if you want to refer your colleagues Please find the link https://lightningsites-developer-edition.na153.force.com');
        mails.add(mail);
        Messaging.sendEmail(mails);
            
        }
        return 'success';
    }
}