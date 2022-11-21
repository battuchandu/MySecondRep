public class EmployeeInformation {
    
    @AuraEnabled
    
    public static list<Employees__c> dateFilters(date startdate,date endDate)
    {
         Date start = Date.valueOf(startdate);
         Date endda = Date.valueOf(endDate);
        
        list<Employees__c> opp=[select id,Wissen_Employee_ID__c,Full_Name__c,Designation__c,PrimaryContactNumber__c,Emp_status__c,Wissen_Domain_CEO__c,Date_Of_Joining__c from Employees__c where Date_Of_Joining__c>=:startdate and Date_Of_Joining__c<=:endDate];
        return opp;
        
    }
         @AuraEnabled
    public static list<Employees__c> date()
    {
        list<Employees__c> opp1=[select id,Wissen_Employee_ID__c,Full_Name__c,Designation__c,Emp_status__c,PrimaryContactNumber__c,Wissen_Domain_CEO__c,Date_Of_Joining__c from Employees__c ];
        return opp1;
        
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

     @AuraEnabled
    public static void SubmitForApproval(Id localId){
        system.debug('ids'+localId);
        Approval.ProcessSubmitRequest req1 =
            new Approval.ProcessSubmitRequest();
        req1.setComments('Submitting request for approval.');
        req1.setObjectId(localId);
        system.debug('req'+req1);
        
        // Submit the approval request for the account
        
        Approval.ProcessResult result = Approval.process(req1);
        
        // Verify the result
        
        System.assert(result.isSuccess());
        
        System.assertEquals(
            'Pending', result.getInstanceStatus(),
            'Instance Status'+result.getInstanceStatus());   
        
    }
    @AuraEnabled(cacheable=true)
    public static List<Employees__c> getEmployees(){
        List<Employees__c> employees=new List<Employees__c>();
        String query='Select Id,Emp_status__c,Name,Full_Name__c,Awards_Given_By__c,Awards__c,Bench__c,Birth_Date_DD_MM_YYYY__c,Category__c,';
        query=query+'Certification_Count__c,Company_Contact_Number__c,Company_Location__c,Date_Of_Birth__c,';
        query=query+'Date_Of_Joining__c,Designation__c,FTE_TM__c,Gender__c,Joining_Date__c,Last_Name__c,';
        query=query+'Leave_Plan_For_Next_Three_Months__c,Level__c,Other_Experience_Domain__c,Other_Experience__c,Personal_Email__c,';
        query=query+'Prev_Admin_Experience__c,Prev_Development_Experience__c,PrimaryContactNumber__c,Primary_Contact__c,TotalITExp__c,';
        query=query+'Secondary_Contact_Number__c,WissenInfotech_Experience__c,Wissen_Employee_ID__c,Working_Email__c,';
        query=query+'Total_Admin_Experience__c,Total_Developer_Experience__c,Role__c,';
        query=query+'Wissen_Domain_CEO__c from Employees__c ';
        system.debug(query);
        employees=Database.query(query);
        //system.debug(employees);
        return employees;
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
        obj.total = [SELECT count() FROM Employees__c];
        obj.acc = [select Id,Wissen_Employee_ID__c,Emp_status__c,Full_Name__c,Company_Location__c,Date_Of_Joining__c,Joining_Date__c,Designation__c,PrimaryContactNumber__c,Category__c,Prev_Admin_Experience_FM__c,Total_Admin_Experience__c,Total_Developer_Experience__c,Wissen_Domain_CEO__c,Prev_Development_Experience__c,Other_Experience__c,TotalITExp__c,Approval_Status__c FROM Employees__c ORDER BY Name LIMIT :recordToDisply OFFSET :offset];
        // return the wrapper class instance .
        return obj;
    }
    @AuraEnabled
    public static void delEmployee(Employees__c empdel){
        delete empdel;
    } 
    
    @AuraEnabled(cacheable=true)
    public static List<Employees__c> getFilteredEmployees(String searchFilter,String searchText1,String searchText2){
        List<Employees__c> employees=new List<Employees__c>();        
        //system.debug(query);
        if(searchFilter!=null && searchText1!=null){
            String query='Select Id,Name,Full_Name__c,Emp_status__c,Awards_Given_By__c,Awards__c,Bench__c,Birth_Date_DD_MM_YYYY__c,Category__c,';
            query=query+'Certification_Count__c,Company_Contact_Number__c,Company_Location__c,Date_Of_Birth__c,';
            query=query+'Date_Of_Joining__c,Designation__c,FTE_TM__c,Gender__c,Joining_Date__c,Last_Name__c,';
            query=query+'Leave_Plan_For_Next_Three_Months__c,Level__c,Other_Experience_Domain__c,Other_Experience__c,Personal_Email__c,';
            query=query+'Prev_Admin_Experience__c,Prev_Development_Experience__c,PrimaryContactNumber__c,Primary_Contact__c,TotalITExp__c,';
            query=query+'Secondary_Contact_Number__c,WissenInfotech_Experience__c,Wissen_Employee_ID__c,Working_Email__c,';
            query=query+'Total_Admin_Experience__c,Total_Developer_Experience__c,Role__c,';
            query=query+'Prev_Admin_Experience_FM__c,Prev_Development_Experience_FM__c,Orther_Exp_Fp__c,Wissen_Domain_CEO__c from Employees__c ';
            String whereClause='';
            
            if(searchFilter=='Total_Admin_Experience__c' ||searchFilter=='Total_Developer_Experience__c' ||
               searchFilter=='TotalITExp__c' || searchFilter=='Prev_Admin_Experience_FM__c' || 
               searchFilter=='Prev_Development_Experience_FM__c'){
                   //system.debug('===>'+searchFilter);
                   Decimal value1=Decimal.valueOf(searchText1);
                   Decimal value2=Decimal.valueOf(searchText2);
                   whereClause='where '+searchFilter+' >='+value1+' AND '+searchFilter+'<='+value2;
                   //system.debug(whereClause);
                   query=query+''+whereClause;
               }
            else {
                whereClause='where '+searchFilter+' LIKE \''+searchText1+'%\' ';
                query=query+''+whereClause;
                
            }
            /* else{
whereClause='where '+searchFilter+' LIKE \'%'+searchText1+'%\' ';
query=query+''+whereClause;
}*/
            employees=Database.query(query);
        }
        
        // system.debug(employees.size());
        return employees;
    }
     @AuraEnabled(cacheable=true)
    public static List<Employees__c> fEmployees(Filters filters){
        String key='';
        String whereClause='';
        string eName=filters.name;
        List<string> status=filters.empStatus;
        List<String> des=filters.designation;
        system.debug('des:'+filters.designation.isEmpty());
        List<String> locs=filters.empLocation;
        List<String> doms=filters.empDomain;
        List<String> cats=filters.empCategory;
        Map<String,Map<String,String>> exp=filters.empExp;    
        List<String> criteria=new List<String>();
        if(filters!=null){
            if(!String.isEmpty(filters.name)){
                // key= '\''+eName+'%\'';
                if(eName.isNumeric()){
                    criteria.add('Wissen_Employee_ID__c LIKE \''+eName+'%\'');
                    // system.debug('ename  is numeric');
                }else{
                    // system.debug('ename is string');
                    criteria.add('Full_Name__c LIKE \'%'+eName+'%\'');
                }
                
            }
            if(!des.isEmpty()){
                criteria.add('Designation__c IN :des');
            }
            if(!locs.isEmpty()){
                criteria.add('Company_Location__c IN :locs');
            }
            if(!status.isEmpty()){
                criteria.add('Emp_status__c IN :status');
            }
            if(!doms.isEmpty()){
                criteria.add('Wissen_Domain_CEO__c IN :doms');
            }
            if(!cats.isEmpty()){
                criteria.add('Category__c IN :cats');
            }
            if(!String.isBlank(exp.get('pAdmin').get('eFrom'))){      
                Decimal exp1=Decimal.valueOf(exp.get('pAdmin').get('eFrom'));
                Decimal exp2=Decimal.valueOf(exp.get('pAdmin').get('eTo'));
                criteria.add('(Prev_Admin_Experience_FM__c >='+exp1+' AND Prev_Admin_Experience_FM__c <='+exp2+' )');             
            }
            if(!String.isBlank(exp.get('pDev').get('eFrom'))){
                Decimal exp1=Decimal.valueOf(exp.get('pDev').get('eFrom'));
                Decimal exp2=Decimal.valueOf(exp.get('pDev').get('eTo'));
                criteria.add('(Prev_Development_Experience_FM__c >='+exp1+' AND Prev_Development_Experience_FM__c <='+exp2+' )');            
            }
            if(!String.isBlank(exp.get('oexp').get('eFrom'))){
                Decimal exp1=Decimal.valueOf(exp.get('oexp').get('eFrom'));
                Decimal exp2=Decimal.valueOf(exp.get('oexp').get('eTo'));
                criteria.add('(Orther_Exp_Fp__c >='+exp1+' AND Orther_Exp_Fp__c <='+exp2+' )');
                
            }
            if(!String.isBlank(exp.get('tAdmin').get('eFrom'))){
                Decimal exp1=Decimal.valueOf(exp.get('tAdmin').get('eFrom'));
                Decimal exp2=Decimal.valueOf(exp.get('tAdmin').get('eTo'));
                criteria.add('(Total_Admin_Experience__c >='+exp1+' AND Total_Admin_Experience__c <='+exp2+' )');             
            }
            if(!String.isBlank(exp.get('tDev').get('eFrom'))){
                Decimal exp1=Decimal.valueOf(exp.get('tDev').get('eFrom'));
                Decimal exp2=Decimal.valueOf(exp.get('tDev').get('eTo'));
                criteria.add('(Total_Developer_Experience__c >='+exp1+' AND Total_Developer_Experience__c <='+exp2+' )');               
            }
            if(!String.isBlank(exp.get('tIT').get('eFrom'))){
                Decimal exp1=Decimal.valueOf(exp.get('tIT').get('eFrom'));
                Decimal exp2=Decimal.valueOf(exp.get('tIT').get('eTo'));
                criteria.add('(TotalITExp__c >='+exp1+' AND TotalITExp__c <='+exp2+' )');               
            }           
            if(criteria.size()>0){
                whereClause=' WHERE '+String.join(criteria,' AND ');
            }
        }
        List<Employees__c> emps=new List<Employees__c>();    
        // String eName,eDes,eStatus,eDomain,eCat;       
        String query='Select Id,Name,Full_Name__c,Awards_Given_By__c,Awards__c,Bench__c,Birth_Date_DD_MM_YYYY__c,Category__c,';
        query=query+'Certification_Count__c,Company_Contact_Number__c,Company_Location__c,Date_Of_Birth__c,';
        query=query+'Date_Of_Joining__c,Designation__c,Emp_status__c,FTE_TM__c,Gender__c,Joining_Date__c,Last_Name__c,';
        query=query+'Leave_Plan_For_Next_Three_Months__c,Level__c,Other_Experience_Domain__c,Other_Experience__c,Personal_Email__c,';
        query=query+'Prev_Admin_Experience__c,Prev_Development_Experience__c,PrimaryContactNumber__c,Primary_Contact__c,TotalITExp__c,';
        query=query+'Secondary_Contact_Number__c,WissenInfotech_Experience__c,Wissen_Employee_ID__c,Working_Email__c,';
        query=query+'Total_Admin_Experience__c,Total_Developer_Experience__c,Role__c,';
        query=query+'Prev_Admin_Experience_FM__c,Prev_Development_Experience_FM__c,Orther_Exp_Fp__c,Wissen_Domain_CEO__c from Employees__c ';       	
        system.debug('where:'+whereClause);
        query=query+''+whereClause;
        emps=Database.query(query);
        system.debug('size:'+emps.size());
        system.debug(emps);     
        return emps;
    }
    public class Filters{
        @AuraEnabled
        public String name{set;get;}
        @AuraEnabled
        public List<String> designation{set;get;}
        @AuraEnabled
        public List<String> empStatus{set;get;}
        @AuraEnabled
        public List<String> empDomain{set;get;}
        @AuraEnabled
        public List<String> empLocation{set;get;}
        @AuraEnabled
        public List<String> empCategory{set;get;}
        @AuraEnabled
        public Map<String,Map<String,String>> empExp{set;get;}
        
    }
    public class AccountPagerWrapper {
        @AuraEnabled public Integer pageSize {get;set;}
        @AuraEnabled public Integer page {get;set;}
        @AuraEnabled public Integer total {get;set;}
        @AuraEnabled public List<Employees__c> acc {get;set;}
    }
    
}