// src/app/blog/resumen-como-robar-como-un-artista/page.tsx

import React from 'react'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Resumen de “Cómo robar como un artista”',
  description: 'Un libro que nos enseña a ser creativos.'
}

export default function ResumenComoRobarComoUnArtistaPage() {
  // Si hubieras extraído datos desde un CMS o API podrías aquí
  // comprobar que existen y, si no, lanzar notFound():
  // if (!datos) notFound()

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '2rem auto',
        fontFamily: 'Segoe UI, sans-serif',
        background: '#fff',
        color: '#333',
        lineHeight: 1.6,
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#3a0ca3'
        }}
      >
        Resumen de “Cómo robar como un artista”
      </h1>

      <p
        style={{
          fontSize: '1.125rem',
          marginBottom: '1.5rem',
          color: '#555'
        }}
      >
        Escribire las frases que mas me gustaron del libro.
      </p>

      <article>
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
          {/* Aquí va el contenido completo de tu resumen */}
          Si nos liberamos de la carga de se completamente originales, dejaremos 
          de intentar hacer las cosas desde cero. Para asumir nuestras influencias en 
          vez de huir de ellas.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            La originalidad = Un plagio no detectado. 
        </p>
        
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Estamos formados y conformados de aquello que amamos 
        </p>

         <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Junta basura y saca  la basura. De tu mente.
        </p>

           <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Roba solo cosas que hablen directamente a tu alma.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Debes tener curiosidad por el mundo en que vives.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            No te preocupes por investigar empieza por buscar.
        </p>
        
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Acostumbrate a anotar todos tus pensamientos y observaciones. Para mi apreciacion personal
            es una manera de escuchar tu voz interior.
        </p>

           <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Garabatea mientras hablas por telefono.
        </p>
        
           <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Haz cosas conocete.
        </p>

           <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Si hubiera esperado saber quien era antes de empezar, seguiria sentado 
            intentando decifrarme.
        </p>
        
           <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Creando cosas y haciendo nuestro trabajo ayuda a encontrarnos.
        </p>
        
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Sindrome del impostor: Fenomeno por el cual el individuo no puede interiorizar sus logros.
        </p>
        
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            <span>El mundo es un escenario.</span>
        </p>
        
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Empieza a copiar lo que amas. Cuando acabes de copiar  te encontraras a ti mismo.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            La mano humana es incapaz de hacer una copia perfecta.
        </p>
        
        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Si copias a un autor es plagio, si copias a muchos es investigación.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            No solo te robes el estilo, robate el pensamiento detras de ese estilo.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            No quieres verte como tus heroes, quieres observar como ellos.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            Imitar a tus heroes no es adular.
        </p>

        <p style={{ marginBottom: '1rem', textAlign: 'justify' }}>
            No sabemos de donde vienen las ideas, lo que si sabemos es que no vienen de nuestras laptops
        </p>
        
        
        
        
        
        
        
        
        
        
        {/* Sigue añadiendo los párrafos que necesites... */}
      </article>
    </main>
  )
}
