import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Maggie Garcia"
      description="Writer • Editor • Researcher"
    >
      <main style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* HERO SECTION */}
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Hi, I’m <span style={{ color: '#008060' }}>Maggie Garcia</span>.
        </h1>

        <p style={{ fontSize: '1.3rem', lineHeight: '1.7', marginBottom: '2rem' }}>
          I’m a writer, editor, and researcher with a passion for clear communication,
          thoughtful storytelling, and transforming complex ideas into reader-friendly work.
        </p>

        {/* BUTTONS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <Link className="button button--primary" to="/about-me">
            About Me
          </Link>

          <Link className="button button--secondary" to="/docs/writing-samples">
            Writing Samples
          </Link>

          <Link className="button button--secondary" to="/resume">
            Résumé
          </Link>
        </div>

        {/* OPTIONAL SECTION */}
        <h2 style={{ marginBottom: '0.5rem' }}>What I Do</h2>
        <p style={{ lineHeight: '1.7' }}>
          I specialize in literary analysis, editing, and research-driven writing projects.
          My background includes academic work, project coordination, and professional
          communication across various audiences.
        </p>

      </main>
    </Layout>
  );
}
