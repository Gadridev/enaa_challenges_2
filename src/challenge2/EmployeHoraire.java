package challenge2;

public class EmployeHoraire extends Employe {
    private int heuresTravaillees;
    private int tauxHoraire;

    public EmployeHoraire(String nom,double salaireBase,int heuresTravaillees, int tauxHoraire) {
        super(nom, salaireBase);
        this.heuresTravaillees = heuresTravaillees;
        this.tauxHoraire = tauxHoraire;
    }
    public double calculerSalaire() {
        return heuresTravaillees * tauxHoraire;
    }
}
