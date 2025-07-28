# Contributing to MangaKakalot API

Thank you for your interest in contributing to the MangaKakalot API! This document provides guidelines for contributing to the project.

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/mangakakalot-api.git
   cd mangakakalot-api
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## Development Guidelines

### Code Style
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### Testing
- Test your changes locally
- Run `npm test` to ensure everything works
- Test edge cases and error handling

### Commit Messages
Use conventional commit format:
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, well-commented code
   - Update documentation if needed
   - Add tests for new features

3. **Test Your Changes**
   ```bash
   npm test
   npm start
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new search endpoint"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## API Guidelines

### Error Handling
- Return appropriate HTTP status codes
- Provide meaningful error messages
- Log errors appropriately

### Response Format
- Always return JSON
- Include success/error indicators
- Provide consistent data structures

### Rate Limiting
- Be mindful of source website rate limits
- Implement appropriate delays between requests
- Handle rate limit errors gracefully

## Adding New Endpoints

When adding new endpoints:

1. **Update Routes** in `routes/mangakakalotroutes.js`
2. **Add Controller Methods** in `controllers/mangakakalot.js`
3. **Update Documentation** in README.md
4. **Add Tests** in appropriate test files

## Code Structure

```
mangakakalot-api/
├── bin/
│   └── mangakakalot-api      # Executable script
├── routes/
│   └── mangakakalotroutes.js # Route definitions
├── controllers/
│   └── mangakakalot.js       # Business logic
├── scrappers/
│   └── mangakakalot.js       # Scraping logic
├── test.js                   # Test file
├── index.js                  # Main entry point
└── package.json
```

## Reporting Issues

When reporting issues:

1. **Use Issue Templates** when available
2. **Provide Clear Description** of the problem
3. **Include Steps to Reproduce**
4. **Add Environment Details** (Node.js version, OS, etc.)
5. **Include Error Logs** if applicable

## Feature Requests

For feature requests:

1. **Check Existing Issues** first
2. **Provide Clear Use Case**
3. **Suggest Implementation Approach** if possible
4. **Consider Backward Compatibility**

## Code Review Process

1. **All PRs require review** before merging
2. **Address Review Comments** promptly
3. **Keep PRs focused** - one feature/fix per PR
4. **Maintain Clean Commit History**

## Local Testing

### Manual Testing
```bash
# Start server
npm start

# Test endpoints
curl http://localhost:3000/api/manga/search/one%20piece
```

### Automated Testing
```bash
# Run all tests
npm test

# Test specific functionality
node test.js
```

## Release Process

1. **Update Version** in package.json
2. **Update Changelog**
3. **Create Release Notes**
4. **Tag Release** on GitHub
5. **Publish to npm**

## Questions?

If you have questions:
- Check existing issues and discussions
- Create a new issue with the "question" label
- Reach out to maintainers

Thank you for contributing!
