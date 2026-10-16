"""Prepare supplied assets without altering their content. Run manually with Pillow."""
from pathlib import Path
from PIL import Image, ImageOps
import argparse

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path, help='Downloaded source images')
parser.add_argument('photos', type=Path, help='FOTOS SITE directory')
args = parser.parse_args()
SOURCE = args.source
LOCAL = args.photos
DEST = Path(__file__).resolve().parents[1] / 'public/media/refresh'
DEST.mkdir(parents=True, exist_ok=True)

for source in sorted(SOURCE.glob('*.png')):
    image = ImageOps.exif_transpose(Image.open(source))
    if source.name.startswith('logo-'):
        image = image.convert('RGBA')
        # Remove only the white matte in the supplied grayscale logo exports.
        pixels = []
        for r, g, b, a in image.getdata():
            alpha = round(a * (1 - min(r, g, b) / 255))
            pixels.append((105, 105, 105, alpha))
        image.putdata(pixels)
        box = image.getbbox()
        if box:
            image = image.crop(box)
        image.thumbnail((600, 220), Image.Resampling.LANCZOS)
        image.save(DEST / (source.stem + '.webp'), quality=92)
    else:
        image = image.convert('RGB')
        image.thumbnail((2200, 1800), Image.Resampling.LANCZOS)
        image.save(DEST / (source.stem + '.webp'), quality=86, method=6)

for number in range(1, 23):
    source = LOCAL / f'{number:02}.png'
    image = ImageOps.exif_transpose(Image.open(source)).convert('RGB')
    image.thumbnail((2200, 1800), Image.Resampling.LANCZOS)
    image.save(DEST / f'site-{number:02}.webp', quality=86, method=6)
