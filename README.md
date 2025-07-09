# ngx-lite-tools

🧰 A lightweight collection of standalone Angular utilities designed to simplify common frontend tasks — such as copying to clipboard, handling external links, managing themes, keyboard shortcuts, and more.

---

## ✨ Features

- 📋 `copyToClipboard` directive

## ✨ To do

- 🔗 `externalLink` directive with security best practices
- 🌓 `ThemeToggleService` for dark/light mode switching
- ⌨️ `KeyboardShortcutService` for custom shortcut handling
- 🕒 `timeAgo` pipe for relative timestamps

---

## 📦 Installation

```bash
npm install ngx-lite-tools
```

---
## 🚀 Usage

### Copy to Clipboard

```ts
import { CopyToClipboardDirective } from 'ngx-lite-tools';

@Component({
  standalone: true,
  imports: [CopyToClipboardDirective],
})
export class MyComponent {}
```

```html
<button [copyToClipboard]="'Hello World'" (copied)="onCopied($event)">
  📋 Copy Text
</button>
```
