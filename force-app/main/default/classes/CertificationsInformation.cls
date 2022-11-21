public class CertificationsInformation {    
    @AuraEnabled
                public static void send(List<String> eid)
                {
                List<Messaging.SingleEmailMessage> mailList = new List<Messaging.SingleEmailMessage>();
                for(Certification__c m :[SELECT Id, Wissen_Employees_ID__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,Certification_Expired_Date__c,Wissen_COE__c,Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Total_Certtifications_Count__c from Certification__c  WHERE Id IN : eid])
                {
                system.debug('send email---->'+m);
                List<String> toAddresses = new List<String>();
                Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                toAddresses.add(m.Certifications_Email__c);
                mail.setToAddresses(toAddresses);
                mail.setSubject('Record Creation');
                string body='Dear ';
                body=body+' '+m.certification_Names_del__c +' ,';
                
                body=body+'<br/> Your Record is created successfully';
                
                body=body+'<br/>Thanks&Regards,';
                body=body+'<br/>Saleforce COE Team';
                mail.setHtmlBody(body);
                mailList.add(mail);
                }
                Messaging.sendEmail(mailList);
                }
    
    @AuraEnabled(cacheable=true)
    public static List<Certification__c> getCertifications(){
     List<Certification__c> certificaitons=new List<Certification__c>();
        string query='Select Wissen_Employees_ID__c,emp_first_name1__c,Emp_last_name2__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,Wissen_COE__c,';
        query=query+'Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Certification_Expired_Date__c,';
        query=query+'Total_Certtifications_Count__c,Employee__c from Certification__c ';
        certificaitons=Database.query(query); 
       
   /*   List<Certification__c> certificaitons=[Select Wissen_Employees_ID__c,emp_first_name1__c,Emp_last_name2__c,Certifications_Email__c,
                      certification_Names_del__c,Certifications_Date__c,Expiry_Date__c,Total_Certtifications_Count__c,
                      Certification_Status__c,Employee__r.Certification_Count__c,
                      Date_of_Certification__c from Certification__c]; */
        
       // system.debug(certificaitons.size());
        return certificaitons; 
    }
    @AuraEnabled
 public static AccountPagerWrapper fetchAccount(Decimal pageNumber ,Integer recordToDisply) {
      Integer pageSize = recordToDisply;
      Integer offset = ((Integer)pageNumber - 1) * pageSize;
    
    // create a instance of wrapper class.
    AccountPagerWrapper obj =  new AccountPagerWrapper();
    // set the pageSize,Page(Number), total records and accounts List(using OFFSET)   
        obj.pageSize = pageSize;
        obj.page = (Integer) pageNumber;
        obj.total = [SELECT count() FROM Certification__c];
        obj.acc = [SELECT Id, Wissen_Employees_ID__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,Certification_Expired_Date__c,Wissen_COE__c,Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Total_Certtifications_Count__c FROM Certification__c ORDER BY Name LIMIT :recordToDisply OFFSET :offset];
    // return the wrapper class instance .
        return obj;
     }
    
    @AuraEnabled
    public static void DeleteRecord(List<Certification__c> DeleteIds) {
        List<Certification__c> delemp = new List<Certification__c>();
        for(Certification__c cer : [SELECT Id, Wissen_Employees_ID__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,Certification_Expired_Date__c,Wissen_COE__c,Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Total_Certtifications_Count__c FROM Certification__c WHERE Id IN : DeleteIds]){
            delemp.add(cer);
        }
         
        if(delemp.size() > 0){
            Delete  delemp;
        }
         
    }
      @AuraEnabled
    public static void DeleteRec(Certification__c DeleteIds)
    {
        delete DeleteIds;
    }
        

       
    
    @AuraEnabled(cacheable=true)
    public static List<Certification__c> getFilteredCertifications(String searchFilter,String searchText){
       system.debug(searchFilter);
       system.debug(searchText);
        List<Certification__c> certifications=new List<Certification__c>();
        string query='Select Wissen_Employees_ID__c,emp_first_name1__c,Emp_last_name2__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,';
        query=query+'Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Certification_Expired_Date__c,Wissen_COE__c,';
        query=query+'Total_Certtifications_Count__c,Employee__c from Certification__c ';
        String whereClause=' ';
        if(searchFilter=='certification_Names_del__c' || searchFilter=='Certification_Status__c'){
            whereClause=' where '+searchFilter+'= \''+searchText+'\'';
            query=query+whereClause;
        }else if(searchFilter=='Total_Certtifications_Count__c'){
        	Integer count=Integer.valueOf(searchText);
         	whereClause=' where '+searchFilter+'= '+count+' ';
            query=query+whereClause;
        }
        else{
             whereClause=' where '+searchFilter+' LIKE \'%'+searchText+'%\' ';
             query=query+whereClause;
        }
        //system.debug(query);
        certifications=Database.query(query); 
        return certifications;      
    }
    
    @AuraEnabled(cacheable=true)
    Public static List<Certification__c>  getEmployeeCertifications(String empId){
        //system.debug(empId);
    	List<Certification__c> empCertifications=new List<Certification__c>();
        string query='Select Wissen_Employees_ID__c,emp_first_name1__c,Emp_last_name2__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,';
        query=query+'Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Certification_Expired_Date__c,Wissen_COE__c,';
        query=query+'Total_Certtifications_Count__c,Employee__c from Certification__c where Employee__c=\''+empId +'\' ';
        empCertifications=Database.query(query);
       return empCertifications;
       
    }
    @AuraEnabled(cacheable=true)
    public static List<Employees__c> getEmpFilterCertifications(String searchFilter,String searchText){        
        
        String searchT=searchText.replace(',',';');
        //system.debug('replace:'+searchT);      
        List<Employees__c> employees=[Select Id,Name,Awards_Given_By__c,Full_Name__c,Awards__c,Bench__c,Birth_Date_DD_MM_YYYY__c,Category__c,
         					Certification_Count__c,Company_Contact_Number__c,Company_Location__c,Date_Of_Birth__c,
       						Date_Of_Joining__c,Designation__c,Emp_status__c,FTE_TM__c,Gender__c,Joining_Date__c,Last_Name__c,
        					Leave_Plan_For_Next_Three_Months__c,Level__c,Other_Experience_Domain__c,Other_Experience__c,Personal_Email__c,
        					PrimaryContactNumber__c,Primary_Contact__c,
        					Secondary_Contact_Number__c,WissenInfotech_Experience__c,Wissen_Employee_ID__c,Working_Email__c,
          					Wissen_Domain_CEO__c,
                            Certification_Name__c,Laptop_Assign__c,Laptop_Details__c from Employees__c WHERE Certification_Name__c INCLUDES (:searchT) ];
        //system.debug(employees);
        return employees;
    }
     public class AccountPagerWrapper {
    @AuraEnabled public Integer pageSize {get;set;}
    @AuraEnabled public Integer page {get;set;}
    @AuraEnabled public Integer total {get;set;}
    @AuraEnabled public List<Certification__c> acc {get;set;}
   }
     @AuraEnabled(cacheable=true)
    public static List<Certification__c> fEmployees(Filters filters){
        String key='';
        String whereClause='';
        string eName=filters.name;
        List<string> status=filters.status;
        List<String> coe=filters.wissenCoe;
        system.debug('coe:'+filters.wissenCoe.isEmpty());
        List<String> cer=filters.Certification;
       List<String> Email=filters.email;
          
        List<String> criteria=new List<String>();
        if(filters!=null){
            if(!String.isEmpty(filters.name)){
                 key= '\''+eName+'%\'';
                if(eName.isNumeric()){
                    criteria.add('Wissen_Employees_ID__c LIKE \''+eName+'%\'');
                    // system.debug('ename  is numeric');
                }else{
                    // system.debug('ename is string');
                    criteria.add('Full_Name__c LIKE \'%'+eName+'%\'');
                }
                
            }
            if(!coe.isEmpty()){
                criteria.add('Wissen_COE__c IN :coe');
            }
            if(!cer.isEmpty()){
                criteria.add('certification_Names_del__c IN :cer');
            }
            if(!status.isEmpty()){
                criteria.add('Certification_Status__c IN :status');
            }
           
            if(!Email.isEmpty()){
                criteria.add('Certifications_Email__c IN :Email');
            }
            
        }
        List<Certification__c> cers=new List<Certification__c>();    
        // String eName,eDes,eStatus,eDomain,eCat;       
        string query='Select Wissen_Employees_ID__c,emp_first_name1__c,Emp_last_name2__c,Full_Name__c,Certifications_Email__c,certification_Names_del__c,Wissen_COE__c,';
        query=query+'Date_of_Certification__c,Certification_Status__c,Expiry_Date__c,Certification_Expired_Date__c,';
        query=query+'Total_Certtifications_Count__c,Employee__c from Certification__c ';    	
        system.debug('where:'+whereClause);
        query=query+''+whereClause;
        cers=Database.query(query);
        system.debug('size:'+cers.size());
        system.debug(cers);     
        return cers;
    }
     public class Filters{
        @AuraEnabled
        public String name{set;get;}
        @AuraEnabled
        public List<String> wissenCoe{set;get;}
        @AuraEnabled
        public List<String> Certification{set;get;}
        @AuraEnabled
        public List<String> status{set;get;}
        @AuraEnabled
        public List<String> email{set;get;}

    }
    

}