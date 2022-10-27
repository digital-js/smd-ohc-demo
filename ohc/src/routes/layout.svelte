<script>
  import SidebarItem from '../components/sidebar-item.svelte'
  import User from '../components/user.svelte'
</script>

<section class="sidebar">
  <div class="logo">
    <a href="/"><img src="/img/logo.svg" alt="logo" /></a>
  </div>
  <SidebarItem>
    <User name="John Doe" slot="content" />
  </SidebarItem>
  <slot name="sidebar" />
</section>
<section class="main">
  <div class="content">
    <slot name="main" />
  </div>
  <slot name="footer" />
</section>

<style>
  :global(.app) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .sidebar {
    width: 23.75%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }
  .logo {
    height: 7.5vh;
    margin-top: 5vh;
    margin-bottom: 7.5vh;
  }
  .main {
    flex-grow: 1;
  }
  .content {
    margin-top: 7.5vh;
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>
