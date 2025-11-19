package challenge4;

public class CompteEpargne extends Compte {
    private double tauxInteret;

    public CompteEpargne(double solde,int numero,double tauxInteret) {
        super(solde,numero);
        this.tauxInteret = tauxInteret;
    }

    public double appliquerInteret(){
        return tauxInteret * getSolde();
    }
}
