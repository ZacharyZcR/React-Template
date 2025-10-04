# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a new branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
pnpm dev
```

### Code Quality Checks

Before committing, ensure your code passes all quality checks:

```bash
# Type checking
pnpm run type-check

# Linting
pnpm run lint

# Formatting
pnpm run format

# All tests
pnpm run test
```

### Git Hooks

Pre-commit hooks will automatically:

- Lint and format staged files
- Run type checks
- Verify commit message format

## Code Standards

### TypeScript

- Use strict type checking
- Avoid `any` types
- Provide explicit return types for functions
- Use interfaces for object types

### Functions

- Maximum cyclomatic complexity: 10
- Maximum nesting depth: 3
- Maximum lines per function: 50
- Single responsibility principle

### Documentation

All public APIs must have JSDoc comments:

```typescript
/**
 * Brief description of the function
 * @param paramName Description of parameter
 * @returns Description of return value
 */
export function myFunction(paramName: string): ReturnType {
  // implementation
}
```

### Naming Conventions

- **Files**: kebab-case (e.g., `user-profile.tsx`)
- **Components**: PascalCase (e.g., `UserProfile`)
- **Functions**: camelCase (e.g., `getUserProfile`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test changes
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Other changes

### Examples

```
feat: add user authentication
fix: resolve navigation bug on mobile
docs: update API documentation
refactor: simplify data fetching logic
```

## Testing

### Unit Tests

- Write tests for all new functionality
- Maintain 80%+ code coverage
- Use descriptive test names

```typescript
describe('MyComponent', () => {
  it('should render correctly', () => {
    // test implementation
  });

  it('should handle user input', () => {
    // test implementation
  });
});
```

### E2E Tests

- Test critical user flows
- Use Playwright for browser testing
- Keep tests independent

## Pull Request Process

1. Update tests and documentation
2. Ensure all checks pass
3. Request review from maintainers
4. Address review feedback
5. Squash commits if requested

### PR Checklist

- [ ] Code follows project standards
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] All CI checks pass
- [ ] No merge conflicts
- [ ] Reviewed by maintainer

## Questions?

Create an issue for:

- Bug reports
- Feature requests
- General questions

Thank you for contributing!
