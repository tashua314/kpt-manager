<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from './routes/Home.svelte';
  import Login from './routes/Login.svelte';
  import Dashboard from './routes/Dashboard.svelte';
  import Timeline from './routes/Timeline.svelte';
  import Notification from './lib/components/Notification.svelte';
</script>

<Notification />

<Router>
  <main>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/timeline" component={Timeline} />
  </main>
</Router>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @apply bg-gray-50;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>