const express = require("express");
const {
  getMangaChapterImages,
  getMangaDetails,
  getMangaSearch,
  getLatestMangas,
  getPopularMangas,
  getNewestMangas,
  getCompletedMangas,
  getPopularNowMangas,
  getHomePage,
} = require("../controllers/mangaKakalotController");

const router = express.Router();

// --- /read routes (Expanded) ---
router.get('/read/:mangaId/:chapterId', getMangaChapterImages);
router.get('/read/:mangaId', getMangaChapterImages);
router.get('/read', getMangaChapterImages);

// --- /details route (OK) ---
router.get("/details/:id", getMangaDetails);

// --- /search routes (Expanded) ---
router.get('/search/:query/:page', getMangaSearch);
router.get('/search/:query', getMangaSearch);
router.get('/search', getMangaSearch);

// --- /latest routes (Expanded) ---
router.get("/latest/:page", getLatestMangas);
router.get("/latest", getLatestMangas);

// --- /popular routes (Expanded) ---
router.get("/popular/:page", getPopularMangas);
router.get("/popular", getPopularMangas);

// --- /newest routes (Expanded) ---
router.get("/newest/:page", getNewestMangas);
router.get("/newest", getNewestMangas);

// --- /completed routes (Expanded) ---
router.get("/completed/:page", getCompletedMangas);
router.get("/completed", getCompletedMangas);

// --- Static routes (OK) ---
router.get("/popular-now", getPopularNowMangas);
router.get("/home", getHomePage);

module.exports = router;