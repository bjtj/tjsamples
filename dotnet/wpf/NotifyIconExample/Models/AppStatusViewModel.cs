using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotifyIconExample.Models
{
    public class AppStatusViewModel : ModelBase
    {
        private bool _isRunning = false;
        public bool IsRunning
        {
            get
            {
                return _isRunning;
            }
            set
            {
                _isRunning = value;
                RaisePropertyChanged(nameof(IsRunning));
                RaisePropertyChanged(nameof(Status));
            }
        }
        public string Status
        {
            get
            {
                return IsRunning ? "Running" : "Stopped";
            }
        }

        public AppStatusViewModel(bool isRunning = false)
        {
            IsRunning = isRunning;
        }

        public void Toggle()
        {
            IsRunning = !IsRunning;
        }
    }
}
