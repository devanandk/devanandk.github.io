/* ==========================================================================
   MAIN — renders content from data.js and wires up interactions.
   ========================================================================== */

(() => {
  const G = DK.game;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------- hero typing effect ---------------- */
  function initHero() {
    const roles = [
      "Banking Technologist",
      "Enterprise Integration Specialist",
      "Cloud-native Architect",
      "AI Explorer",
      "Java & Spring Boot Veteran",
    ];
    const el = $("#typed-role");
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = roles[0];
      return;
    }
    let ri = 0, ci = 0, deleting = false;
    (function tick() {
      const word = roles[ri];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 55); }
      else if (!deleting) { deleting = true; setTimeout(tick, 1800); }
      else if (ci > 0) { ci--; setTimeout(tick, 28); }
      else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 350); }
    })();
  }

  /* ---------------- character profile ---------------- */
  function renderAbout() {
    $("#about-summary").textContent = DK.profile.summary;

    $("#traits-grid").innerHTML = DK.profile.traits.map((t) =>
      `<div class="trait"><span class="trait-icon">${t.icon}</span><div><h4>${t.name}</h4><p>${t.desc}</p></div></div>`
    ).join("");

    $("#languages-list").innerHTML = DK.profile.languages.map((l) =>
      `<li><span class="lang-name">${l.name}</span>
        <span class="lang-bar"><span class="lang-fill" style="--w:${l.pct}%"></span></span>
        <span class="lang-level">${l.level}</span></li>`
    ).join("");

    $("#certs-list").innerHTML = DK.profile.certifications.map((c) =>
      `<li>🎖️ ${c}</li>`
    ).join("");

    $("#hobbies-grid").innerHTML = DK.profile.hobbies.map((h) =>
      `<div class="hobby" data-hobby="${h.icon}"><span class="hobby-icon">${h.icon}</span><h4>${h.name}</h4><p>${h.desc}</p></div>`
    ).join("");

    $("#education-list").innerHTML = DK.profile.education.map((e) =>
      `<li><strong>${e.school}</strong> — ${e.degree} <span class="muted">(${e.years})</span></li>`
    ).join("");

    // flight sim easter egg: click the aviation hobby
    const flight = $('.hobby[data-hobby="✈️"]');
    if (flight) flight.addEventListener("click", () => {
      G.unlock("pilot");
      flight.classList.add("takeoff");
      setTimeout(() => flight.classList.remove("takeoff"), 1300);
    });
  }

  /* ---------------- stats counters ---------------- */
  function renderStats() {
    $("#stats-grid").innerHTML = DK.stats.map((s, i) =>
      `<div class="stat"><span class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0</span>
        <span class="stat-label">${s.label}</span></div>`
    ).join("");

    const animate = (el) => {
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || "";
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = target + suffix;
        return;
      }
      const dur = 1400, t0 = performance.now();
      (function step(t) {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + (k === 1 ? suffix : "");
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    $$(".stat-value").forEach((el) => io.observe(el));
  }

  /* ---------------- skill tree ---------------- */
  function renderSkills() {
    $("#skills-grid").innerHTML = DK.skills.map((branch) =>
      `<button class="skill-branch" data-skill="${branch.id}" aria-expanded="false">
        <div class="skill-head">
          <span class="skill-icon">${branch.icon}</span>
          <span class="skill-name">${branch.name}</span>
          <span class="skill-chevron" aria-hidden="true">▾</span>
        </div>
        <p class="skill-blurb">${branch.blurb}</p>
        <div class="skill-items">
          ${branch.items.map((it) =>
            `<div class="skill-item">
              <div class="skill-item-row"><span>${it.name}</span><span class="skill-lvl">${it.lvl}</span></div>
              <div class="skill-track"><div class="skill-fill" style="--w:${it.lvl}%"></div></div>
              <small>${it.note}</small>
            </div>`
          ).join("")}
        </div>
      </button>`
    ).join("");

    $$(".skill-branch").forEach((card) => {
      card.addEventListener("click", () => {
        const open = card.classList.toggle("open");
        card.setAttribute("aria-expanded", open);
        if (open) {
          G.once(`skill:${card.dataset.skill}`, () => {
            G.unlock("skill-scout");
            G.addXP(5);
            if (G.seenCount("skill:") >= DK.skills.length) G.unlock("tree-climber");
          });
        }
      });
    });
  }

  /* ---------------- quest log ---------------- */
  function renderQuests() {
    $("#quest-log").innerHTML = DK.quests.map((q) =>
      `<article class="quest ${q.status}" data-quest="${q.id}">
        <div class="quest-marker" aria-hidden="true"></div>
        <div class="quest-card">
          <button class="quest-head" aria-expanded="false">
            <span class="quest-status">${q.status === "active" ? "⚔️ ACTIVE QUEST" : "✅ COMPLETED"}</span>
            <span class="quest-period">${q.period}</span>
            <h3>${q.title}</h3>
            <p class="quest-org">${q.org}</p>
            <span class="quest-xp">+${q.xp} XP earned</span>
            <span class="quest-chevron" aria-hidden="true">▾</span>
          </button>
          <div class="quest-body">
            <p class="quest-summary">${q.summary}</p>
            <h4>Quest log</h4>
            <ul>${q.log.map((l) => `<li>${l}</li>`).join("")}</ul>
            <div class="loot"><span class="loot-label">Loot acquired:</span>
              ${q.loot.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          </div>
        </div>
      </article>`
    ).join("");

    $$(".quest").forEach((q) => {
      const head = $(".quest-head", q);
      head.addEventListener("click", () => {
        const open = q.classList.toggle("open");
        head.setAttribute("aria-expanded", open);
        if (open) {
          G.once(`quest:${q.dataset.quest}`, () => {
            G.addXP(5);
            if (G.seenCount("quest:") >= DK.quests.length) G.unlock("historian");
          });
        }
      });
    });
  }

  /* ---------------- projects ---------------- */
  const RARITY_LABEL = { legendary: "Legendary", epic: "Epic", rare: "Rare", common: "Common" };

  function renderProjects(filter) {
    const list = DK.projects.filter((p) => !filter || filter === "all" || p.rarity === filter);
    $("#projects-grid").innerHTML = list.map((p) =>
      `<article class="project rarity-${p.rarity}" data-project="${p.id}" tabindex="0">
        <header>
          <span class="rarity-badge">${RARITY_LABEL[p.rarity]}</span>
          <span class="project-status">${p.status}</span>
        </header>
        <h3>${p.name}</h3>
        <p class="project-org">${p.org}</p>
        <p class="project-desc">${p.desc}</p>
        <div class="project-more">
          <ul>${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
        </div>
        <footer>${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</footer>
      </article>`
    ).join("");

    $$(".project").forEach((card) => {
      const inspect = () => {
        card.classList.toggle("open");
        G.once(`project:${card.dataset.project}`, () => {
          G.addXP(4);
          if (G.seenCount("project:") >= 5) G.unlock("specialist");
        });
      };
      card.addEventListener("click", inspect);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inspect(); }
      });
    });
  }

  function initProjectFilters() {
    $$("#project-filters button").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("#project-filters button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
      });
    });
  }

  /* ---------------- section tracking (scroll spy + XP) ---------------- */
  const SECTION_IDS = ["about", "skills", "experience", "projects", "achievements", "contact"];

  function initSections() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        // nav highlight
        $$(".nav-links a").forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
        // XP for first visit
        G.once(`section:${id}`, () => {
          G.addXP(8);
          if (id === "about") G.unlock("storyseeker");
          if (SECTION_IDS.every((s) => G.hasSeen(`section:${s}`))) G.unlock("completionist");
        });
        e.target.classList.add("revealed");
      });
    }, { threshold: 0.25 });
    SECTION_IDS.forEach((id) => { const s = $(`#${id}`); if (s) io.observe(s); });
  }

  /* ---------------- contact ---------------- */
  function initContact() {
    $$("#contact a[data-contact]").forEach((a) =>
      a.addEventListener("click", () => G.unlock("headhunter")));
  }

  /* ---------------- terminal easter egg ---------------- */
  function initTerminal() {
    const overlay = $("#terminal");
    const input = $("#term-input");
    const out = $("#term-output");
    const history = [];
    let hIdx = -1;

    const print = (text, cls) => {
      const line = document.createElement("div");
      line.className = "term-line" + (cls ? ` ${cls}` : "");
      line.innerHTML = text;
      out.appendChild(line);
      out.scrollTop = out.scrollHeight;
    };

    const open = () => {
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      input.focus();
      G.unlock("hacker");
      if (!out.dataset.greeted) {
        out.dataset.greeted = "1";
        print("DevOS v13.0 — guest shell. Type <b>help</b> for commands.", "muted");
      }
    };
    const close = () => {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    };

    $$("[data-open-terminal]").forEach((b) => b.addEventListener("click", open));
    $("#term-close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "`" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); open(); }
      if (e.key === "Escape" && overlay.classList.contains("open")) close();
    });
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

    const p = DK.profile;
    const commands = {
      help: () => print(
        ["Available commands:",
         "  <b>whoami</b>      character sheet", "  <b>skills</b>      skill tree summary",
         "  <b>quests</b>      career history", "  <b>projects</b>    notable side quests",
         "  <b>certs</b>       certifications", "  <b>langs</b>       spoken languages",
         "  <b>hobbies</b>     off-duty activities", "  <b>contact</b>     how to reach me",
         "  <b>theme</b>       toggle light/dark", "  <b>achievements</b> progress report",
         "  <b>clear</b>       clear screen", "  <b>exit</b>        close terminal",
        ].join("<br>")),
      whoami: () => print(`<b>${p.name}</b> — ${p.class}, Level ${p.level}<br>${p.title}<br>📍 ${p.location}`),
      skills: () => print(DK.skills.map((s) => `${s.icon} <b>${s.name}</b>: ${s.items.map((i) => i.name).join(", ")}`).join("<br>")),
      quests: () => print(DK.quests.map((q) => `${q.status === "active" ? "⚔️" : "✅"} <b>${q.title}</b> @ ${q.org} (${q.period})`).join("<br>")),
      projects: () => print(DK.projects.map((x) => `[${RARITY_LABEL[x.rarity]}] <b>${x.name}</b> — ${x.org}`).join("<br>")),
      certs: () => print(p.certifications.map((c) => `🎖️ ${c}`).join("<br>")),
      langs: () => print(p.languages.map((l) => `${l.name} — ${l.level}`).join("<br>")),
      hobbies: () => print(p.hobbies.map((h) => `${h.icon} ${h.name}: ${h.desc}`).join("<br>")),
      contact: () => print(`📧 <a href="mailto:${p.email}">${p.email}</a><br>💼 <a href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${p.github}" target="_blank" rel="noopener">GitHub</a>`),
      theme: () => { G.toggleTheme(); print("Theme toggled."); },
      achievements: () => print(`${G.state.unlocked.length}/${DK.achievements.length} achievements · ${G.state.xp} XP · Level ${G.level()} ${G.levelTitle()}`),
      clear: () => { out.innerHTML = ""; },
      exit: close,
      sudo: () => print("Nice try. This shell runs on the principle of least privilege. 🛡️", "muted"),
      coffee: () => print("☕ Brewing… ERROR 418: I'm a teapot.", "muted"),
      fly: () => { G.unlock("pilot"); print("✈️ Spawning at runway 27R… gear up, flaps 1. Enjoy the A320!"); },
      konami: () => print("↑ ↑ ↓ ↓ ← → ← → B A — but you didn't hear it from me.", "muted"),
      ls: () => print("about/  skills/  experience/  projects/  achievements/  contact/"),
      cd: (arg) => {
        const target = (arg || "").replace(/\/$/, "");
        if (SECTION_IDS.includes(target)) {
          close();
          document.getElementById(target).scrollIntoView({ behavior: "smooth" });
          print(`Navigating to /${target}`);
        } else print(`cd: no such section: ${arg || ""}`, "error");
      },
    };

    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" && history.length) {
        hIdx = Math.max(0, hIdx - 1); input.value = history[hIdx]; e.preventDefault(); return;
      }
      if (e.key === "ArrowDown" && history.length) {
        hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] || ""; e.preventDefault(); return;
      }
      if (e.key !== "Enter") return;
      const raw = input.value.trim();
      input.value = "";
      if (!raw) return;
      history.push(raw); hIdx = history.length;
      print(`<span class="term-prompt">guest@devk:~$</span> ${raw.replace(/</g, "&lt;")}`);
      const [cmd, ...args] = raw.toLowerCase().split(/\s+/);
      const fn = commands[cmd];
      if (fn) fn(args.join(" "));
      else print(`command not found: ${cmd} — try <b>help</b>`, "error");
    });
  }

  /* ---------------- misc UI ---------------- */
  function initUI() {
    $("#theme-toggle").addEventListener("click", G.toggleTheme);
    $("#reset-progress").addEventListener("click", () => {
      if (confirm("Start a new game? This resets your XP and achievements.")) G.reset();
    });
    $("#year").textContent = new Date().getFullYear();

    // mobile nav
    const burger = $("#nav-burger");
    const links = $("#nav-links");
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    $$("#nav-links a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

    // smooth anchor scrolling
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const target = $(a.getAttribute("href"));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
      });
    });
  }

  /* ---------------- boot ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    G.init();
    initHero();
    renderAbout();
    renderStats();
    renderSkills();
    renderQuests();
    renderProjects("all");
    initProjectFilters();
    initSections();
    initContact();
    initTerminal();
    initUI();
  });
})();
