/* ==========================================================================
   GAME ENGINE — XP, levels, achievements, persistence, toasts.
   ========================================================================== */

/* DK is declared in data.js, which loads first. */
DK.game = (() => {
  const SAVE_KEY = "dk-portfolio-save-v1";
  const LEVEL_TITLES = [
    "Visitor", "Wanderer", "Explorer", "Investigator", "Analyst",
    "Strategist", "Insider", "Confidant", "Ally", "Legend",
  ];
  const XP_PER_LEVEL = 60;

  let state = {
    xp: 0,
    unlocked: [],      // achievement ids
    seen: [],          // generic one-time event ids (sections, cards…)
    theme: null,       // 'dark' | 'light'
  };

  /* ---------- persistence ---------- */
  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) state = Object.assign(state, JSON.parse(raw));
    } catch (e) { /* private mode etc. — play session-only */ }
  }

  function save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) { /* noop */ }
  }

  function reset() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* noop */ }
    location.reload();
  }

  /* ---------- xp & levels ---------- */
  function maxXP() {
    return DK.achievements.reduce((s, a) => s + a.xp, 0);
  }

  function level() {
    return Math.min(LEVEL_TITLES.length, Math.floor(state.xp / XP_PER_LEVEL) + 1);
  }

  function levelTitle() {
    return LEVEL_TITLES[level() - 1];
  }

  function addXP(amount) {
    const before = level();
    state.xp = Math.min(maxXP(), state.xp + amount);
    save();
    renderHUD(true);
    if (level() > before) {
      toast("⬆️", `Level Up! You are now Level ${level()} — ${levelTitle()}`, "level");
    }
  }

  /* ---------- one-time events ---------- */
  function once(id, fn) {
    if (state.seen.includes(id)) return false;
    state.seen.push(id);
    save();
    if (fn) fn();
    return true;
  }

  function seenCount(prefix) {
    return state.seen.filter((s) => s.startsWith(prefix)).length;
  }

  function hasSeen(id) {
    return state.seen.includes(id);
  }

  /* ---------- achievements ---------- */
  function unlock(id) {
    if (state.unlocked.includes(id)) return;
    const a = DK.achievements.find((x) => x.id === id);
    if (!a) return;
    state.unlocked.push(id);
    save();
    toast(a.icon, `Achievement unlocked: ${a.name}`, "achievement", a.desc);
    addXP(a.xp);
    renderAchievements();
    if (state.unlocked.length === DK.achievements.length) {
      setTimeout(() => toast("👑", "100% — every achievement unlocked. Impressive dedication!", "level"), 1200);
    }
  }

  function isUnlocked(id) {
    return state.unlocked.includes(id);
  }

  /* ---------- theme ---------- */
  function applyTheme(theme, persist) {
    document.documentElement.setAttribute("data-theme", theme);
    if (persist) { state.theme = theme; save(); }
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  function initTheme() {
    const preferred = state.theme ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    applyTheme(preferred, false);
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next, true);
    unlock("shapeshifter");
  }

  /* ---------- toasts ---------- */
  const toastQueue = [];
  let toastBusy = false;

  function toast(icon, text, kind, sub) {
    toastQueue.push({ icon, text, kind: kind || "info", sub });
    pumpToasts();
  }

  function pumpToasts() {
    if (toastBusy || !toastQueue.length) return;
    toastBusy = true;
    const { icon, text, kind, sub } = toastQueue.shift();
    const host = document.getElementById("toast-host");
    const el = document.createElement("div");
    el.className = `toast toast-${kind}`;
    el.setAttribute("role", "status");
    el.innerHTML =
      `<span class="toast-icon">${icon}</span>` +
      `<span class="toast-body"><strong>${text}</strong>${sub ? `<small>${sub}</small>` : ""}</span>`;
    host.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => { el.remove(); toastBusy = false; pumpToasts(); }, 350);
    }, 2800);
  }

  /* ---------- HUD ---------- */
  function renderHUD(pulse) {
    const pct = Math.round((state.xp / maxXP()) * 100);
    const fill = document.getElementById("xp-fill");
    const label = document.getElementById("xp-label");
    const lvlEl = document.getElementById("hud-level");
    if (fill) fill.style.width = pct + "%";
    if (label) label.textContent = `${state.xp} / ${maxXP()} XP`;
    if (lvlEl) lvlEl.textContent = `LV ${level()}`;
    const count = document.getElementById("hud-achievements");
    if (count) count.textContent = `${state.unlocked.length}/${DK.achievements.length}`;
    if (pulse && fill) {
      fill.classList.remove("pulse");
      void fill.offsetWidth;
      fill.classList.add("pulse");
    }
  }

  /* ---------- achievements panel ---------- */
  function renderAchievements() {
    const grid = document.getElementById("achievements-grid");
    if (!grid) return;
    grid.innerHTML = DK.achievements.map((a) => {
      const got = isUnlocked(a.id);
      const hidden = a.secret && !got;
      return `<div class="ach-card ${got ? "unlocked" : "locked"}" title="${hidden ? "Secret achievement" : a.desc}">
        <span class="ach-icon">${hidden ? "❓" : a.icon}</span>
        <span class="ach-name">${hidden ? "???" : a.name}</span>
        <span class="ach-desc">${hidden ? "Keep exploring to discover this secret…" : a.desc}</span>
        <span class="ach-xp">${got ? "✓ " : ""}+${a.xp} XP</span>
      </div>`;
    }).join("");
    const summary = document.getElementById("achievements-summary");
    if (summary) {
      const pct = Math.round((state.unlocked.length / DK.achievements.length) * 100);
      summary.textContent = `${state.unlocked.length} of ${DK.achievements.length} unlocked · ${pct}% complete`;
    }
  }

  /* ---------- konami code (keyboard + touch) ---------- */
  function initKonami() {
    const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let pos = 0;

    const feed = (token) => {
      pos = token === seq[pos] ? pos + 1 : (token === seq[0] ? 1 : 0);
      if (pos === seq.length) {
        pos = 0;
        unlock("konami");
        confetti();
      }
    };

    document.addEventListener("keydown", (e) => {
      feed(e.key.length === 1 ? e.key.toLowerCase() : e.key);
    });

    /* Touch variant: swipes are the arrows, two taps at the end are B A.
       Listeners are passive observers — scrolling is never blocked. */
    let x0 = 0, y0 = 0, t0 = 0;
    document.addEventListener("touchstart", (e) => {
      const t = e.changedTouches[0];
      x0 = t.clientX; y0 = t.clientY; t0 = Date.now();
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - x0, dy = t.clientY - y0;
      const adx = Math.abs(dx), ady = Math.abs(dy);
      if (Math.max(adx, ady) < 24) {
        // a tap — only meaningful when B or A is the next expected input,
        // so ordinary tapping around the page never resets swipe progress
        const expected = seq[pos];
        if (expected === "b" || expected === "a") feed(expected);
        return;
      }
      if (Date.now() - t0 > 800) return; // slow drag, not a deliberate swipe
      feed(adx > ady ? (dx > 0 ? "ArrowRight" : "ArrowLeft") : (dy > 0 ? "ArrowDown" : "ArrowUp"));
    }, { passive: true });
  }

  /* lightweight confetti, respects reduced motion */
  function confetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#22d3ee", "#a78bfa", "#fbbf24", "#34d399", "#f472b6"];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement("span");
      p.className = "confetti";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = Math.random() * 0.6 + "s";
      p.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 3500);
    }
  }

  /* ---------- boot ---------- */
  function init() {
    load();
    initTheme();
    renderHUD(false);
    renderAchievements();
    initKonami();
    if (!isUnlocked("new-game")) {
      setTimeout(() => unlock("new-game"), 900);
    }
  }

  return {
    init, addXP, unlock, isUnlocked, once, hasSeen, seenCount,
    toggleTheme, toast, reset, confetti, renderHUD, renderAchievements,
    get state() { return state; },
    level, levelTitle,
  };
})();
