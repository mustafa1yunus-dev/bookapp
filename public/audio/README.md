# 🎵 Audio Files Guide - FREE Resources

This directory contains all audio files for the immersive reading experience.

## 📁 Directory Structure

```
public/audio/
├── music/           # Background music tracks
├── ambience/        # Ambient environmental sounds
└── sfx/             # Sound effects (one-shot sounds)
```

---

## 🎼 MUSIC FILES (Background Tracks)

### What You Need:
- `romantic_piano.mp3` - Soft piano for romantic scenes
- `dark_orchestral.mp3` - Dark, brooding orchestral for intense moments
- `tension_strings.mp3` - String instruments for building tension
- `sad_violin.mp3` - Melancholic violin for emotional scenes
- `action_drums.mp3` - Intense drums for action sequences
- `mysterious_ambient.mp3` - Atmospheric pad sounds for mystery

### 🆓 FREE Music Sources:

#### **1. Pixabay (Best Option - Completely Free)**
- URL: https://pixabay.com/music/
- License: Free for commercial use, no attribution required
- Search terms:
  - "dark romance piano" → romantic_piano.mp3
  - "dark orchestral" → dark_orchestral.mp3
  - "tension strings" → tension_strings.mp3
  - "sad violin" → sad_violin.mp3
  - "intense drums" → action_drums.mp3
  - "ambient mysterious" → mysterious_ambient.mp3

#### **2. FreePD (Public Domain)**
- URL: https://freepd.com/
- License: Public domain
- Categories to explore:
  - Classical → Piano, Violin
  - Suspense → Tension, Dark
  - Action → Drums

#### **3. Incompetech (Free with Attribution)**
- URL: https://incompetech.com/music/royalty-free/
- License: Free with credit (or $50/year for no attribution)
- Search by mood: Dramatic, Romantic, Tense

---

## 🌧️ AMBIENCE FILES (Looping Environmental Sounds)

### What You Need:
- `rain.mp3` - Rain sounds (moderate rain)
- `fireplace.mp3` - Crackling fire sounds
- `cafe.mp3` - Coffee shop ambience (chatter, cups clinking)
- `city.mp3` - City street sounds (distant traffic)
- `forest.mp3` - Birds, leaves rustling
- `thunder.mp3` - Distant thunder with rain

### 🆓 FREE Ambience Sources:

#### **1. Freesound.org (BEST for SFX/Ambience)**
- URL: https://freesound.org/
- License: Varies (check individual files, most are Creative Commons)
- Search terms:
  - "rain ambience loop" → rain.mp3
  - "fireplace crackling" → fireplace.mp3
  - "coffee shop ambience" → cafe.mp3
  - "city street traffic" → city.mp3
  - "forest birds ambience" → forest.mp3
  - "thunder storm" → thunder.mp3
- **Tip:** Filter by "Loops" to get seamless looping audio

#### **2. Zapsplat**
- URL: https://www.zapsplat.com/
- License: Free with attribution
- Great ambient categories

#### **3. YouTube Audio Library**
- URL: https://youtube.com/audiolibrary
- Download sound effects, search "ambience"

---

## 💥 SOUND EFFECTS (One-Shot Sounds)

### What You Need:
- `thunder.mp3` - Single thunder clap
- `heartbeat.mp3` - Heartbeat sound (single or loop)
- `door_slam.mp3` - Door slamming shut
- `glass_break.mp3` - Glass shattering
- `footsteps.mp3` - Footsteps walking
- `whisper_echo.mp3` - Whisper with echo effect
- `kiss.mp3` - Kissing sound
- `gunshot.mp3` - Single gunshot (for thriller scenes)
- `scream.mp3` - Scream sound

### 🆓 FREE SFX Sources:

#### **1. Freesound.org** (Again, the best!)
- Search each sound effect name above
- **Pro Tip:** Add "free" to your search

#### **2. Zapsplat**
- Excellent SFX library
- Search by category

#### **3. Soundbible**
- URL: http://soundbible.com/
- Simple, straightforward SFX downloads

---

## 🎯 QUICK START INSTRUCTIONS

### Step 1: Download Music Files
1. Go to https://pixabay.com/music/
2. Search for each music type (e.g., "dark piano")
3. Download as MP3
4. Rename to match the required filename
5. Place in `public/audio/music/`

### Step 2: Download Ambience Files
1. Go to https://freesound.org/
2. Create free account (required for downloads)
3. Search for each ambience type
4. Filter by "Loops" for seamless playback
5. Download and place in `public/audio/ambience/`

### Step 3: Download Sound Effects
1. Use Freesound.org or Zapsplat
2. Download each SFX
3. Place in `public/audio/sfx/`

### Step 4: Test
1. Run the app: `npm run dev`
2. Open a book and navigate through scenes
3. You should hear music, ambience, and SFX automatically!

---

## 🔊 AUDIO SPECIFICATIONS

For best performance:
- **Format:** MP3 (universally supported)
- **Bitrate:** 128kbps - 192kbps (smaller file size, still great quality)
- **Sample Rate:** 44.1kHz
- **Channels:** Stereo for music/ambience, Mono for SFX is fine
- **File Size:** Keep under 3MB per track for fast loading

### Converting Audio Files:
If you need to convert audio, use:
- **Online:** https://cloudconvert.com/mp3-converter
- **Software:** Audacity (free) - https://www.audacityteam.org/

---

## 🎨 RECOMMENDED SPECIFIC TRACKS

Here are some actual track recommendations from Pixabay (as of 2024):

### Music:
- **romantic_piano.mp3:** Search "In the Moonlight" or "Romantic Piano"
- **dark_orchestral.mp3:** Search "Dark Cinematic" or "Epic Dark"
- **tension_strings.mp3:** Search "Suspense Strings" or "Thriller"

### Ambience (from Freesound):
- **rain.mp3:** Search "rain ambience 10 minutes" (use a 1-min loop section)
- **fireplace.mp3:** Search "crackling fire loop"
- **cafe.mp3:** Search "coffee shop ambient"

---

## ⚡ FASTER OPTION: Use Placeholders

If you want to test the app immediately without downloading audio:

1. The app will work fine without audio files (just no sound)
2. You can add audio files gradually as you find good ones
3. Start with just 2-3 key tracks and expand later

---

## 📝 Attribution (If Required)

If you use tracks that require attribution:

Add credits to your app footer or a Credits page:

```markdown
Music by [Artist Name] from Pixabay
Sound effects from Freesound.org users: [username1], [username2]
```

---

## 🚀 Advanced: Auto-Download Script (Future Enhancement)

Want to automate this? You could create a script to download audio:

```bash
#!/bin/bash
# download-audio.sh (example - you'd need API keys)

curl -o public/audio/music/romantic_piano.mp3 "https://api.pixabay.com/..."
curl -o public/audio/ambience/rain.mp3 "https://freesound.org/..."
```

---

## ❓ FAQ

**Q: Do I NEED all audio files for the app to work?**
A: No! The app gracefully handles missing audio files. Add them as you go.

**Q: Can I use Spotify/Apple Music tracks?**
A: No - those are copyrighted. Use only royalty-free sources listed above.

**Q: What if I can't find exact matches?**
A: Use similar tracks! "romantic_piano" can be ANY soft piano track. The names are just descriptive.

**Q: Can I sell this app with these free audio files?**
A: Check each file's license! Pixabay is 100% free for commercial use. Freesound varies per file.

---

## 🎧 NEED HELP?

Having trouble finding audio? Here's a shortcut:

1. Search "royalty free [sound name] download" on Google
2. Add "creative commons" to find free options
3. Always check the license before using!

---

Enjoy building your immersive reading experience! 🎉
