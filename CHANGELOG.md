# Changelog

All notable changes to the MangaKakalot API will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-07-28

### Added
- Initial release as npm package
- Comprehensive RESTful API for MangaKakalot.gg
- TypeScript definitions for better development experience
- Proper package.json with npm metadata
- MIT License
- Contributing guidelines
- CHANGELOG.md
- Executable bin script for global usage
- .npmignore for package optimization
- Enhanced README with installation and usage instructions

### API Endpoints
- `GET /api/manga/search/:query?/:page?` - Search manga by title
- `GET /api/manga/details/:id` - Get manga details
- `GET /api/manga/read/:mangaId?/:chapterId?` - Get chapter images
- `GET /api/manga/latest/:page?` - Latest manga updates
- `GET /api/manga/popular/:page?` - Popular manga
- `GET /api/manga/newest/:page?` - Newest manga
- `GET /api/manga/completed/:page?` - Completed manga
- `GET /api/manga/popular-now` - Popular now manga
- `GET /api/manga/home` - Homepage data

### Features
- CORS enabled for cross-origin requests
- Express.js server with proper error handling
- Scraping from MangaKakalot.gg
- Pagination support
- JSON response format
- Health check endpoint
- Proper HTTP status codes

### Technical Details
- Node.js 14+ compatibility
- Express.js framework
- Cheerio for HTML parsing
- Axios for HTTP requests
- Vercel deployment ready
- Docker support

### Package Structure
- Proper CommonJS module exports
- Executable bin script
- TypeScript definitions
- Comprehensive documentation
- Contributing guidelines

## [Unreleased]

### Planned
- Rate limiting implementation
- Caching layer
- Additional manga sources
- GraphQL endpoint
- WebSocket support for real-time updates
- Search filters and sorting
- User favorites/bookmarks
- Reading progress tracking

---

## Template for Future Releases

### [X.Y.Z] - YYYY-MM-DD

#### Added
- New features

#### Changed
- Changes in existing functionality

#### Deprecated
- Soon-to-be removed features

#### Removed
- Features removed

#### Fixed
- Bug fixes

#### Security
- Security improvements
