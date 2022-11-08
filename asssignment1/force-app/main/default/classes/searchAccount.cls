public with sharing class searchAccount {

    @AuraEnabled(Cacheable=true)
     public static List<Account> getAccountData(String textkey) {
            textkey = '%' + textkey + '%';
            List<Account> accList = [SELECT  Id, Name, Industry, Website From Account WHERE Name LIKE :textkey];
            if(accList.isEmpty()) {
                throw new AuraHandledException('No Record Found..');
            }
            return accList;
        }
    }







         