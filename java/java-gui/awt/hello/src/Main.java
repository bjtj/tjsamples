import java.awt.*;
import java.awt.event.*;

public class Main {
    public static void main(String[] args) {
	Frame frame = new MyFrame();
    }

    static class MyFrame extends Frame {

	private Button button;
	private TextField textField;
	
	public MyFrame() {
	    super("my frame");

	    addWindowListener(new WindowAdapter() {
		    public void windowClosing(WindowEvent e) {
			dispose();
		    }
		});

	    textField = new TextField();
	    textField.setBounds(30, 50, 80, 30);
	    add(textField);
	    
	    button = new Button("click me");
	    button.setBounds(30, 100, 80, 30);
	    button.addActionListener(new ActionListener() {
		    public void actionPerformed(ActionEvent e) {
			MyFrame.this.textField.setText("hello");
		    }
		});
	    add(button);
	    
	    setSize(300, 300);
	    setLayout(null);
	    setVisible(true);

	    // https://stackoverflow.com/a/9543339
	    setLocationRelativeTo(null);
	}
    }
}
