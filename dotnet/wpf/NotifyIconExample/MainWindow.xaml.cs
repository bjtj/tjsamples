using NotifyIconExample.Models;
using System.Text;
using System.Windows;
using Wpf = System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace NotifyIconExample
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private App? app;

        public MainWindow()
        {
            InitializeComponent();

            app = Wpf.Application.Current as App;

            this.DataContext = app?.AppStatus;
        }

        public void ToggleStatus()
        {
            app?.ToggleStatus();
        }

        private void OnMouseDown(object sender, MouseButtonEventArgs e)
        {
            ToggleStatus();
        }
    }
}