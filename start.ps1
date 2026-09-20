$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$portfolioNode = Get-Command node -ErrorAction SilentlyContinue
if ($portfolioNode) {
    & $portfolioNode.Source 'node_modules/vite/bin/vite.js' --host 127.0.0.1
} else {
    $portfolioRuntime = 'C:\Users\74164\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
    if (!(Test-Path -LiteralPath $portfolioRuntime)) { throw 'Node.js is required. Install Node.js or update the runtime path in start.ps1.' }
    & $portfolioRuntime 'node_modules/vite/bin/vite.js' --host 127.0.0.1
}
