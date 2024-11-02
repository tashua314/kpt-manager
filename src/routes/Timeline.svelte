<script lang="ts">
  import Header from '../lib/components/Header.svelte';
  import KPTCard from '../lib/components/KPTCard.svelte';
  import { timelineEntries } from '../lib/stores/kpt';
  import type { KPTType } from '../lib/types/kpt';
  
  let selectedType: KPTType | 'all' = 'all';
  let searchQuery = '';
  
  $: filteredEntries = $timelineEntries
    .filter(entry => selectedType === 'all' || entry.type === selectedType)
    .filter(entry => 
      searchQuery === '' || 
      entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
</script>

<Header />

<main class="timeline">
  <h1>タイムライン</h1>
  
  <div class="filters">
    <div class="type-filters">
      <button
        class:active={selectedType === 'all'}
        on:click={() => selectedType = 'all'}
      >
        すべて
      </button>
      <button
        class:active={selectedType === 'keep'}
        on:click={() => selectedType = 'keep'}
      >
        Keep
      </button>
      <button
        class:active={selectedType === 'problem'}
        on:click={() => selectedType = 'problem'}
      >
        Problem
      </button>
      <button
        class:active={selectedType === 'try'}
        on:click={() => selectedType = 'try'}
      >
        Try
      </button>
    </div>
    
    <div class="search">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="検索..."
      />
    </div>
  </div>
  
  <div class="entries">
    {#each filteredEntries as entry (entry.id)}
      <KPTCard {entry} />
    {/each}
  </div>
</main>

<style>
  .timeline {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    margin-bottom: 2rem;
    color: #333;
  }
  
  .filters {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .type-filters {
    display: flex;
    gap: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button.active {
    background: #4CAF50;
    color: white;
  }
  
  .search input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .entries {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>