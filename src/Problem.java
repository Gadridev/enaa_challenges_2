import java.util.Scanner;

public class Problem {

    public void challenge1() {
        Scanner s = new Scanner(System.in);
        System.out.print("Donnez moi ton consomation");
        int consomation = s.nextInt();
        double beforeTax = 0;
        double afterTax;
        if (consomation <= 100) {
            beforeTax = consomation * 0.8;
        } else if (consomation <= 200) {
            beforeTax = (100 * 0.8) + ((consomation - 100) * 1.2);
        } else {
            beforeTax = 100 * 0.8 + 100 * 1.2 + ((consomation - 200) * 1.5);
        }
        double tax = beforeTax * 10 / 100;
        double total = beforeTax + tax;
        System.out.print("Facture avant taxe : \n" + beforeTax);
        System.out.print("Tax 10% \n" + tax);
        System.out.print("Facture totale : \n" + total);
    }
    public void challenge2(){
        Scanner s = new Scanner(System.in);
        System.out.println("Donnez des directions (UP - DOWN - LEFT - RIGHT). Tapez STOP pour terminer.");
        int x = 0;
        int y = 0;
        while (true) {
            String direction = s.next();
            if(direction.equals("STOP")){
                break;
            }
            if (direction.equals("UP")) {
                y += 1;
            } else if (direction.equals("DOWN")) {
                y -= 1;
            } else if (direction.equals("RIGHT")) {
                x += 1;
            } else if (direction.equals("LEFT")) {
                x -= 1;
            } else {
                System.out.println("Direction invalide!");
            }
        }
        System.out.println("Position finale : (" + x + "," + y + ")");
    }
}