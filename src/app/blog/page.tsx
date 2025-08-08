'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

interface Post {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    category: string;
    readTime: string;
    date: string;
}

const posts: Post[] = [
    {
        id: '1',
        title: 'Blog personal',
        excerpt: 'Lenguaje colocial compartiendo una etapa inicial de mi vida',
        image: '/img/KorosenseiAnime.webp',
        slug: 'blog-personal',
        category: 'Backend',
        readTime: '8 min',
        date: '15 Jun 2025'
    },
    {
        id: '2',
        title: 'Resumen de Como robar como un artista',
        excerpt: 'Un libro que nos enseña a ser creativos y aprovechar nuestras influencias.',
        image: '/img/KorosenseiAnime.webp',
        slug: 'resumen-como-robar-como-un-artista',
        category: 'Backend',
        readTime: '12 min',
        date: '12 Jun 2025'
    },
   //{
   //     id: '3',
   //     title: 'Optimizando React con useRef y useEffect',
   //     excerpt: 'Trucos y patrones avanzados para hacer tu aplicación más fluida, reactiva y performante.',
   //     image: '/img/Logo-AWS-smile.webp',
   //     slug: 'optimizando-react',
   //     category: 'React',
   //     readTime: '10 min',
   //     date: '10 Jun 2025'
   // },
        {
        id: '4',
        title: 'Resumenes de libros que vamos leendo',
        excerpt: 'Libro - como detectar mentiras',
        image: '/img/KorosenseiAnime.webp',
        slug: 'como-robar-como-un-artista',
        category: 'Backend',
        readTime: '10 min',
        date: '10 Jun 2025'
    }
];

const categories = ['Todos', 'Backend', 'Frontend', 'CSS', 'React'];

// Componente de icono SVG simple (reemplaza lucide-react)
const SearchIcon = () => (
    <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const BookOpenIcon = () => (
    <svg className={styles.badgeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const CalendarIcon = () => (
    <svg className={styles.cardMetaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg className={styles.cardMetaIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CodeIcon = () => (
    <svg className={styles.categoryIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className={styles.readMoreIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const ZapIcon = () => (
    <svg className={styles.newsletterBadgeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getCategoryBadgeClass = (category: string) => {
        const baseClass = styles.categoryBadge;
        switch(category) {
            case 'Backend': return `${baseClass} ${styles.categoryBadgeBackend}`;
            case 'CSS': return `${baseClass} ${styles.categoryBadgeCSS}`;
            case 'React': return `${baseClass} ${styles.categoryBadgeReact}`;
            case 'Frontend': return `${baseClass} ${styles.categoryBadgeFrontend}`;
            default: return baseClass;
        }
    };

    const getImageOverlayClass = (category: string) => {
        const baseClass = styles.cardImageOverlay;
        switch(category) {
            case 'Backend': return `${baseClass} ${styles.cardImageOverlayBackend}`;
            case 'CSS': return `${baseClass} ${styles.cardImageOverlayCSS}`;
            case 'React': return `${baseClass} ${styles.cardImageOverlayReact}`;
            case 'Frontend': return `${baseClass} ${styles.cardImageOverlayFrontend}`;
            default: return baseClass;
        }
    };

    const getCardAnimationClass = (index: number) => {
        switch(index) {
            case 0: return styles.cardAnimation1;
            case 1: return styles.cardAnimation2;
            case 2: return styles.cardAnimation3;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <BookOpenIcon />
                        <span className={styles.badgeText}>Blog Personal</span>
                    </div>
                    
                    <h1 className={styles.title}>
                        Resumenes de libros que leo y blog
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Compartiendo mi experiencia y conocimientos adquiridos.
                    </p>

                    {/* Search Bar */}
                    <div className={styles.searchContainer}>
                        <div className={styles.searchWrapper}>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Buscar artículos..."
                                className={styles.searchInput}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Animated Background Elements */}
                <div className={styles.bgElement1}></div>
                <div className={styles.bgElement2}></div>
            </div>

            {/* Category Filter */}
            <div className={styles.categorySection}>
                <div className={styles.categoryContainer}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`${styles.categoryButton} ${
                                selectedCategory === category ? styles.categoryButtonActive : ''
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className={styles.gridSection}>
                <div className={styles.grid}>
                    {filteredPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className={`${styles.card} ${getCardAnimationClass(index)}`}
                            onMouseEnter={() => setHoveredCard(post.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Category Badge */}
                            <div className={getCategoryBadgeClass(post.category)}>
                                <CodeIcon />
                                {post.category}
                            </div>

                            {/* Image Container */}
                            <div className={styles.cardImageContainer}>
                                <div className={getImageOverlayClass(post.category)}></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardImageGradient}></div>
                            </div>

                            {/* Content */}
                            <div className={styles.cardContent}>
                                {/* Meta Information */}
                                <div className={styles.cardMeta}>
                                    <div className={styles.cardMetaItem}>
                                        <CalendarIcon />
                                        <span>{post.date}</span>
                               
                                    </div>
                                    <div className={styles.cardMetaItem}>
                                        <ClockIcon />
                                        <span>{post.readTime}</span>    
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className={styles.cardTitle}>
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className={styles.cardExcerpt}>
                                    {post.excerpt}
                                </p>

                                {/* Read More Button */}
                                <div className={styles.cardFooter}>
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        <span>Leer artículo</span>
                                        <ArrowRightIcon />
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className={styles.cardHoverOverlay}></div>
                        </article>
                    ))}
                </div>

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className={styles.noResults}>
                        <div className={styles.noResultsIcon}>
                            <SearchIcon />
                        </div>
                        <h3 className={styles.noResultsTitle}>No se encontraron artículos</h3>
                        <p className={styles.noResultsText}>Intenta con otros términos de búsqueda o categorías</p>
                    </div>
                )}
            </div>
            {/* Newsletter Section */}
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContainer}>
                    <div className={styles.newsletterBadge}>
                        <ZapIcon />
                        <span className={styles.newsletterBadgeText}>Newsletter</span>
                    </div>
                    
                    <h2 className={styles.newsletterTitle}>
                        Mantente actualizado
                    </h2>
                    <p className={styles.newsletterSubtitle}>
                        Recibe los últimos artículos y tutoriales directamente en tu inbox
                    </p>
                    
                    <div className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className={styles.newsletterInput}
                        />
                        <button className={styles.newsletterButton}>
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}