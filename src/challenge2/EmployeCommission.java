package challenge2;

public class EmployeCommission extends Employe {
    private int ventes;
    private double commission;

    public EmployeCommission(String nom,double salaireBase,int ventes, double commission) {
        super(nom, salaireBase);
        this.ventes = ventes;
        this.commission = commission;
    }
    public double calculerSalaire() {
        return getSalaireBase()+(commission*ventes);
    }
}
