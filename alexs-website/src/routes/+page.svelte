<script>
    // @ts-ignore
    import { onMount } from "svelte";

    let isLightMode = false;
    let windowHeight = 0;
    let windowWidth = 0;


    function toggleMode() {
        isLightMode = !isLightMode;
    }

    onMount(() => {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;

    const handleResize = () => {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
});
</script>

<div class={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isLightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
    <div class="flex items-center space-x-8">

        <div class="flex items-center space-x-8 w-full">
            <svg
                class="flex-1 text-yellow-400"
                style="height: {windowHeight}px;"
                fill="none"
                stroke="currentColor"
                stroke-width=".2"
                viewBox="0 0 24 100"
                preserveAspectRatio="none"
            >
                <path d="M4 0 C-2 28, 24 75, 8 100" />
            </svg>

            <div class="text-center text-xl p-35">
                <nav class="flex justify-center items-center space-x-4 mb-8">
                    <a href="/" class="text-lg font-semibold hover:underline">Home</a>
                    <a href="/about" class="text-lg font-semibold hover:underline">About</a>
                    <a href="/projects" class="text-lg font-semibold hover:underline">Projects</a>
                    <button
                        on:click={toggleMode}
                        class="px-4 py-1.5 rounded-2xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
                    >
                        {isLightMode ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </nav>

                <h1 class="text-4xl font-bold">Hi I'm Alex!</h1>
                <h2 class="text-2xl mt-2 text-yellow-400">Welcome to my website.</h2>

                <!--Arrow point down, work on disappearing the attribute when the user scrolls down later-->
                 <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="m-auto mt-50 w-20 h-20 text-yellow-400 transition-transform animate-bounce"
                    fill="none" 
                    
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    stroke-width="2"
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>



            <svg
                class="flex-1 text-yellow-400"
                style="height: {windowHeight}px;"
                fill="none"
                stroke="currentColor"
                stroke-width=".2"
                viewBox="0 0 24 100"
                preserveAspectRatio="none"
            >
                <path d="M4 0 C-2 28, 24 75, 8 100" />
            </svg>
        </div>





























        
        <!-- Left line -->
        <!-- <svg
            style="height: {windowHeight}px; width: {windowWidth - 100}px;"
            class="text-yellow-400" 
            fill="none"
            stroke="currentColor"
            stroke-width=".2"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
            >
            <path d="M4 0 C-2 28, 24 75, 8 100" />
        </svg> -->


        <!-- Top content -->
        <!-- <div class="text-center p-20">
            
        </div> -->

        <!-- Right Line -->
        <!-- <svg
            style="height: {windowHeight}px; width: {windowWidth - 100}px;"
            class="text-yellow-400" 
            fill="none"
            stroke="currentColor"
            stroke-width=".1"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
            >
            <path d="M4 0 C-2 28, 24 75, 8 100" />
        </svg> -->

    </div>
</div>
