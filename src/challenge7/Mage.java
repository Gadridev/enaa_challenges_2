package challenge7;

public class Mage extends Personnage {
    public Mage(String nom) {
        super(nom, 80);
    }

    public void attaquer() {
        System.out.println(nom + " lance un sort de feu et inflige 20 dégâts !");
    }
}