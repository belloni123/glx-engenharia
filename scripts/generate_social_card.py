from pathlib import Path
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
background = Image.open(ROOT / "public/media/portfolio/ioa/01.webp").convert("RGB")
logo = Image.open(ROOT / "public/brand/glx-logo.png").convert("RGBA")

canvas = Image.new("RGB", (1200, 630), "#0b0b0c")
ratio = max(1200 / background.width, 630 / background.height)
size = (int(background.width * ratio), int(background.height * ratio))
background = background.resize(size, Image.Resampling.LANCZOS)
left = (background.width - 1200) // 2
top = (background.height - 630) // 2
background = background.crop((left, top, left + 1200, top + 630))
background = ImageEnhance.Color(background).enhance(0.55)
background = ImageEnhance.Contrast(background).enhance(1.15)
background = background.filter(ImageFilter.GaussianBlur(0.4))
canvas.paste(background)

overlay = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
shade = ImageDraw.Draw(overlay)
for x in range(1200):
    alpha = int(225 - (x / 1200) * 105)
    shade.line((x, 0, x, 630), fill=(5, 5, 6, alpha))
shade.rectangle((0, 0, 18, 630), fill=(240, 24, 35, 255))
shade.line((70, 72, 1130, 72), fill=(255, 255, 255, 55), width=1)
shade.line((70, 558, 1130, 558), fill=(255, 255, 255, 55), width=1)
canvas = Image.alpha_composite(canvas.convert("RGBA"), overlay)

logo.thumbnail((265, 92), Image.Resampling.LANCZOS)
canvas.alpha_composite(logo, (72, 92))

draw = ImageDraw.Draw(canvas)
font_path = "/System/Library/Fonts/SFNS.ttf"
mono_path = "/System/Library/Fonts/SFNSMono.ttf"
headline = ImageFont.truetype(font_path, 79)
small = ImageFont.truetype(mono_path, 18)
draw.text((72, 250), "OBRA SOB", font=headline, fill=(255, 255, 255, 255), stroke_width=1)
draw.text((72, 330), "CONTROLE.", font=headline, fill=(255, 255, 255, 255), stroke_width=1)
draw.text((74, 490), "ENGENHARIA  |  CONSTRUÇÃO  |  GESTÃO", font=small, fill=(220, 220, 220, 235))
draw.rectangle((1035, 470, 1130, 565), outline=(240, 24, 35, 255), width=3)
draw.line((1056, 540, 1107, 489), fill=(240, 24, 35, 255), width=7)

canvas.convert("RGB").save(ROOT / "public/og.jpg", quality=92, optimize=True, progressive=True)
