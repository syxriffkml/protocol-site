<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Icon from "@iconify/svelte";
	import Button from "$lib/Components/Button/Button.svelte";

    export let header:string = 'haSUI'

</script>

<div class="flex ">
    <div class="hidden xl:block xl:w-[54px]" />
    <div class="w-full">
        <Section customClass={"relative min-w-[40%] space-y-4 pt-8 px-8 pb-6"} animate={true}>
            <div class="pt-4">
                <div class="xl:-translate-x-[65px] -translate-y-[30px] absolute bg-white z-50  rounded-full p-1.5">
                    <img src="https://app.bucketprotocol.io/images/vsui-icon.svg" alt="">
                </div>
                <div class="xl:-translate-x-[40px] -translate-y-[15px] w-[160px] xl:w-[200px] bg-white text-black text-2xl text-right p-1 pr-4 font-semibold rounded-full">
                    {header}
                </div>
            </div>
            <slot></slot>
        </Section>
    </div>
</div>