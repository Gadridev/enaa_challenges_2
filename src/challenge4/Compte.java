package challenge4;

public class Compte {
    private int numero;
    private double solde;

    public Compte(double solde,int numero) {
        this.numero = numero;
        this.solde = solde;
    }

    public void verser(double montant){
        if(montant>0) {
             solde += montant;
        }else{
            System.out.println("Montant invalide");
        }
    }
    public void retirer(double montant){
        if (montant <= solde) {
            solde -= montant;
            System.out.println("Retrait de " +solde);
        } else {
            System.out.println("Solde insuffisant!");
        }
    }
    public double getSolde() {
        return solde;
    }
    public void setSolde(double solde) {
        this.solde = solde;
    }
}
