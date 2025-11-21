package challenge5;

public class PaiementVirement extends Paiement{
    public void effectuerPaiement(double montant) {
        System.out.println("Paiement par carte Virement : " + montant + " euros.");
    }

}
