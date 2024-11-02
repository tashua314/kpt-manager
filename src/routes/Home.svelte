<script lang="ts">
  import Header from '../lib/components/Header.svelte';
</script>

<Header />

<main class="home">
  <section class="hero">
    <h1>Welcome to KPT App</h1>
    <p>Track your progress and grow with Keep, Problem, Try methodology</p>
    <div class="cta-buttons">
      <a href="/register" class="button primary">Get Started</a>
      <a href="/login" class="button secondary">Login</a>
    </div>
  </section>
</main>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .hero {
    text-align: center;
    padding: 4rem 0;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .button {
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s;
  }

  .primary {
    background-color: #4CAF50;
    color: white;
  }

  .primary:hover {
    background-color: #45a049;
  }

  .secondary {
    background-color: #f5f5f5;
    color: #333;
  }

  .secondary:hover {
    background-color: #e0e0e0;
  }
</style>