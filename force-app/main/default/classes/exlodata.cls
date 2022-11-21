@RestResource(UrlMapping='/accountapi/*')
Global class exlodata {
    @httpget
    Global static  list<account>allaccounts(){
        return[select id ,name from account];
    }

}