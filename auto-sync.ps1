$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $PWD
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$action = {
    Start-Sleep -Seconds 2
    git add .
    git commit -m "Auto-sync: Updated files $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git pull
    git push
}

Register-ObjectEvent $watcher "Changed" -Action $action
while ($true) { Start-Sleep 60 }
