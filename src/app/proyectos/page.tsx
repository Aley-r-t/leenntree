"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./proyectos.css";

type WordlistRepo = {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  stars?: number;
};

const WORDLISTS: WordlistRepo[] = [
  { id: "seclists", name: "SecLists (orwagodfather)", url: "https://github.com/orwagodfather/WordList/tree/main",
    description: "Colección de wordlists para fuzzing, fuerza bruta y enumeración.", tags: ["fuzzing","passwords","web"], stars: 99999 },
  { id: "dns", name: "DNS names (kaimi-io)", url: "https://github.com/kaimi-io/web-fuzz-wordlists",
    description: "Listas para descubrir subdominios y registros DNS.", tags: ["dns","recon"], stars: 1200 },
  { id: "custom", name: "Mi Wordlist Personal (Karanxa)", url: "https://github.com/Karanxa/Bug-Bounty-Wordlists/tree/main",
    description: "Diccionarios curados para proyectos específicos (crawl, endpoints, APIs).", tags: ["personal","api","endpoints"], stars: 42 },
];

const PROYECTOS_PERSONALES: WordlistRepo[] = [
  { id: "demo-project", name: "Mi Aplicación Demo", url: "https://github.com/Aley-r-t",
    description: "Un proyecto personal desarrollado en Next.js para mostrar mis habilidades.", tags: ["react","nextjs","frontend"], stars: 5 },
];
function useClipboard() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1600);
    } catch {}
  };
  return { copiedId, copy };
}

export default function ProyectosWordlistsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"utilidades" | "personales">("utilidades");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "stars">("name");
  const [openResources, setOpenResources] = useState(false);
  const { copiedId, copy } = useClipboard();
  const recursosRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    const sourceData = activeCategory === "utilidades" ? WORDLISTS : PROYECTOS_PERSONALES;
    let data = [...sourceData];
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q) ||
          w.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (activeTag) data = data.filter((w) => w.tags.includes(activeTag));
    if (sortBy === "name") data.sort((a, b) => a.name.localeCompare(b.name));
    else data.sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
    return data;
  }, [query, activeTag, sortBy, activeCategory]);

  const availableTags = useMemo(() => {
    const sourceData = activeCategory === "utilidades" ? WORDLISTS : PROYECTOS_PERSONALES;
    const tagsSet = new Set<string>();
    sourceData.forEach(item => item.tags.forEach(t => tagsSet.add(t)));
    return Array.from(tagsSet).sort();
  }, [activeCategory]);

  // Resetear el tag activo cuando se cambia de categoría
  useEffect(() => {
    setActiveTag(null);
  }, [activeCategory]);
  // Cerrar dropdown al hacer click fuera o con ESC
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setOpenResources(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenResources(false);
    if (openResources) {
      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openResources]);

  const goToRecursos = () => {
    setOpenResources(false);
    recursosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav__left">
          <div className="brand" aria-label="Proyectos">
            <span className="brand__logo" aria-hidden>★</span>
            <span className="brand__text">Proyectos</span>
          </div>

          <div className="search">
            <span className="search__icon" aria-hidden>🔎</span>
            <input
              className="search__input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar nombre, tag o descripción…"
              aria-label="Buscar"
            />
          </div>
        </div>

        <div className="nav__right">
          <div className="selectWrap">
            <label className="label" htmlFor="ordenar">Orden</label>
            <select
              id="ordenar"
              className="select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "stars")}
            >
              <option value="name">Nombre (A→Z)</option>
              <option value="stars">Estrellas (desc)</option>
            </select>
          </div>

          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown__btn"
              aria-haspopup="menu"
              aria-expanded={openResources}
              onClick={() => setOpenResources(v => !v)}
            >
              Recursos <span className="caret" aria-hidden>▾</span>
            </button>
            {openResources && (
              <div role="menu" className="dropdown__menu">
                <button role="menuitem" className="dropdown__item" onClick={goToRecursos}>
                  Seguridad
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="categoryTabs">
          <button 
            className={`categoryTab ${activeCategory === "utilidades" ? "categoryTab__active" : ""}`}
            onClick={() => setActiveCategory("utilidades")}
          >
            🛠 Utilidades (Wordlists)
          </button>
          <button 
            className={`categoryTab ${activeCategory === "personales" ? "categoryTab__active" : ""}`}
            onClick={() => setActiveCategory("personales")}
          >
            💻 Proyectos Personales
          </button>
        </div>

        <section className="filters">
          <div className="tags">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`tag ${activeTag === null ? "tag__active" : ""}`}
            >
              Todos
            </button>
            {availableTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(t)}
                className={`tag ${activeTag === t ? "tag__active" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        <section className="grid" aria-live="polite">
          {filtered.map((repo) => (
            <article key={repo.id} className="card">
              <header className="card__head">
                <h3 className="card__title" title={repo.name}>{repo.name}</h3>
                <div className="card__meta">
                  {typeof repo.stars === "number" && <span title="Estrellas aproximadas">★ {repo.stars.toLocaleString()}</span>}
                </div>
              </header>

              <p className="card__desc">{repo.description}</p>

              <div className="card__tags">
                {repo.tags.map((tag) => (
                  <span key={tag} className="card__tag">🏷️ {tag}</span>
                ))}
              </div>

              <div className="card__actions">
                <a className="btnPrimary" href={repo.url} target="_blank" rel="noreferrer">Abrir repo ↗</a>
                <button className="btnGhost" onClick={() => copy(repo.id, `git clone ${repo.url}.git`)}>
                  {copiedId === repo.id ? "Copiado ✔" : "Copiar clone ⧉"}
                </button>
              </div>
            </article>
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="empty">
            <p className="empty__title">Nada por aquí… aún</p>
            <p className="empty__text">Quita filtros o agrega más items en <code>WORDLISTS</code>.</p>
          </div>
        )}

        {activeCategory === "utilidades" && (
          <section ref={recursosRef} className="recursos" aria-label="Recursos de Seguridad">
            <h2 className="recursos__title">Seguridad</h2>
            <h2 className="recursos__title"><span>Nota: Esto NO SON MIS PROYECTOS. Agradecimientos totales a los dueños de los Repositorios uso sus proyectos a menudo.</span></h2>
            <p className="recursos__text">Colección rápida con los mismos repos de arriba, agrupados como recursos de seguridad. Me ayuda a
              que cada cosa que aprendo lo puedo encontrar rápido y fácil aquí.
            </p>
            <ul className="links">
              {WORDLISTS.map((r) => (
                <li key={r.id} className="links__item">
                  <a href={r.url} target="_blank" rel="noreferrer" className="link">
                    {r.name} — <span className="muted">{r.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
