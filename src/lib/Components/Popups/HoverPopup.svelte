<script lang="ts">
    import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
  
    export let content: string = '';
    export let header: string = '';

    let z_index:string = 'z-[2147483647]'
  
    const popupSettings: PopupSettings = {
      event: 'hover',
      target: 'popupHover',
      placement: 'top'
    };
  </script>
  
  <div class="w-auto ">
    <div class="[&>*]:pointer-events-none" role="button" tabindex="0" aria-label="..." use:popup={popupSettings}>
      <slot />
    </div>
  
    <div class="{z_index} rounded-lg p-4 bg-[#141b1d]/80 backdrop-blur-md border border-gray-700 w-[200px] text-center" data-popup="popupHover">
      <p class="text-sm text-white">{header}</p>
      <p class="text-xs text-slate-500 whitespace-pre-wrap">{content}</p>
    </div>
  </div>