# 🎵 Spotify Lyric Search

A Machine Learning–based **text identification system** that predicts the **song title and artist** from a short snippet of lyrics.  
The project uses **TF-IDF vectorization and cosine similarity** to retrieve the most relevant song from a large lyrics dataset.

---

## Project Overview

**Spotify Lyric Search** allows users to enter a few lines of song lyrics and retrieves the **best matching song** from a dataset containing thousands of tracks.

---

## 📂 Dataset

- **Dataset Name:** Spotify Million Song Dataset (Exported CSV)
- **Fields Used:**
  - `track_name` – Song title
  - `artist_name` – Artist name
  - `lyrics` – Full song lyrics

---

## Tech Stack

- **Programming Language:** Python
- **Libraries:**
  - `pandas` – Data handling
  - `scikit-learn` – TF-IDF vectorization & cosine similarity
  - `re`, `string` – Text preprocessing
- **ML Technique:**
  - TF-IDF (Unigrams + Bigrams)
  - Cosine similarity
  - Lexical word-overlap scoring

---

## System Architecture

```
User Lyrics Input
        ↓
Text Preprocessing
        ↓
TF-IDF Vectorization
        ↓
Cosine Similarity Matching
        ↓
Hybrid Scoring (TF-IDF + Word Overlap)
        ↓
Best Song Prediction
```

---

## Model Logic

### 1. Text Preprocessing

- Lowercasing
- Removal of punctuation and numbers
- Removal of lyric annotations (e.g., `[Chorus]`)
- Whitespace normalization

### 2. Feature Extraction

- TF-IDF Vectorizer
  - English stopwords removed
  - Unigrams + bigrams
  - Maximum 30,000 features

### 3. Similarity Scoring

Final score is computed as:

```
Final Score = (0.75 × TF-IDF Cosine Similarity)
            + (0.25 × Word Overlap Score)
```

The song with the **highest score** is returned as the best match.

> Note: The confidence score represents **similarity**, not probability.

---

## How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Amarsah15/Intern-Technical-Assessment.git
cd Spotify-Lyric-Search
```

### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Application

```bash
python main.py
```

---

## 💡 Usage Instructions

1. Run the program.
2. Enter one or more lines of lyrics.
3. Press **ENTER** to submit.
4. The system returns the **best matching song and artist**.

### Example Output

```
--------------------------------------------------
Best Match:
Song   : Blinding Lights
Artist : The Weeknd
Score  : 0.823
--------------------------------------------------
```

---

## 📁 Project Structure

```
├── data/
│   └── Spotify Million Song Dataset_exported.csv
├── src/
│   ├── model.py
│   ├── predict.py
│   └── preprocess.py
├── main.py
├── requirements.txt
└── README.md
```

---

## 👨‍💻 Author

**Amarnath Kumar**
