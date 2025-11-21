package challenge6;

public class Vehicule {
    private String marque;
    private int modele;

    public Vehicule(String marque, int modele) {
        this.marque = marque;
        this.modele = modele;
    }

    public void  demarrer(){
        System.out.println("demarrer");
    }
}
