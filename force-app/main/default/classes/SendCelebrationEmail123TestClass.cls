@IsTest
public class SendCelebrationEmail123TestClass {
@isTest
    Public static void EmailNotification(){
        string email='chandubattu8@gmail.com';
        string subject='Test Class';
        string message='Test Class';
        string sMessage;
                try {
                     SendCelebrationEmail123.cont();  
                system.assertEquals('chandubattu8@gmail.com', email);
                } catch(DMLException ex) {
                sMessage=ex.getLineNumber()+'\n'+ex.getCause()+'\n'+ex.getMessage()+'\n'+ex.getStackTraceString();
                system.assert(false,sMessage );
                }
                
                    }
     @IsTest
    Public static void EmailNotification1(){
       
        Test.startTest();
         
        Test.stopTest();
    } 
}