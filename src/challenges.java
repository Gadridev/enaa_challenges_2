import java.util.HashMap;
import java.util.HashSet;
import java.util.Random;
import java.util.Scanner;
public class challenges {
    Scanner scanner = new Scanner(System.in);
    public void challenge1() {
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello " + name);
    }
    public  void  challenge2(){
        System.out.print("Enter un nombre: ");
        int num=scanner.nextInt();
        int i =0;
        while (i<=num){
            System.out.println(i);
            i++;
        }
    }
    public void challenge3(){
        int num=0;
        Random rand=new Random();
        int randomNumber=rand.nextInt(10)+1;
        while (num != randomNumber){
            System.out.print("entrer un nombre 1-10 ");
              num=scanner.nextInt();
            if(num<1 || num>10){
                System.out.print("please entre nombre between 1-10  \n");
                continue;
            }
            else if(num<randomNumber){
                System.out.print("Trop petit ! Essayez encore.");
            } else if (num>randomNumber) {
                System.out.print("Trop grand ! Essayez encore.");
            }else{
                System.out.print("Bravo ! Vous avez trouvé.\n");
            }
        }
    }
    public void challenge4(){
        int sold=0;
        int choix;
        do{
            System.out.print("1. Consulter le solde\n2. Dépôt\n3. Retrait\n4. Quitter");
            System.out.println("entrer un choix");
            choix=scanner.nextInt();
            switch (choix) {
                case 1:
                    System.out.println("votre sold " + sold);
                    break;
                case 2:
                    System.out.print("entrez un montant");
                    int montant = scanner.nextInt();
                    sold += montant;
                    System.out.println("votre sold :"+sold);
                    break;
                case 3:
                    System.out.print("entrez un retrait");
                    int retrait = scanner.nextInt();
                    if (retrait > sold) {
                        System.out.print("Solde insuffisant");
                    }else{
                    sold -= retrait;
                    System.out.println("votre sold :"+sold);
                    }
                    break;
                case 4:
                    System.out.print("quittez 🏃");
                    break;
            }
        }while(choix != 4);
    }
    public void challenge5(){
        int [] arr ={4, 9, 1, 7, 3};
        int max=arr[0];
        int secondMax=arr[0];
        int i =1;
        while (i<arr.length){
            int n=arr[i];
            if(n>max){
                secondMax=max;
                max=n;
            }else if(n>secondMax && n !=max){
                secondMax=n;
            }
            i++;
        }
        System.out.println((max));
        System.out.println((secondMax));
    }
    public  void challenge6(){
        int [] arr ={1, 2, 3, 4, 5};
        int last=arr[arr.length-1];
        int i= arr.length-1;
        while (i>0){
            arr[i]=arr[i-1];
            i--;
        }
        arr[0]=last;
        int j=0;
        while (j< arr.length){
            int n=arr[j];
            System.out.println(n);
            j++;
        }
    }
    public void challenge7(){
        int [] arr={2, 3, 2, 5, 3};
        //generics
        HashMap<Integer, Integer> filter=new HashMap<>();

        for ( int i =0;i<arr.length;i++){
            int n=arr[i];
            if(filter.containsKey(n)){
                filter.put(n,filter.get(n)+1);
            }else filter.put(n,1);
        }
        System.out.println(filter.toString());
    }
    public void challenge8(int [] arr,int target){
        for(int start=0;start<arr.length;start++){
            int sum=0;
            for(int end=start;end<arr.length;end++){
                sum+=arr[end];
                if(sum== target){
                    System.out.print("[");
                    for(int i =start;i<=end;i++){
                        System.out.print(arr[i]+(i<end ?", ":""));
                    }
                    System.out.println("]");
                }
            }
        }

    }
    public  void challenge9(int [] arr1,int [] arr2){
        HashSet<Integer> arr=new HashSet<>();
        for (int i =0;i<arr1.length;i++){
            for (int j =0;j<arr2.length;j++){
                if(arr1[i]==arr2[j]){
                    arr.add(arr1[i]);
                }
            }
        }
        System.out.println(arr);
    }
}

