Add-Type -AssemblyName System.Drawing

$imgPath = "c:\Users\ASUS\AppData\Local\CapCut\Videos\New folder\portfolio\public\profile.jpg"

try {
    # Load original image
    $src = [System.Drawing.Image]::FromFile($imgPath)
    $w = $src.Width
    $h = $src.Height
    
    # Create new transparent bitmap
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Enable antialiasing for smooth round edges
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    
    # Create circular clip path
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $w, $h)
    $g.SetClip($path)
    
    # Draw original image inside the circular clip
    $g.DrawImage($src, 0, 0, $w, $h)
    
    # Dispose reader to unlock the file before saving
    $src.Dispose()
    
    # Save cropped image back as PNG (but using .jpg extension to preserve references)
    $bmp.Save($imgPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "SUCCESS: Cropped image to a circle successfully!"
} catch {
    Write-Error "ERROR: Failed to crop image: $_"
}
