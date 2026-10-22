# PowerShell
param(
    [Parameter(Mandatory)][string]$Path,
    [switch]$Force
)

$colors = @{ gold = '#9a6700'; ink = '#24292f' }
Get-ChildItem -Path $Path -Filter *.json -Recurse |
    Where-Object { $_.Length -gt 1KB } |
    ForEach-Object { Write-Host "Found $($_.Name) ($($colors.Count) colors)" -ForegroundColor Yellow }

if ($Force -and -not (Test-Path $Path)) { New-Item -ItemType Directory $Path | Out-Null }
