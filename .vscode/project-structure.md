# Project Structure

This file maintains an up-to-date list of project files and structure.

## File Structure

- 📁 `.vscode/`
  - 📄 `.vscode\project-structure.md` (Markdown)
- 📁 `L1/`
  - 📁 `L1\.vscode/`
    - 📄 `L1\.vscode\project-structure.md` (Markdown)
  - 📁 `L1\creare-comandi-cli/`
    - 📄 `L1\creare-comandi-cli\cli.js` (JavaScript)
  - 📁 `L1\hello-world/`
    - 📄 `L1\hello-world\index.js` (JavaScript)
  - 📁 `L1\server-express/`
    - 📄 `L1\server-express\package-lock.json` (JSON)
    - 📄 `L1\server-express\package.json` (JSON)
    - 📄 `L1\server-express\server.js` (JavaScript)
      - *Imports:* `express`
  - 📁 `L1\server-node-puro/`
    - 📄 `L1\server-node-puro\package.json` (JSON)
    - 📄 `L1\server-node-puro\server.js` (JavaScript)
      - *Imports:* `http`
  - 📄 `L1\L1 - node.pptx.pdf` (Unknown)
- 📁 `L2/`
  - 📁 `L2\.vscode/`
    - 📄 `L2\.vscode\project-structure.md` (Markdown)
  - 📁 `L2\electron/`
    - 📄 `L2\electron\index.html` (HTML)
    - 📄 `L2\electron\index.js` (JavaScript)
      - *Imports:* `electron`
    - 📄 `L2\electron\package-lock.json` (JSON)
    - 📄 `L2\electron\package.json` (JSON)
  - 📁 `L2\express-app/`
    - 📁 `L2\express-app\.vscode/`
      - 📄 `L2\express-app\.vscode\project-structure.md` (Markdown)
    - 📁 `L2\express-app\controllers/`
      - 📄 `L2\express-app\controllers\pizze.controller.js` (JavaScript)
        - *Imports:* `../services/pizze.service`
        - *Exports:* `module.exports`
    - 📁 `L2\express-app\middleware/`
      - 📄 `L2\express-app\middleware\mainLogger.middleware.js` (JavaScript)
        - *Exports:* `module.exports`
      - 📄 `L2\express-app\middleware\pizzaLogger.middleware.js` (JavaScript)
    - 📁 `L2\express-app\routes/`
      - 📄 `L2\express-app\routes\pizze.route.js` (JavaScript)
        - *Imports:* `express`, `../controllers/pizze.controller`
        - *Exports:* `module.exports`
    - 📁 `L2\express-app\services/`
      - 📄 `L2\express-app\services\pizze.service.js` (JavaScript)
        - *Exports:* `module.exports`
    - 📄 `L2\express-app\index.js` (JavaScript)
      - *Imports:* `express`, `./routes/pizze.route`, `./middleware/mainLogger.middleware`
    - 📄 `L2\express-app\package-lock.json` (JSON)
    - 📄 `L2\express-app\package.json` (JSON)
  - 📄 `L2\L2 - node.pptx.pdf` (Unknown)
- 📄 `.gitignore` (Unknown)

---
Last updated: 2025-07-10T09:36:06.242Z
