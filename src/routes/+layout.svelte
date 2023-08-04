<script>
    import "../app.css";
</script>

<svelte:head>
	<title>TODO list</title>
	<meta name="description" content="Manage your todo with list" />
</svelte:head>

<div id="app-content">
	<main class="flex flex-grow flex-col items-center justify-center">
		<slot />
	</main>
</div>
