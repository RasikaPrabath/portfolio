Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path (Get-Location) "public\profile.jpeg"
$img = [System.Drawing.Image]::FromFile($srcPath)

# 75% crop size ensures hair top is fully visible without being cut off
$fullSize = [Math]::Min($img.Width, $img.Height)
$cropSize = [Math]::Floor($fullSize * 0.75)

# Center X, position Y closer to top so hair is 100% included
$cropX = [Math]::Floor(($img.Width - $cropSize) / 2)
$cropY = [Math]::Floor(($img.Height - $cropSize) / 2 * 0.25)

if ($cropY -lt 0) { $cropY = 0 }
if (($cropY + $cropSize) -gt $img.Height) { $cropY = $img.Height - $cropSize }

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)

function Create-Circular-Icon($targetSize, $outputPath) {
    $bmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $targetSize, $targetSize)
    $g.SetClip($path)
    
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $targetSize, $targetSize)
    $g.DrawImage($img, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $g.Dispose()
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

Create-Circular-Icon 512 "public\logo512.png"
Create-Circular-Icon 192 "public\logo192.png"
Create-Circular-Icon 180 "public\apple-touch-icon.png"
Create-Circular-Icon 64 "public\favicon-64.png"
Create-Circular-Icon 32 "public\favicon-32.png"

$img.Dispose()
Write-Host "Perfect headroom circular favicons generated successfully!"
