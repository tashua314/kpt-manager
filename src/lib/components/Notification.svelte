<script lang="ts">
  import { notifications } from '../stores/notification';
</script>

<div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
  {#each $notifications as notification (notification.id)}
    <div
      class="p-4 rounded-lg shadow-lg text-white transition-all duration-300 animate-slide-in"
      class:bg-green-500={notification.type === 'success'}
      class:bg-red-500={notification.type === 'error'}
    >
      {notification.message}
    </div>
  {/each}
</div>

<style>
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animate-slide-in {
    animation: slideIn 0.3s ease-out;
  }
</style>