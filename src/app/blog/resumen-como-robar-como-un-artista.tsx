'use client';

import React from 'react';

export default function ResumenComoRobarComoUnArtista() {
  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: 'auto',
        fontFamily: 'Segoe UI, sans-serif',
        background: '#fff',
        color: '#333',
        lineHeight: 1.6,
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <article style={{ animation: 'fadeIn 0.6s ease-in' }}>
        {/* Título principal */}
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#3a0ca3'
          }}
        >
          Resumen de “Cómo robar como un artista”
        </h1>

        {/* Subtítulo o nota contextual */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginTop: '2rem',
            color: '#4361ee'
          }}
        >
          Un libro que nos enseña a ser creativos y aprovechar nuestras influencias
        </h2>

        {/* Contenido del resumen */}
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          En “Cómo robar como un artista”, Austin Kleon nos invita a mirar el trabajo de
          nuestros referentes no como algo que copiar al pie de la letra, sino como
          inspiración para construir nuestra propia voz creativa. El autor plantea que
          <strong>robar</strong> ideas no es plagio, sino aprender los mejores recursos
          que otros han desarrollado y hacerlos totalmente tuyos.
        </p>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Algunas ideas clave:
          <ul style={{ margin: '0.5rem 0 1rem 1.5rem' }}>
            <li><strong>Transforma</strong> lo que te inspira en algo nuevo.</li>
            <li><strong>Documenta</strong> tu proceso creativo para encontrar tus patrones.</li>
            <li><strong>Comparte</strong> tu trabajo desde el primer día para recibir feedback.</li>
          </ul>
        </p>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          Kleon también nos recuerda que nuestra influencia viene de múltiples fuentes:
          libros, música, cine, personas a nuestro alrededor… Y que cuanto más abramos
          nuestra mente a diversas inspiraciones, más rica será nuestra propia obra.
        </p>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          <span style={{ fontWeight: 'bold', color: '#f72585' }}>
            Recordatorio personal:
          </span>{' '}
          Buscar siempre el equilibrio entre aprender de los demás y mostrar lo que solo
          tú puedes aportar.
        </p>
      </article>
    </main>
  );
}
