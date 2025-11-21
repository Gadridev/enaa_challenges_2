package challenge7;

public class Guerrier extends Personnage {
    public Guerrier(String nom) {
        super(nom, 100);
    }

    public void attaquer() {
        int degate=10;

        System.out.println(nom + " attaque avec son épée et inflige 15 dégâts !");
    }
}
