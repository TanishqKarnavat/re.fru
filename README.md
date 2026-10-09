# re.fru product catalogue website

A dependency-free, responsive static website based on the supplied Re.fru catalogue. The original catalogue is included at `assets/Re.fru-product-catalogue.pdf` and is available from the site.

## Run locally

Any static web server will work. From the project directory:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy for free

### GitHub Pages

1. Create a GitHub repository and upload every project file, including the `assets` directory.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The published URL shown by GitHub Pages is ready to share. All paths are relative, so the catalogue PDF, images, contact links, and navigation continue to work.

### Netlify Drop

1. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire project folder onto the page.
3. Netlify immediately provides a public URL. No build command is required.

## Checks to make before publishing

- Open the site at a phone-width viewport and confirm the menu and product layouts are comfortable to read.
- Use **View full catalogue** to confirm the PDF opens in a new tab.
- Test the Instagram and WhatsApp links on a phone.

## Current catalogue implementation

The website now uses the source PDF artwork directly: `assets/catalogue-pages/page-01.png` through `page-12.png` are 2550 x 3300 pixel renders of the original pages. They are stacked in source order at `width: 100%` and `height: auto`, preventing cropping, stretching, or re-created artwork. The compact navigation scrolls to pages 2, 7, 11, and 12.
