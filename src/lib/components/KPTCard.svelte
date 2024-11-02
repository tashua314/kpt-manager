<script lang="ts">
  import type { KPTEntry } from '../types/kpt';
  
  export let entry: KPTEntry;
  
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  function handleLike() {
    // TODO: Implement like functionality
    console.log('Liked entry:', entry.id);
  }
</script>

<div class="kpt-card {entry.type}">
  <div class="header">
    <span class="type-badge">{entry.type.toUpperCase()}</span>
    <span class="category">{entry.category}</span>
  </div>
  
  <div class="content">
    <p>{entry.content}</p>
  </div>
  
  <div class="tags">
    {#each entry.tags as tag}
      <span class="tag">#{tag}</span>
    {/each}
  </div>
  
  <div class="meta">
    <div class="user">
      <span class="username">{entry.userName}</span>
      <span class="date">{formatDate(entry.createdAt)}</span>
    </div>
    
    <div class="actions">
      <button class="like-button" on:click={handleLike}>
        ♥ {entry.likes}
      </button>
    </div>
  </div>
  
  {#if entry.comments.length > 0}
    <div class="comments">
      {#each entry.comments as comment}
        <div class="comment">
          <strong>{comment.userName}</strong>
          <p>{comment.content}</p>
          <span class="comment-date">{formatDate(comment.createdAt)}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .kpt-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .kpt-card.keep {
    border-left: 4px solid #4CAF50;
  }
  
  .kpt-card.problem {
    border-left: 4px solid #f44336;
  }
  
  .kpt-card.try {
    border-left: 4px solid #2196F3;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .type-badge {
    background: #f5f5f5;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: bold;
  }
  
  .category {
    color: #666;
    font-size: 0.875rem;
  }
  
  .content {
    margin-bottom: 1rem;
  }
  
  .tags {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tag {
    background: #f5f5f5;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    color: #666;
  }
  
  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .user {
    display: flex;
    flex-direction: column;
  }
  
  .username {
    font-weight: bold;
  }
  
  .date {
    font-size: 0.875rem;
    color: #666;
  }
  
  .like-button {
    background: none;
    border: none;
    color: #f44336;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem;
  }
  
  .comments {
    border-top: 1px solid #eee;
    padding-top: 1rem;
  }
  
  .comment {
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: #f9f9f9;
    border-radius: 4px;
  }
  
  .comment p {
    margin: 0.5rem 0;
  }
  
  .comment-date {
    font-size: 0.75rem;
    color: #666;
  }
</style>