package challenge3;

public class Chien extends Animal {
    private String son;

    public Chien(String son) {
        this.son = son;
    }
    public void faireSon(){
        System.out.println("le son de chien: "+son);
    }
}
