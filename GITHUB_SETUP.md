# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `journal-management-system` (or your preferred name)
3. Description: "Research Journal Management System with React, Spring Boot, MySQL, and Docker"
4. Visibility: Public (required for free GHCR)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push to GitHub

Run these commands in your terminal:

```bash
cd C:\3-1\journal

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/journal-management-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click "Actions" tab
3. GitHub Actions should be automatically enabled
4. The workflow will run automatically on push

## Step 4: Verify GHCR Images

After the workflow completes:

1. Go to your GitHub profile
2. Click "Packages" tab
3. You should see:
   - `journal-management-system/backend`
   - `journal-management-system/frontend`

## Step 5: Use Published Images

Update `docker-compose.yml` to use GHCR images:

```yaml
services:
  backend:
    image: ghcr.io/YOUR_USERNAME/journal-management-system/backend:latest
    # Remove the 'build' line
    container_name: journal-backend
    # ... rest stays the same

  frontend:
    image: ghcr.io/YOUR_USERNAME/journal-management-system/frontend:latest
    # Remove the 'build' line and 'args'
    container_name: journal-frontend
    # ... rest stays the same
```

Then run:
```bash
docker compose pull
docker compose up -d
```

## Troubleshooting

**Authentication required when pulling:**
```bash
# Login to GHCR
echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u YOUR_USERNAME --password-stdin
```

**Workflow fails:**
- Check Actions tab for error logs
- Ensure repository is public or you have GHCR permissions
- Verify Dockerfiles build successfully locally

## Current Status

✅ Git repository initialized
✅ Initial commit created
✅ GitHub Actions workflow added
✅ Ready to push to GitHub

Your commits:
- Initial commit: Journal Management System with React frontend, Spring Boot backend, MySQL database, and Docker Compose setup
- Add GitHub Actions workflow for Docker image publishing to GHCR

**Next step:** Create GitHub repository and push using the commands above!
