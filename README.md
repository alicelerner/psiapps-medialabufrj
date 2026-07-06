# PsiApps — site estático reconstituído

Reconstituição estática do site **PsiApps – recodificando a cultura terapêutica**
(projeto do MediaLab.UFRJ), a partir dos snapshots íntegros do
[Internet Archive / Wayback Machine](https://web.archive.org/), após o site
original (`psiapps.medialabufrj.net`) ter sido comprometido e retirado do ar.

## Conteúdo

Site estático completo, pronto para hospedar em qualquer servidor de arquivos
estáticos (Netlify, Vercel, GitHub Pages, Cloudflare Pages, Apache/Nginx, etc.).

Páginas:
- `index.html` — Home
- `10-psiapps/` — Mapeamento (10 PsiApps)
- `estudo-de-caso-cingulo/` — Estudo de caso Cíngulo
- `outros-materiais/` — Outros materiais (bibliografia)
- `creditos/` — Créditos

Materiais para download (PDFs) e imagens ficam em `wp-content/uploads/`.

## Como hospedar

O site usa URLs "bonitas" (pastas com `index.html`) e caminhos absolutos a partir
da raiz (`/wp-content/...`), então **deve ser servido a partir da raiz de um
domínio ou subdomínio**, não de um subdiretório.

### Teste local
```bash
cd psiapps.medialabufrj.net
python3 -m http.server 8000
# abra http://localhost:8000
```

### Publicação
- **Netlify / Cloudflare Pages / GitHub Pages:** suba o conteúdo desta pasta como
  raiz do site.
- **Vercel:** `vercel deploy` a partir desta pasta (framework: "Other").
- **Apache/Nginx:** copie o conteúdo para o document root.

## Observações

- Reconstituído para ser fiel ao original. Detalhes do que foi restaurado,
  substituído ou perdido estão em `../RELATORIO-RECONSTITUICAO.md`.
- Alguns arquivos (imagens de figuras do estudo de caso, CSS por-página do
  Elementor) nunca foram capturados pelo Internet Archive e não puderam ser
  recuperados; onde aplicável, exibe-se um marcador "Imagem indisponível".
- As fontes tipográficas (Google Fonts) são carregadas de
  `fonts.googleapis.com` — a única dependência externa do site.
