import java.util.*;

class EnumSample {

	/**
	 * Simple enum type
	 */
	public enum Day {
		SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
	}

	/**
	 * Complex enum type
	 */
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

	/**
	 * enum type on switch
	 */
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

	/**
	 * psvm
	 */
	public static void main(String args[]) {

		EnumSample e = new EnumSample();
		// switch
		System.out.printf("%s %s %s %s %s %s %s\n", e.convertDayToString(Day.SUNDAY)
						  ,e.convertDayToString(Day.MONDAY)
						  ,e.convertDayToString(Day.TUESDAY)
						  ,e.convertDayToString(Day.WEDNESDAY)
						  ,e.convertDayToString(Day.THURSDAY)
						  ,e.convertDayToString(Day.FRIDAY)
						  ,e.convertDayToString(Day.SATURDAY));

		// Arrays.toString()
		System.out.println(Arrays.toString(Day.values()));

		// toString()
		System.out.println("Day.MONDAY.toString(): " + Day.MONDAY.toString());

		// valueOf()
		System.out.println("Day.valueOf(\"MONDAY\"): " + Day.valueOf("MONDAY").toString());

		// Exception of valueOf()
		try {
			System.out.println("Day.valueOf(\"UNKNOWN\"): " + Day.valueOf("UNKNOWN").toString());
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		// values()
		Day[] values = Day.values();
		for (int i = 0; i < values.length; i++) {
			System.out.printf("[%d] %s\n", i, values[i].toString());
		}

		// Arrays.asList() & indexOf()
		System.out.println("Arrays.asList(Day.values()).indexOf(\"MONDAY\"): " +
						   Arrays.asList(Day.values()).indexOf(Day.MONDAY));

		// ordinal()
		System.out.println("Day.TUESDAY.ordinal(): " + Day.TUESDAY.ordinal());

		// complex enum type's toString()
		System.out.println(LongDay.SUNDAY);
		System.out.println(LongDay.MONDAY);
		System.out.println(LongDay.TUESDAY);
		System.out.println(LongDay.WEDNESDAY);
		System.out.println(LongDay.THURSDAY);
		System.out.println(LongDay.FRIDAY);
		System.out.println(LongDay.SATURDAY);
	}
}
