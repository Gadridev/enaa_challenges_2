package challenge6;

public class Camion extends Vehicule {
    public Camion(  String marque, int modele) {
        super(marque,modele);
    }
    public void  demarrer(){
        System.out.println("Le camion démarre avec un moteur puissant.");
    }
}
