package challenge7;

public class Archer extends Personnage {
    public Archer(String nom) {
        super(nom, 90);
    }
    @Override
    public void attaquer() {
        System.out.println(nom + " tire une flèche et inflige 10 dégâts !");
    }
}
