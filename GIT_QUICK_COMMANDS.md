# ⚡ Git Commands - Quick Reference

## 🚀 Upload Your Folder to GitHub in 6 Steps

### Step 1: First, create your GitHub repository
1. Go to: https://github.com/new
2. Name it: `dental-clinic-website`
3. Make it PUBLIC
4. Click "Create repository"
5. **Copy the URL it gives you** (looks like: `https://github.com/YOUR-USERNAME/REPO-NAME.git`)

---

## 💻 Terminal Commands (Copy & Paste)

Open Terminal on your Mac and paste these commands ONE BY ONE:

### Command 1: Go to your folder
```bash
cd /Users/prathvi/DentalClinic
```

### Command 2: Initialize git
```bash
git init
```

### Command 3: Add all files
```bash
git add .
```

### Command 4: Create first commit
```bash
git commit -m "Initial commit: Add dental clinic website"
```

### Command 5: Add your GitHub repository
⚠️ **REPLACE** `YOUR-USERNAME/REPO-NAME` with your actual GitHub username and repo name!

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
```

**Example:**
```bash
git remote add origin https://github.com/prathvi/dental-clinic-website.git
```

### Command 6: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

---

## ✅ After This, Your Files Are on GitHub!

Verify at: `https://github.com/YOUR-USERNAME/REPO-NAME`

You should see all your files:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ config.js
- ✅ images/
- ✅ videos/

---

## 🔄 Future Updates (After Initial Upload)

Every time you change files and want to update:

```bash
# Command 1: Go to folder
cd /Users/prathvi/DentalClinic

# Command 2: Add changes
git add .

# Command 3: Save with message (describe what you changed)
git commit -m "Updated phone numbers"

# Command 4: Push to GitHub (auto-deploys to Netlify!)
git push
```

**That's all! Your live site updates automatically!** 🚀

---

## 📋 Copy-Paste Template (First Time)

Here's everything you need in one block. Just paste this in Terminal line by line:

```bash
cd /Users/prathvi/DentalClinic
git init
git add .
git commit -m "Initial commit: Add dental clinic website"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

**Remember:** Replace `YOUR-USERNAME/REPO-NAME` with your actual values!

---

## 🎯 What Each Command Does

| Command | What It Does |
|---------|-------------|
| `cd /Users/prathvi/DentalClinic` | Open your folder |
| `git init` | Start tracking with git |
| `git add .` | Add all files to upload |
| `git commit -m "message"` | Save changes with description |
| `git remote add origin URL` | Connect to your GitHub repo |
| `git push` | Send files to GitHub |

---

## ❓ Common Issues & Solutions

### Issue: "repository not found"
**Solution:** Check your GitHub username and repo name are correct

### Issue: "Permission denied"
**Solution:** Make sure you have GitHub authentication set up

### Issue: Files already exist on GitHub
**Solution:** You've already uploaded! Just use the update commands

### Issue: Nothing happens after push
**Solution:** Wait 30-60 seconds and refresh GitHub page

---

## 💡 Pro Tips

✅ Always write clear commit messages
✅ Commit after each meaningful change
✅ Push regularly (it's your backup)
✅ Check GitHub website to verify files uploaded

---

## 🎬 Need Help?

If you get stuck:
1. Read the error message carefully
2. Google the error message
3. Check your username/repo name are correct
4. Make sure you're in the right folder

**Most common mistake:** Forgetting to replace YOUR-USERNAME with your actual GitHub username!

---

**Ready? Open Terminal and start with Command 1!** 🚀
