param(
    [string]$InputPath = "public\profile.jpg"
)

Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile((Resolve-Path $InputPath).Path)

# Get minimum dimension to make a square
$size = [math]::Min($img.Width, $img.Height)
$x = [math]::Truncate(($img.Width - $size) / 2)
$y = [math]::Truncate(($img.Height - $size) / 2)

function Create-CircularIcon {
    param([int]$targetSize, [string]$OutputPath)
    
    $bmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)
    
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $targetSize, $targetSize)
    $g.SetClip($path)
    
    $srcRect = New-Object System.Drawing.Rectangle($x, $y, $size, $size)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $targetSize, $targetSize)
    $g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    if ($OutputPath.EndsWith(".ico")) {
        # Save as PNG first, then convert to ICO format
        # System.Drawing.Icon is tricky to create directly from Bitmap with transparency in PowerShell
        # So for .ico, we will just save a standard PNG to the .ico file. Modern browsers support this.
        $bmp.Save((Resolve-Path -Path ".").Path + "\" + $OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    } else {
        $bmp.Save((Resolve-Path -Path ".").Path + "\" + $OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Created $OutputPath"
}

Create-CircularIcon -targetSize 512 -OutputPath "public\logo512.png"
Create-CircularIcon -targetSize 192 -OutputPath "public\logo192.png"
Create-CircularIcon -targetSize 256 -OutputPath "public\favicon.ico"

$img.Dispose()
Write-Host "Done!"
