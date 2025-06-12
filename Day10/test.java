import java.util.Scanner;

class test{



    static void change(String num1){

        num1 = "babu";


        System.out.println("num1 is " +num1);

    }

    public static void main(String[]args){

        Scanner sc = new Scanner(System.in);
        Integer i = 773;

        System.out.println(i.MAX_VALUE);

        // String s = new String("hello");
        String s;
         s= "hello";

        
        // char x = sc.next().charAt(0);
        // char y = x.charAt(0);
        // System.out.print(x+" ");

        System.out.println(s);

        String str1 = "34";
        String str2 = new String("34");
        // String str2 = "34";

        System.out.println(str1==str2);

        int  i1 = 383;
        Integer i2 = new Integer(383);

        System.out.println(i1==i2);

        
        if(2<8){

            System.out.println("hello");
        }

        int [] arr  = {3,4,5};

        // int [] arr2 = new int[]

        System.out.print(arr);



        String num1 = "hello";

        System.out.println("num1 is " +num1);

        change(num1);

        System.out.println("num1 is " +num1);


        // int[] array = new int[5];

        // for(int index =0;index<array.length;index++)
        //     array[index] = sc.nextInt();
        
        // for(int val:array)
        //     System.out.println(val);


        int a = 1;
        int b = 3;
        int c = 2;

        int ans = (a>b&&a>c)?a:(b>c)?b:c;

        System.out.println(ans);
        

    }
}