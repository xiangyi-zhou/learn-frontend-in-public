# Breakout Game – Frontend Practice

To practice **HTML, CSS, and JavaScript** by implementing a simple Breakout-style game.

<img src="./images/breakout screenshot.png" alt="Breakout Screenshot" width="400">

[Breakout Game - wiki](<https://en.wikipedia.org/wiki/Breakout_(video_game)>)

## Project Structure

```
/breakout
├─ index.html # Game layout
├─ style.css # Styling
└─ script.js # Game logic
```

## How to Re-build

When approaching the Breakout project again, think about how you would rebuild it from scratch while keeping HTML, CSS, and JS separate.

- Start with a blank `index.html`. Think about the structure: what elements do you need? A canvas, a score display, maybe headers.

- Move to `style.css`. Ask yourself: how should the canvas and page look? How will colors, borders, and layout make the game readable and visually appealing?

- Finally, focus on `script.js`. Visualize the logic flow: ball movement, paddle control, brick creation, collision detection, scoring, and the animation loop. Break the logic into small, understandable parts. Test ideas incrementally.

## Prompt to AI

```txt
You are a frontend developer. I have a small Breakout-style game project built with vanilla HTML, CSS, and JavaScript. I want to refactor the code to make it cleaner, more modular, and maintainable, while keeping the same functionality.

Here are the goals:
1. Separate concerns clearly: HTML for structure, CSS for styling, JS for game logic.
2. Organize JavaScript into smaller functions or modules: ball movement, paddle control, brick creation, collision detection, score handling.
3. Use constants and clear variable names for game configuration (speed, paddle size, brick layout).
4. Ensure the game loop uses `requestAnimationFrame` properly.
5. Improve readability: comments, consistent naming, and indentation.

The output should be fully functional, pure JS, and work by opening `index.html` in a browser.

Please build the Breakout game code according to these principles.
```

## Usage

Open `index.html` in a browser to play. Use **arrow keys** to control the paddle and try to break all bricks.
