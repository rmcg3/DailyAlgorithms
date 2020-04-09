 //my attempt
 public static String disemvowel(String str) {

    String vowels = "AEIOUaeiou";

    String[] arrOfStr = str.split("");

    for (int i = 0; i < arrOfStr.length; i++) {
      for (int j = 0; j < arrOfStr[i].length(); j++) {
        char temp = arrOfStr[i].charAt(j);
        for (int k = 0; k < vowels.length(); k++) {
          if (temp == vowels.charAt(k)) {
            arrOfStr[i] = arrOfStr[i].replace(temp, '\0');
          }
        }
      }
    }
    String joinString = String.join("", arrOfStr);
    return joinString;
  }


//author: Manish-Giri
/*import java.util.stream.Collectors;
public class DisemvowelTrolls {
    public static String disemvowel(String str) {
        String vowels = "aeiouAEIOU";
        return str.chars().filter(c -> vowels.indexOf(c) == -1).mapToObj(c->""+(char)c).collect(Collectors.joining(""));
    }
}
// clever
return str.replaceAll("(?i)[aeiou]" , "");
*/
