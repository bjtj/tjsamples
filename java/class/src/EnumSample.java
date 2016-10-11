import java.util.*;

class EnumSample {

	public enum Day {
		SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
	}

	public enum LongDay {
		SUNDAY("Sun", "Sunday"),
		MONDAY("Mon", "Monday"),
		TUESDAY("Tue", "Tuesday"),
		WEDNESDAY("Wed", "Wednesday"),
		THURSDAY("Thu", "Thursday"),
		FRIDAY("Fri", "Friday"),
		SATURDAY("Sat", "Saturday");

		private String shortName;
		private String longName;

		LongDay(String shortName, String longName) {
			this.shortName = shortName;
			this.longName = longName;
		}

		public String getShortName() {
			return shortName;
		}
		
		public String getLongName() {
			return longName;
		}

		@Override
		public String toString() {
			return String.format("[%d]%s(%s)", ordinal(), longName, shortName);
		}
	}

	public String convertDayToString(Day day) {
		switch (day) {
		case SUNDAY:
			return "Sun";
		case MONDAY:
			return "Mon";
		case TUESDAY:
			return "Tue";
		case WEDNESDAY:
			return "Wed";
		case THURSDAY:
			return "Thu";
		case FRIDAY:
			return "Fri";
		case SATURDAY:
			return "Sat";
		default:
			break;
		}
		return null;
	}
	
	public static void main(String args[]) {
		
		EnumSample e = new EnumSample();
		System.out.println(e.convertDayToString(Day.SUNDAY));
		System.out.println(e.convertDayToString(Day.MONDAY));
		System.out.println(e.convertDayToString(Day.TUESDAY));
		System.out.println(e.convertDayToString(Day.WEDNESDAY));
		System.out.println(e.convertDayToString(Day.THURSDAY));
		System.out.println(e.convertDayToString(Day.FRIDAY));
		System.out.println(e.convertDayToString(Day.SATURDAY));

		System.out.println("Day.MONDAY.toString(): " + Day.MONDAY.toString());
		System.out.println("Day.valueOf(\"MONDAY\"): " + Day.valueOf("MONDAY").toString());
		
		try {
			System.out.println("Day.valueOf(\"UNKNOWN\"): " + Day.valueOf("UNKNOWN").toString());
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		
		Day[] values = Day.values();
		for (int i = 0; i < values.length; i++) {
			System.out.printf("[%d] %s\n", i, values[i].toString());
		}
		
		System.out.println("Arrays.asList(Day.values()).indexOf(\"MONDAY\"): " +
						   Arrays.asList(Day.values()).indexOf(Day.MONDAY));

		System.out.println("Day.TUESDAY.ordinal(): " + Day.TUESDAY.ordinal());

		System.out.println(LongDay.SUNDAY);
		System.out.println(LongDay.MONDAY);
		System.out.println(LongDay.TUESDAY);
		System.out.println(LongDay.WEDNESDAY);
		System.out.println(LongDay.THURSDAY);
		System.out.println(LongDay.FRIDAY);
		System.out.println(LongDay.SATURDAY);
	}
}
