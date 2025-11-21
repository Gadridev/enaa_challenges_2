package challenge8;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void notifytous(List<Notification>list,String msg){
        for (Notification n:list){
            n.envoyer(msg);
        }

    }
    public static void main(){
        List<Notification> list=new ArrayList<>();
        list.add(new EmailNotification());
        list.add(new PushNotification());
        list.add(new SmsNotification());
        notifytous(list,"Votre Commande a arrive");
    }
}
