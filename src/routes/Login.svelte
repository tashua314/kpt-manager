<script lang="ts">
  import { login } from '../lib/stores/auth';
  import Header from '../lib/components/Header.svelte';
  import { navigate } from 'svelte-routing';

  let email = '';
  let password = '';

  function handleSubmit() {
    login();
    navigate('/dashboard');
  }
</script>

<Header />

<main class="login">
  <div class="login-container">
    <h1>ログイン</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          required
          placeholder="example@email.com"
        />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          required
          placeholder="パスワードを入力"
        />
      </div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</main>

<style>
  .login {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
  }

  .login-container {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
  }

  button:hover {
    background-color: #45a049;
  }
</style>