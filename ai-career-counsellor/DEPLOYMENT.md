# 🚀 Deployment Guide - AI Career Counsellor

## Quick Deploy with Vercel + Railway

### Step 1: Deploy Backend to Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login with GitHub**
3. **Click "New Project" → "Deploy from GitHub repo"**
4. **Select your repository: `Sumitjalan35/new`**
5. **Choose the `backend` folder as root directory**
6. **Add Environment Variables:**
   - `GEMINI_API_KEY`: Your Google Gemini API key
   - `PORT`: 8000
7. **Railway will automatically deploy your backend**
8. **Copy the generated URL (e.g., `https://your-app.railway.app`)**

### Step 2: Deploy Frontend to Vercel

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login with GitHub**
3. **Click "New Project" → "Import Git Repository"**
4. **Select your repository: `Sumitjalan35/new`**
5. **Configure build settings:**
   - Framework Preset: `Vite`
   - Root Directory: `./` (root)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Add Environment Variables:**
   - `VITE_API_URL`: Your Railway backend URL (from Step 1)
7. **Click "Deploy"**

### Step 3: Update CORS Settings

After deployment, update your backend CORS settings in `main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://localhost:5173", 
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
        "https://your-frontend-domain.vercel.app"  # Add your Vercel URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Alternative Deployment Options

### Option 2: Netlify + Render

**Frontend (Netlify):**
1. Go to [Netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build settings: `npm run build`, output: `dist`
4. Add environment variable: `VITE_API_URL`

**Backend (Render):**
1. Go to [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Root directory: `backend`
5. Build command: `pip install -r requirements.txt`
6. Start command: `python main.py`

### Option 3: Full AWS Deployment

**Frontend (S3 + CloudFront):**
1. Build: `npm run build`
2. Upload `dist` folder to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain

**Backend (EC2/ECS):**
1. Launch EC2 instance or ECS service
2. Install dependencies
3. Run with PM2 or Docker
4. Configure load balancer

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.com
```

### Backend
```
GEMINI_API_KEY=your_google_gemini_api_key
PORT=8000
```

## Post-Deployment Checklist

- [ ] Backend is accessible via HTTPS
- [ ] Frontend can connect to backend
- [ ] CORS is properly configured
- [ ] Environment variables are set
- [ ] Custom domain is configured (optional)
- [ ] SSL certificates are working
- [ ] API endpoints are responding

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Update CORS origins in backend
2. **API Not Found**: Check environment variables
3. **Build Failures**: Verify dependencies in package.json
4. **Port Issues**: Ensure PORT environment variable is set

### Support:
- Railway: [docs.railway.app](https://docs.railway.app)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Render: [render.com/docs](https://render.com/docs)
