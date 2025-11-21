package challenge6;

public class Moto extends Vehicule {
    public Moto(  String marque, int modele) {
        super(marque,modele);
    }
    public void  demarrer(){
        System.out.println("La moto démarre avec un bouton.");
    }
}
