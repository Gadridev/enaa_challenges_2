package challenges;

public class Cercle extends Forme {
    private int rayon;

    public double calculerAire(){
        return rayon * 3.14;
    }
    public Cercle(int rayon) {
        this.rayon = rayon;
    }
    public void afficherCircle() {
        System.out.println("Circle est : " + calculerAire());
    }
}
