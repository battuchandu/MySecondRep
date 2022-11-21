trigger SendEmail on Alumni__c (before insert) {
List<Messaging.SingleEmailMessage> mails = 
  new List<Messaging.SingleEmailMessage>();
  
  for (Alumni__c myContact : Trigger.new) {
    if (myContact.Working_Email__c != null) {
      Messaging.SingleEmailMessage mail = 
      new Messaging.SingleEmailMessage();

 List<String> sendTo = new List<String>();
      sendTo.add(myContact.Working_Email__c);
      mail.setToAddresses(sendTo);
    
     
      mail.setReplyTo('venkatsfdc725@gmail.com');
      mail.setSenderDisplayName('WissenInfotech Pvt Ltd');
      mail.setSubject('WissenInfotech Alumni Event');
     
      mail.setHtmlBody('Thank you for registering Wissen Alumni Event.');
       mails.add(mail);
    }
  }
 
  Messaging.sendEmail(mails);
}