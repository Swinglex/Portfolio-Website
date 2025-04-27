<script>
    let isLightMode = false;

    function toggleMode() {
        isLightMode = !isLightMode;
    }
</script>

<div class={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
    <div class="flex items-center space-x-8">
        
        <!-- Left line -->
        <svg class="h-64 w-6 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 100" preserveAspectRatio="none">
            <path d="M12 0 C0 25, 24 75, 12 100" />
        </svg>

        <!-- Top content -->
        <div class="text-center">
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
        <svg class="h-64 w-6 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 100" preserveAspectRatio="none">
            <path d="M12 0 C0 25, 24 75, 12 100" />
        </svg>
    </div>
</div>
