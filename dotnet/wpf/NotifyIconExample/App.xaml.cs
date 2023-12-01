using System.Configuration;
using System.Data;
using System.Windows;
using Wpf = System.Windows;
using System.Windows.Forms;
using Forms = System.Windows.Forms;
using NotifyIconExample.Models;

namespace NotifyIconExample
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : System.Windows.Application
    {

        private readonly NotifyIcon notifyIcon;
        public AppStatusViewModel AppStatus = new AppStatusViewModel();

        public App()
        {
            notifyIcon = new NotifyIcon();
        }

        private void OnStartup(object sender, StartupEventArgs e)
        {

            notifyIcon.Icon = new System.Drawing.Icon("Resources/icon.ico");
            notifyIcon.Text = "NotifyIcon Example";
            notifyIcon.Click += NotifyIcon_Click;
            notifyIcon.BalloonTipClicked += NotifyIcon_BalloonTipClicked;

            UpdateNotifyIconContextMenuStrip();

            notifyIcon.Visible = true;
        }

        private void UpdateNotifyIconContextMenuStrip()
        {
            Forms.ContextMenuStrip ctxStrip = new Forms.ContextMenuStrip();
            
            if (AppStatus.IsRunning == true)
            {
                ctxStrip.Items.Add("Status", Image.FromFile("Resources/icon.ico"), OnStatusClicked);
                ctxStrip.Items.Add(new Forms.ToolStripLabel("Status: Running"));
                ctxStrip.Items.Add(new Forms.ToolStripButton("Status: Running", null, OnToggleStatusClicked));
                ctxStrip.Items.Add(new Forms.ToolStripDropDownButton("Status: Running", null,
                    new Forms.ToolStripLabel("Label 1"),
                    new Forms.ToolStripLabel("Label 2")));
            } else
            {
                ctxStrip.Items.Add("Status", Image.FromFile("Resources/icon.ico"), OnStatusClicked);
                ctxStrip.Items.Add(new Forms.ToolStripLabel("Status: Stopped"));
                ctxStrip.Items.Add(new Forms.ToolStripButton("Status: Stopped", null, OnToggleStatusClicked));
                ctxStrip.Items.Add(new Forms.ToolStripDropDownButton("Status: Stopped", null,
                    new Forms.ToolStripLabel("Label 1"),
                    new Forms.ToolStripLabel("Label 2")));
            }

            ctxStrip.Items.Add("Exit", Image.FromFile("Resources/icon.ico"), OnExitClicked);

            notifyIcon.ContextMenuStrip = ctxStrip;
        }

        private void NotifyIcon_Click(object? sender, EventArgs e)
        {
            Wpf.Application.Current.MainWindow.Activate();
        }

        private void NotifyIcon_BalloonTipClicked(object? sender, EventArgs e)
        {
            
            Wpf.MessageBox.Show($"Application is {AppStatus.Status ?? "..."}", "Status", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        private void OnStatusClicked(object? sender, EventArgs e)
        {
            Wpf.MessageBox.Show($"Application is {AppStatus.Status ?? "..."}", "Status", MessageBoxButton.OK, MessageBoxImage.Information);
        }

        private void OnToggleStatusClicked(object? sender, EventArgs e)
        {
            ToggleStatus();
        }

        public void ToggleStatus()
        {
            AppStatus.Toggle();
            UpdateNotifyIconContextMenuStrip() ;
            notifyIcon.BalloonTipText = $"Status: {AppStatus.Status}...";
            notifyIcon.ShowBalloonTip(5000);
        }

        private void OnExitClicked(object? sender, EventArgs e)
        {
            System.Windows.Application.Current.Shutdown();
        }

        private void OnExit(object sender, ExitEventArgs e)
        {
            notifyIcon.Dispose();
        }

    }

}
