<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { addEntry } from '../stores/kpt';
  
  export let type: 'keep' | 'problem' | 'try';
  
  let content = '';
  let isPublic = true;
  
  function handleSubmit() {
    addEntry({
      type,
      content,
      userId: 'user1', // 本来は認証済みユーザーのID
      userName: '山田太郎', // 本来は認証済みユーザーの名前
      category: 'その他',
      tags: [],
      createdAt: new Date().toISOString(),
    });
    
    content = '';
    navigate('/timeline');
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-white rounded-lg shadow-sm p-4">
  <div class="flex justify-between items-center mb-2">
    <h3 class="text-lg font-semibold text-gray-800">{type.toUpperCase()}</h3>
    <label class="flex items-center gap-2 text-sm text-gray-600">
      <input type="checkbox" bind:checked={isPublic} class="form-checkbox" />
      <span>公開</span>
    </label>
  </div>
  
  <div class="flex gap-2">
    <textarea
      bind:value={content}
      required
      rows="2"
      placeholder="{type === 'keep' ? '継続したいこと' : type === 'problem' ? '課題点' : '試してみたいこと'}を入力..."
      class="flex-grow p-2 border rounded-md text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    ></textarea>
    <button
      type="submit"
      class="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 transition-colors whitespace-nowrap"
    >
      登録
    </button>
  </div>
</form>