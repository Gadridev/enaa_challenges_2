package challenges;

public class Rectangle extends Forme {
    private int largeur;
    private int hauteur;
    public Rectangle(int largeur, int hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    public double calculerAire(){
        return this.hauteur * this.largeur;
    }
    public void afficherCircle() {
        System.out.println("L'Rectange : : " + calculerAire());
    }
}
