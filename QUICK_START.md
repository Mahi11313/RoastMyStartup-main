# 🚀 Quick Start - OAuth Fix

## ✅ What Was Fixed

**Frontend:** Already correct! Just updated API URL to use local backend.

**Key Change:**
```typescript
// src/lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
```

## 🔧 Setup Required

### 1. Backend Environment Variables

Create `backend/.env`:
```bash
# Google OAuth
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback

# JWT
JWT_SECRET_KEY=your-super-secret-key-change-in-production
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# Frontend
FRONTEND_BASE_URL=http://localhost:8080

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-role-key

# Gemini
GEMINI_API_KEY=your-gemini-api-key
```

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 Client ID
3. Add redirect URI: `http://localhost:8000/auth/google/callback`
4. Copy credentials to `.env`

### 3. Supabase Schema

Run this SQL in Supabase SQL Editor:
```sql
-- Fix login_events.user_id type
ALTER TABLE login_events 
ALTER COLUMN user_id TYPE UUID USING user_id::uuid;

ALTER TABLE login_events 
ADD CONSTRAINT login_events_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- Add missing indexes
CREATE INDEX IF NOT EXISTS idx_login_events_user_id ON login_events(user_id);
CREATE INDEX IF NOT EXISTS idx_login_events_timestamp ON login_events(timestamp DESC);
```

## 🧪 Test It

### Start Services
```bash
# Terminal 1: Backend
cd backend
uvicorn app.main:app --reload --port 8000

# Terminal 2: Frontend
npm run dev
```

### Test Login
1. Open `http://localhost:8080/auth/login`
2. Click "Continue with Google"
3. Complete OAuth flow
4. Check Supabase:
   ```sql
   SELECT * FROM users ORDER BY created_at DESC LIMIT 1;
   SELECT * FROM login_events ORDER BY timestamp DESC LIMIT 1;
   ```

### Test Roast (Authenticated)
1. Login first
2. Go to `/roast`
3. Submit form
4. Check Supabase:
   ```sql
   SELECT r.*, u.email FROM roasts r 
   JOIN users u ON r.user_id = u.id 
   ORDER BY r.created_at DESC LIMIT 1;
   ```

## ✅ Success Indicators

**Backend logs should show:**
```
INFO: Successfully authenticated user: you@gmail.com (provider_id: 123456789)
INFO: ✅ User you@gmail.com upserted successfully with ID: uuid-here
INFO: ✅ Login event logged for user uuid-here
INFO: Authenticated user_id: uuid-here
INFO: ✅ Roast for YourStartup saved to database
```

**Supabase should have:**
- ✅ Row in `users` table with `provider_id` populated
- ✅ Row in `login_events` table with matching `user_id`
- ✅ Roasts with `user_id` populated (when logged in)
- ✅ Roasts with `user_id = NULL` (when anonymous)

## 🎯 The Flow

```
User clicks "Login with Google"
    ↓
Frontend: window.location.href = "http://localhost:8000/auth/google"
    ↓
Backend: Redirects to Google OAuth
    ↓
User grants permission
    ↓
Google: Redirects to http://localhost:8000/auth/google/callback?code=xxx
    ↓
Backend: 
  - Exchanges code for token
  - Fetches user profile
  - UPSERTS to users table ✅
  - INSERTS to login_events table ✅
  - Creates JWT with user_id
  - Redirects to http://localhost:8080/auth/callback?token=JWT
    ↓
Frontend:
  - Stores JWT in localStorage
  - Redirects to app
    ↓
User generates roast
    ↓
Frontend: Sends POST /roast with Authorization: Bearer JWT
    ↓
Backend:
  - Extracts user_id from JWT
  - Generates roast
  - Saves to roasts table with user_id ✅
```

## 🚨 Troubleshooting

| Issue | Fix |
|-------|-----|
| "OAuth configuration error" | Add Google credentials to `.env` |
| "Redirect URI mismatch" | Add exact URI to Google Console |
| Users table empty | Check backend logs, verify OAuth credentials |
| login_events type error | Run SQL migration above |
| Roasts have no user_id | Check JWT contains user_id, verify token sent in header |

## 📝 Files Modified

- ✅ `src/lib/api.ts` - Updated API URL and added JWT to requests
- ✅ `backend/app/services/db_service.py` - Fixed upsert logic, added login tracking
- ✅ `backend/app/routes/auth.py` - Fixed JWT payload, added login event logging
- ✅ `backend/app/main.py` - Fixed roast endpoint to use user_id

**No other changes needed!** Frontend OAuth flow was already correct.
