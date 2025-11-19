package challenge5;

public class PaiementCarte extends Paiement {

    public void effectuerPaiement(double montant) {
        System.out.println("Paiement par carte effectué : " + montant + " euros.");
    }
}
