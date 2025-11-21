package challenge5;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void traiterPaiement(Paiement p,double montant){
        p.effectuerPaiement(montant);
    }
    public static void main(){
        traiterPaiement(new PaiementCarte(),200);
        traiterPaiement(new PaiementVirement(),300);
        traiterPaiement(new PaiementCash(),400);
    }

}
