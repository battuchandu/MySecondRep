public class FirstlttrUpper {
public static String formatToUpper (String Str) {
String result = '';
for (String iter : Str.split('[ ]+')) {
   if (iter != null && iter != '') {
    if (iter.length() > 1) {
     result += iter.substring(0,1).toUpperCase() + iter.substring(1,iter.length()) + ' ';
    }
    else
     result += iter.substring(0,1).toUpperCase() + ' ';
   }
}
return result;
}
}