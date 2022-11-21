@isTest
public class customLookupControllerTest {
    
    @isTest
    static void fetchLookUpValuesTest(){
        Account acc = new Account();
        acc.Name = 'Test';
        insert acc;
        List <sObject> lookupTest =  customLookUpController.fetchLookUpValues(acc.Name, 'Account');
        System.assert(lookupTest.size()>0);
    }
}