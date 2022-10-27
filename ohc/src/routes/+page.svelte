<script>
    import Layout from './layout.svelte'
</script>

<Layout>
    <div slot="sidebar">
        hello
            <a href="/vehicles">
                <i class="fa-solid fa-plus"></i>
            </a>
    </div>
    <h1 slot="main">Home</h1>
</Layout>