package challenge5;

public class PaiementCash extends Paiement{
    public void effectuerPaiement(double montant) {
        System.out.println("Paiement  par Cash effectue " + montant + " euros.");
    }
}
