<script lang="ts">
  import Header from '../lib/components/Header.svelte';
  import KPTForm from '../lib/components/KPTForm.svelte';
</script>

<Header />

<main class="dashboard">
  <h1>KPTの登録</h1>
  
  <div class="kpt-grid">
    <div class="kpt-section">
      <KPTForm type="keep" />
    </div>
    <div class="kpt-section">
      <KPTForm type="problem" />
    </div>
    <div class="kpt-section">
      <KPTForm type="try" />
    </div>
  </div>
</main>

<style>
  .dashboard {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    margin: 1rem 0;
    color: #333;
    font-size: 1.5rem;
  }

  .kpt-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    .kpt-grid {
      grid-template-columns: 1fr;
    }
  }
</style>