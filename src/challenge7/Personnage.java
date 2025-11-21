package challenge7;

public class Personnage {
    String nom;
    int pointsDeVie;

    public Personnage(String nom, int pointsDeVie) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
    }

    public void attaquer() {
        System.out.println(nom + " attaque !");
    }
}




