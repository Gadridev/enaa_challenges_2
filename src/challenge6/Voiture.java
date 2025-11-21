package challenge6;

public class Voiture extends Vehicule{
    public Voiture(  String marque, int modele) {
        super(marque,modele);
    }
    public void  demarrer(){
        System.out.println("La voiture démarre avec une clé.");
    }
}
