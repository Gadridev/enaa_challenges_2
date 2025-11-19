import challenge3.Animal;
import challenge3.Chat;
import challenge3.Chien;
import challenges.Cercle;
import challenges.Forme;
import challenges.Rectangle;
import challenges.Triangle;

import java.util.ArrayList;

public class Main {
    public static void main() {
        Rectangle r=new Rectangle(3,4);
        r.calculerAire();
        r.afficherCircle();
        Cercle c=new Cercle(23);
        c.calculerAire();
        c.afficherCircle();
        Forme [] formes =new Forme[3];
        formes[0]=new Rectangle(3,4);
        formes[1]=new Cercle(43);
        formes[2]=new Triangle(8,4);
        for (Forme f:formes){
            System.out.println("formes c'est :"+f.calculerAire());
        }
        System.out.println("--------------------------------------------------");
        Chien a=new Chien("aw aw aw");
        Chat chat=new Chat("miaw miaw miaw");
        ArrayList<Animal> animals=new ArrayList<>();
        animals.add(a);
        animals.add(chat);
        for (Animal an:animals){
            an.faireSon();
        }
    }
}