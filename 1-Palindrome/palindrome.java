/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package daily_algs;

/**
 * @author ryanm
 */
import java.util.*;
public class palindrome {

  /**
   * @param args the command line arguments
   */
  public static void main(String[] args) {
    boolean test = palindrome("racecar");
    System.out.println(test);
  }

  public static boolean palindrome(String s) {
    String t = "";
    for (int i = s.length()-1; i >-1; i--) {
       t += s.charAt(i);
    }
    return t.equals(s);
  }
}
