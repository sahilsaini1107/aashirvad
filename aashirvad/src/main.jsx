import React from 'react';

function VedasWebsite() {
  return (
    <div>
      <header>
        <h1>Indian Vedas</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#veda1">Veda 1</a></li>
          <li><a href="#veda2">Veda 2</a></li>
          <li><a href="#veda3">Veda 3</a></li>
          <li><a href="#veda4">Veda 4</a></li>
        </ul>
      </nav>

      <main>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>Provide an introductory paragraph or two about the Indian Vedas.</p>
        </section>

        <section id="veda1">
          <h2>Veda 1</h2>
          <p>Information about Veda 1 goes here.</p>
        </section>

        <section id="veda2">
          <h2>Veda 2</h2>
          <p>Information about Veda 2 goes here.</p>
        </section>

        <section id="veda3">
          <h2>Veda 3</h2>
          <p>Information about Veda 3 goes here.</p>
        </section>

        <section id="veda4">
          <h2>Veda 4</h2>
          <p>Information about Veda 4 goes here.</p>
        </section>
      </main>

      <footer>
        <p>© 2023 aashirvad. All rights reserved.</p>
      </footer>

      <style jsx>{`
        /* Custom CSS styles */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
        }

        nav ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #f9f9f9;
          border-bottom: 1px solid #ddd;
        }

        nav ul li {
          display: inline-block;
        }

        nav ul li a {
          display: block;
          padding: 10px;
          text-decoration: none;
          color: #333;
        }

        nav ul li a:hover {
          background-color: #ddd;
        }

        main {
          padding: 20px;
        }

        section {
          margin-bottom: 40px;
        }

        footer {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default VedasWebsite;
