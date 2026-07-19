Add-Type -AssemblyName System.Drawing

$publicDir = "c:\Users\ASUS\AppData\Local\CapCut\Videos\New folder\portfolio\public"
$srcPath = Join-Path $publicDir "profile.jpg" # Circular cropped image (source)

function Resize-Image {
    param (
        [string]$SourcePath,
        [string]$DestPath,
        [int]$Width,
        [int]$Height,
        [System.Drawing.Imaging.ImageFormat]$Format
    )
    
    try {
        $srcImg = [System.Drawing.Image]::FromFile($SourcePath)
        $destBmp = New-Object System.Drawing.Bitmap($Width, $Height)
        $g = [System.Drawing.Graphics]::FromImage($destBmp)
        
        # High quality scaling configurations
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        
        $g.DrawImage($srcImg, 0, 0, $Width, $Height)
        
        $srcImg.Dispose()
        
        # Save the resized image
        $destBmp.Save($DestPath, $Format)
        $g.Dispose()
        $destBmp.Dispose()
        $fileName = [System.IO.Path]::GetFileName($DestPath)
        Write-Host "SUCCESS: Resized and saved $fileName ($Width x $Height)"
    } catch {
        $fileName = [System.IO.Path]::GetFileName($DestPath)
        Write-Error "ERROR: Failed to resize image for $fileName - $_"
    }
}

# Create resized images
Resize-Image -SourcePath $srcPath -DestPath (Join-Path $publicDir "favicon.ico") -Width 48 -Height 48 -Format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -SourcePath $srcPath -DestPath (Join-Path $publicDir "logo192.png") -Width 192 -Height 192 -Format ([System.Drawing.Imaging.ImageFormat]::Png)
Resize-Image -SourcePath $srcPath -DestPath (Join-Path $publicDir "logo512.png") -Width 512 -Height 512 -Format ([System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "All icons generated and optimized successfully!"
