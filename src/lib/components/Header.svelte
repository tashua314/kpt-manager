<script lang="ts">
  import { isAuthenticated, logout } from '../stores/auth';
</script>

<header class="header">
  <nav>
    <div class="logo">
      <a href="/">KPT App</a>
    </div>
    <ul class="nav-links">
      <li><a href="/">ホーム</a></li>
      {#if $isAuthenticated}
        <li><a href="/dashboard">ダッシュボード</a></li>
        <li><a href="/timeline">タイムライン</a></li>
        <li><button on:click={logout}>ログアウト</button></li>
      {:else}
        <li><a href="/login">ログイン</a></li>
        <li><a href="/register">新規登録</a></li>
      {/if}
    </ul>
  </nav>
</header>

<style>
  .header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: #333;
  }

  button {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
  }

  button:hover {
    color: #333;
  }
</style>