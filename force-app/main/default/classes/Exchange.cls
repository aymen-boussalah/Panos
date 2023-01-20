/**
 * @description       : 
 * @author            : Boussalah Aymen
 * @group             : 
 * @last modified on  : 01-18-2023
 * @last modified by  : Boussalah Aymen
**/
public class Exchange {
    @AuraEnabled
    public static object makeGetCallOut(String fromm,String to,double amount){
        object result=0;
        Http http=new Http();
        HttpRequest request=new HttpRequest();
        request.setEndPoint('https://api.apilayer.com/currency_data/convert?to='+to+'&from='+fromm+'&amount='+amount);
        request.setHeader('apiKey','lQrLu0C696D1auhOf2CAd4bLjA01zoYY');
        request.setMethod('GET');
        HTTPResponse res = http.send(request);
        if(res.getStatusCode() == 200) {
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            result=results.get('result');
            System.debug('------'+result);
        }
         return result;

    }


}