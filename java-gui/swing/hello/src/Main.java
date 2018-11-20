import javax.swing.*;

public class Main {
    public static void main(String args[]) {
	javax.swing.SwingUtilities.invokeLater(new Runnable() {
		public void run() {
		    start();
		}
	    });
    }

    public static void start() {
	JFrame frame = new JFrame("hello swing");
	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	JLabel label = new JLabel("hello world");
	frame.getContentPane().add(label);

	frame.pack();
	frame.setVisible(true);

	// https://stackoverflow.com/a/9543339
	frame.setLocationRelativeTo(null);
    }
}
