<script>
    import { onMount } from "svelte";

    let isLightMode = false;
    let windowHeight = 0;

    function toggleMode() {
        isLightMode = !isLightMode;
    }

    onMount(() => {
    windowHeight = window.innerHeight;

    window.addEventListener('resize', () => {
      windowHeight = window.innerHeight;
    });
  });
</script>

<div class={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
    <div class="flex items-center space-x-8">
        
        <!-- Left line -->
        <svg
            style="height: {windowHeight}px; width: 80px;"
            class="text-yellow-400" 
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
            >
            <path d="M1 0 C-2 28, 24 75, 4 100" />
        </svg>


        <!-- Top content -->
        <div class="text-center p-20">
            <h1 class="text-4xl font-bold">Hi I'm Alex!</h1>
            <h2 class="text-2xl mt-2 text-yellow-400">Welcome to my website.</h2>

            <button 
                on:click={toggleMode}
                class="mt-8 px-6 py-2 rounded-2xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
            >
                {isLightMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>

        <!-- Right Line -->
        <svg
            style="height: {windowHeight}px; width: 80px;"
            class="text-yellow-400" 
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
            >
            <path d="M1 0 C-2 28, 24 75, 4 100" />
        </svg>
    </div>
</div>
