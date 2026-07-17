# VESTIORA - Asset Loading Fixes (Local images/videos)

- [x] Scan all image/video paths in src and replace /public/ prefix to /...
- [x] Prefix all local asset references with import.meta.env.BASE_URL
- [x] Update CatalogPage logo path
- [x] Update HeroSection poster/image/video paths
- [x] Update data files: collections.js, fabricGallery.js, gallery.js, videos.js, featured.js (if needed)
- [ ] Verify every referenced asset exists in public/ with exact filename + extension
- [ ] Run `npm run build` to confirm

