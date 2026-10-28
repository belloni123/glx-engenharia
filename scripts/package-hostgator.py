"""Empacota a exportação estática, com index.html diretamente na raiz do ZIP."""
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
source = root / "out"
archive = root / "dist/glx-hostgator.zip"
assert (source / "index.html").is_file(), "Execute o build estático antes de empacotar."
archive.parent.mkdir(exist_ok=True)

with ZipFile(archive, "w", compression=ZIP_DEFLATED, compresslevel=6) as bundle:
    for file in sorted(source.rglob("*")):
        if not file.is_file() or file.name == ".DS_Store":
            continue
        info = ZipInfo(file.relative_to(source).as_posix())
        info.create_system = 3
        info.external_attr = 0o100644 << 16
        # Fotos e vídeos já são comprimidos; não alterar seu conteúdo.
        bundle.writestr(info, file.read_bytes(), compress_type=ZIP_DEFLATED)

with ZipFile(archive) as bundle:
    assert bundle.testzip() is None
    assert "index.html" in bundle.namelist()
    assert ".htaccess" in bundle.namelist()
print(f"Pacote validado: {archive} ({archive.stat().st_size / 1_000_000:.1f} MB)")
