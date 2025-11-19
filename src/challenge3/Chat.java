package challenge3;

public class Chat extends Animal {
    private String son;

    public Chat(String son) {
        this.son = son;
    }
    public void faireSon(){
        System.out.println("le son de chat: "+son);
    }
}
