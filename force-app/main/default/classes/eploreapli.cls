@RestResource(Urlmapping='/accountrestapi/*')
global class eploreapli {
    @httppost
    global static void insertdata(string accname,string  accphone,integer accprice){
        account ac=new account();
        ac.name=accname;
        ac.phone=accphone;
        ac.price__c=accprice;
            insert ac;

    }

}