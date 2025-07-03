# focus-timer  
#### A simple focus timer built using **HTML**, **CSS**, and **JavaScript**, with focused time saved in **localStorage**.  
![image](https://github.com/user-attachments/assets/412019fe-2f22-4ca8-bc94-a97434d773d8)
![image](https://github.com/user-attachments/assets/ec52781d-4d82-4c1f-93f6-a3046f871ac1)




### 💡 Features

* Countdown timer with 25-minute default focus session
* “Focus” and “Paused” status display
* Start, Stop, and Reset controls
* Sound alert when time is up (`alarm_audio.wav`)
* Tracks and displays total focused minutes
* Saves time data persistently using `localStorage`

### 🛠️ Tech Stack

* **HTML** – layout and structure
* **CSS** – timer UI and basic styling
* **JavaScript** – timer logic, DOM manipulation
* **localStorage** – to remember focus time across sessions

### 🚀 How to Use

1. Clone this repo:

   ```bash
   git clone https://github.com/RitikaAttada/focus-timer.git

2. Add your sound file:

   * Place `alarm_audio.wav` inside the project folder

3. Open `index.html` in your browser.

4. Click **Start** to begin focusing.

5. Click **Stop** to pause or **Reset** to start again.

6. Watch your **focused minutes** grow each session!

### 📚 What I Learned

* Building a functional timer using `setInterval`
* Persisting session data using `localStorage`
* Handling audio playback with the `Audio` object
  
### 📌 Future Ideas
* Support dark/light mode toggle
