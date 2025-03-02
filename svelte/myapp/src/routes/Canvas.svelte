<script lang="ts">

    interface Coords {
        x: number;
        y: number;
    }

    let {color, size} = $props();
    let canvas = $state<HTMLCanvasElement>();
    let context = $state<CanvasRenderingContext2D|null>();
    let coords = $state<Coords|null>();

    $effect(() => {
        if (!canvas) return;
        context = canvas.getContext('2d');
        function resize() {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        }
        window.addEventListener('resize', resize);
        resize();

        return () => {
            window.removeEventListener('resize', resize);
        }
    });
</script>

<canvas
    bind:this={canvas}
    onpointerdown={(e) => {
        coords = {x: e.clientX, y: e.clientY};
        if (!context) return;
        context.fillStyle = color;
        context.beginPath();
        context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
        context.fill();
    }}
    onpointerleave={() => {
        coords = null;
    }}
    onpointermove={(e) => {
        const previous = coords;
        coords = {x: e.clientX, y: e.clientY};

        if (e.buttons === 1) {
            e.preventDefault();

            if (!context || !previous) return;

            context.strokeStyle = color;
            context.lineWidth = size;
            context.lineCap = 'round';
            context.beginPath();
            context.moveTo(previous.x, previous.y);
            context.lineTo(coords.x, coords.y);
            context.stroke();
        }
    }}
    ></canvas>

    {#if coords}
    <div class="preview"
        style="--color: {color}; --size: {size}px; --x: {coords.x}px; --y: {coords.y}px"
        ></div>
    {/if}

    <style>
        canvas {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }

        .preview {
            position: absolute;
            left: var(--x);
            top: var(--y);
            width: var(--size);
            height: var(--size);
            transform: translate(-50%, -50%);
            background: var(--color);
            border-radius: 50%;
            opacity: 0.5;
            pointer-events: none;
        }
    </style>