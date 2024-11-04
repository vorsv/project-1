import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LicenseParser {

    public static List<String> extractImportantPoints(String licenseText) {
        List<String> importantPoints = new ArrayList<>();

        // String[] keywords = {"subcribe", "liability", "copyright", "license", "term", "termination", "payment"};
        Pattern pattern = Pattern.compile("\\b(warranty|liability|copyright|license|term|termination|payment)\\b\\s*:\\s*(.*)");
        
        Matcher matcher = pattern.matcher(licenseText);
        while (matcher.find()) {
            importantPoints.add(matcher.group(0));
        }

        return importantPoints;
    }

    public static void main(String[] args) {
        String licenseText = "This is a sample license agreement. The warranty is limited to... Liability is excluded for... Copyright belongs to...";
        List<String> points = extractImportantPoints(licenseText);
        for (String point : points) {
            System.out.println(point);
        }
    }
}
