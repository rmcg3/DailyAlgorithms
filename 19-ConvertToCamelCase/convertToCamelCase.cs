using System;
using System.Collections.Generic;
using System.Linq;
namespace convertToCamelCase
{
public class Program
  {
    public static string ToCamelCase(string str)
    {
          char[] charArr = str.ToCharArray();


          //capitalize each first letter
          for(int i = 0; i < charArr.Length; i++) {
              if(charArr[i] == '-' || charArr[i] == '_'){
                charArr[i+1] = Char.ToUpper(charArr[i+1]);
              }
          }

          //remove all '-' and '_'
          string charStr = new string(charArr);
          List<char>  arr = charStr.ToCharArray().ToList();

          for (int i = 0; i < arr.Count; i++) {
            if(arr[i] == '-' || arr[i] == '_')
              arr.Remove(arr[i]);
          }
          //convert to String and return
          charStr = new string(arr.ToArray());
          return charStr;
    }

    static void Main(string[] args){
      Console.Write(ToCamelCase("the-Stealth_warrior"));

    }
  }
}
