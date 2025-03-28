<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	const menuItems = [
		'home', 'about', 'portfolio', 'contact us'
	]


	const itemRefs: HTMLElement[] = []

	gsap.defaults({duration: 0.3})
	onMount(() => {

		itemRefs.forEach(ref => {

			let tl: gsap.core.Timeline;

			tl = gsap.timeline({paused: true})
				.to(ref.querySelector('.text'), { color: 'white', x: 10, scale: 1.3, transformOrigin: 'left center'})
				.to(ref.querySelector('.dot'), {backgroundColor: "#F93", scale: 1.5}, "<")


			ref.addEventListener('mouseenter', () => tl.play())
			ref.addEventListener('mouseleave', () => tl.reverse())
		})
	});

</script>

<section class="main">
	{#each menuItems as menuItem, i}
		<div class="item" bind:this={itemRefs[i]}>
			<div class="dot"></div>
			<div class="text">{menuItem}</div>
		</div>
		{/each}
<!--	<div class="item">-->
<!--		<div class="dot"></div>-->
<!--		<div class="text"-->
<!--				 onmouseenter={mouseEnter}-->
<!--				 onmouseleave={mouseLeave}>home</div>-->
<!--	</div>-->
<!--	<div class="item">-->
<!--		<div class="dot"></div>-->
<!--		<div class="text"-->
<!--				 onmouseenter={mouseEnter}-->
<!--				 onmouseleave={mouseLeave}>about</div>-->
<!--	</div>-->
<!--	<div class="item">-->
<!--		<div class="dot"></div>-->
<!--		<div class="text"-->
<!--				 onmouseenter={mouseEnter}-->
<!--				 onmouseleave={mouseLeave}>portfolio</div>-->
<!--	</div>-->
<!--	<div class="item">-->
<!--		<div class="dot"></div>-->
<!--		<div class="text"-->
<!--				 onmouseenter={mouseEnter}-->
<!--				 onmouseleave={mouseLeave}>contact us</div>-->
<!--	</div>-->
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=PT+Sans+Narrow:wght@700&family=Raleway:wght@900&display=swap");

    * {
        position: relative;
    }

    .main {
        color: white;
        font-family: sans-serif;
        background: rgb(34, 32, 32);
        background: radial-gradient(
                circle,
                rgba(34, 32, 32, 1) 0%,
                rgba(0, 0, 0, 1) 100%
        );
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin: 50px;
				padding: 20px;
    }

    .item {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .dot {
        height: 20px;
        min-width: 20px;
        background-color: #333;
        border-radius: 50%;
        margin-right: 10px;
    }

    .text {
        color: #777;
        font-family: Raleway;
        font-weight: 700;
        text-transform: uppercase;
        margin: 4px;
        font-size: 40px;
        white-space: nowrap;
    }

</style>