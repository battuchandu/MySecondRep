public class CertificationDuplication {
public  static void Certification(List<Certification__c> contactList ){
	Set<String> newEmailSet = new Set<String>();
    Set<String> existingEmailSet = new Set<String>();
	contactList = new List<Certification__c>();
	 for ( Certification__c con : contactList ){
      if ( con.certification_Names_del__c != null ) {newEmailSet.add(con.certification_Names_del__c); }
    }
 List<Certification__c> existingContactList = [Select Id, certification_Names_del__c From Certification__c 
                                         Where certification_Names_del__c IN: newEmailSet AND certification_Names_del__c != null];
for (Certification__c con : existingContactList ) { existingEmailSet.add(con.certification_Names_del__c); }
	 for ( Certification__c con : contactList ) { // the list we are inserting or updating
        if ( existingEmailSet.contains( con.certification_Names_del__c ) ) {con.certification_Names_del__c.AddError(' Duplicate certification Names is not Allowed ');
        } else {existingEmailSet.add(con.certification_Names_del__c);  }
		}
	}
	}