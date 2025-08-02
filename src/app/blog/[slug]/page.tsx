'use client';

import React, { useState } from 'react';

const posts = [
  {
    slug: 'blog-personal',
    title: 'Blog personal',
    content: '...',
  },
  {
    slug: 'glassmorphism-css',
    title: 'Glassmorphism en CSS: Guía paso a paso',
    content: 'Contenido completo del artículo sobre Glassmorphism...',
  },
  {
    slug: 'optimizando-react',
    title: 'Optimizando React con useRef y useEffect',
    content: 'Contenido completo del artículo sobre React...',
  }
];

type Params = { slug: string };

export default function BlogPostPage({ params }: { params: Params }) {
  const slug = params.slug;

  const post = posts.find((p) => p.slug === slug);

  if (!post || slug !== 'blog-personal') {
    return <div style={{ textAlign: 'center', marginTop: '4rem', color: 'crimson' }}>Artículo no encontrado 😞</div>;
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'Segoe UI, sans-serif', background: '#fff', color: '#333', lineHeight: 1.6, borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <article style={{ animation: 'fadeIn 0.6s ease-in' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#3a0ca3' }}>Nota: Es para tener un recuerdo de cómo empecé</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', color: '#4361ee' }}>Cómo me perdí a mí mismo</h2>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Como me perdí a mí mismo. La verdad pensé mucho antes de escribir y bueno, con honor a la verdad y a empezar con el pie derecho. Suelo ser un poco intrépido aun sin tener la claridad para hacer bien las cosas. Me describo a mí mismo como una persona de muy pocos amigos que piensa mucho antes de decir algo para evitar ofender a la otra persona, que muy a menudo pide disculpas por todo, hasta por existir creo.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Sé que está mal voy a cambiar. Por mucho tiempo me ahogaba cuando no conseguía algo. Me di cuenta que no entiendo a la primera muchos de los chistes, el porqué no estoy seguro aún. Conocí a una persona que admiro mucho, la verdad que creo que leyó el libro de cómo mandar a la "mrd" educadamente.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Les comento un poco: soy alguien que para estudiar necesita absoluto silencio. No le gusta que le griten, creo que desde niño, y muchas veces no le gusta que le digan las cosas en la cara. Pero creo que voy aprendiendo de eso. Soy un tanto obsesivo cuando quiero algo. Adicional a ello, siento que tengo una dificultad clara para hablar. Poco a poco, pero me voy perdonando a mí mismo.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Quién lo diría, poco a poco estoy aprendiendo a respetar mis tiempos. Pero tengo que tomar con más valor mis decisiones y a valorar más a las personas que me rodean. Siempre pensé que me tenía que esforzar de más para ser productivo, pero veo que si no soy feliz en primer lugar va a salir mal, solo tenía que solucionarlo como venía. Entendí que no podía planear todo, y que aunque no saliera como quería, siempre habría una solución.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Creo que en mi infancia existieron decisiones que sentía inconscientemente que no tomé por mi cuenta, que dejaron en mí cierto resentimiento. Al dejar la casa de mis padres, no supe cómo afrontar las cosas. Y algo que creo que es cierto: no me gusta tomar decisiones por mí mismo por miedo a equivocarme y no querer cargar con esa responsabilidad. Pero ahora entiendo que debo aprender a confiar en mí mismo.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2rem', color: '#4361ee' }}>Aprendiendo a ser feliz</h2>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          La felicidad es un estado mental que todos buscamos, pero a menudo parece esquivo. He aprendido que la clave para ser feliz radica en aceptarnos a nosotros mismos y en encontrar un propósito en lo que hacemos. No se trata de evitar el dolor o la tristeza, sino de aprender a navegar a través de ellos y encontrar lecciones en cada experiencia.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Una de las cosas más importantes que he descubierto es la importancia de rodearnos de personas que nos apoyen y nos inspiren. Las relaciones significativas son fundamentales para nuestro bienestar emocional. También es crucial dedicar tiempo a actividades que disfrutemos y que nos hagan sentir vivos.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Finalmente, la práctica de la gratitud ha sido transformadora en mi vida. Tomarme un momento cada día para reflexionar sobre las cosas por las que estoy agradecido me ayuda a mantener una perspectiva positiva, incluso en los momentos difíciles.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          <span style={{ fontWeight: 'bold', color: '#f72585' }}>Recordatorio a mí mismo:</span> Voy a respetar lo anterior escrito en este blog. Cultivar el agradecimiento.
        </p>
      </article>
    </main>
  );
}