package challenge8;

public class EmailNotification extends Notification {
    @Override
    public void envoyer(String message) {
        System.out.println("Email Notification:"+message);
    }
}
