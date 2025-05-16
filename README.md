# Truth or Truth

**Truth or Truth** is a minimalist web application that brings emotional depth and connection to digital spaces. Inspired by *Truth or Dare* and *We’re Not Really Strangers*, it encourages meaningful conversations through curated question decks.

Built with ❤️ by Zelan Eroz 'Zee' Espanto

## Live Demo

🚀 [Deployed Version (Coming Soon)](https://your-netlify-url.com)


## 📌 Features

- 1-on-1 or Group Mode
- Deck Selection (Friendship, Love, Family, Self, Spicy, Wildcard)
- Decorative and dynamic landing page with responsive design
- Card-by-card interaction: Skip or Answer
- Player counter (Firebase integration planned)

---

## Tech Stack

| Category       | Tools Used                      | Justification                                                  |
|----------------|----------------------------------|----------------------------------------------------------------|
| Frontend       | React, CSS                      | React for UI logic, CSS for responsive styling                |
| Routing        | React Router DOM                | Clean navigation between landing, setup, and game views       |
| State Mgmt     | React useState / props          | Lightweight state for mode/deck choice                        |
| Hosting        | Netlify                         | Free, fast static site hosting                                |
| Design         | Figma (Planning)                | Used for UI layout and flow diagram                           |
| Version Control| Git + GitHub                    | Collaboration and deployment-ready commits                    |


## Project Structure
```
truth-or-truth/
├── public/
│   └── assets/          # dice1.png, dice2.png, card.png
├── src/
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Landing.css
│   │   ├── Setup.jsx
│   │   └── Setup.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```


## Wireframe

![Web App Diagram](./diagram.png)

> `diagram.png` is a placeholder. Update this with your actual planning or site map image from Figma, Miro, or hand-drawn sketch!



---

## 📌 To Run Locally

```bash
git clone https://github.com/zelaneroz/truth-or-truth.git
cd truth-or-truth
npm install
npm start
```

## 📈 Future Enhancements
* Add animated transitions between cards
* Firebase Firestore integration to track real player visits
* Mobile-optimized interactions
* Dark mode toggle
* Backend (Node.js or Supabase) for saved responses