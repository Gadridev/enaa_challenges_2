import challenge3.Animal;
import challenge3.Chat;
import challenge3.Chien;
import challenge5.Paiement;
import challenge7.Archer;
import challenge7.Guerrier;
import challenge7.Mage;
import challenge7.Personnage;
import challenge1.Cercle;
import challenge1.Forme;
import challenge1.Rectangle;
import challenge1.Triangle;

import java.util.ArrayList;
import java.util.List;

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
        System.out.println("--------------------------------------------------");
        List<Personnage> personnages=new ArrayList<>();
        personnages.add(new Guerrier("Aragon"));
        personnages.add(new Archer("Lia"));
        personnages.add(new Mage("Aragon"));
        for (Personnage p:personnages){
           p.attaquer();
        }

    }

}