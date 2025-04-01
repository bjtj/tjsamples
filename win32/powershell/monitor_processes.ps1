# System.Management Namespace
# ----
# https://learn.microsoft.com/en-us/dotnet/api/system.management?view=net-9.0-pp

# Windows Management Instrumentation (WMI)
# ----
# https://learn.microsoft.com/en-us/windows/win32/wmisdk/wmi-start-page

$Query = "SELECT * FROM __InstanceCreationEvent WITHIN 1 WHERE TargetInstance ISA 'Win32_Process'"
$Watcher = New-Object Management.EventQuery($Query)
$Scope = New-Object Management.ManagementScope("\\.\root\CIMV2")
$Listener = New-Object Management.ManagementEventWatcher($Scope, $Watcher)

Write-Host "Listening for new processes..."
while ($true) {
    $Event = $Listener.WaitForNextEvent()
    Write-Host "New process detected: " $Event.TargetInstance.Name
}
