<script setup lang="ts">
import { pb } from "@/backend"; 
    import type { ProduitRecord, ProduitResponse, BaseSystemFields } from '@/pocketbase-types'; 
    import { Produitrecords } from "@/backend";

    // bug MaisonResponse
    const props = defineProps<ProduitRecord & BaseSystemFields<null>>()

    const img0 = props.image?.[0]
    const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'
    console.log(urlImg0)
</script>

<template> 
   <p class="self-stretch flex-grow-0 flex-shrink-0 w-[390px] text-[25px] font-bold text-center text-[#324e2b]">Lot de carottes bio</p>
   <img src="img.png" class="self-stretch flex-grow object-none" />
   
   <div class="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[13px] px-5">
  
    <div class="flex-grow-0 flex-shrink-0 w-[50px] h-[50px] relative">
    <div class="w-[50px] h-[50px] absolute left-[-1px] top-[-1px] rounded-md border border-[#96b18f]"></div>
    <img src="favorite.vue" class="w-[35px] h-[35px] absolute left-1.5 top-1.5 object-contain" />
  </div>
  
  <div class="flex-grow-0 flex-shrink-0 w-[50px] h-[50px] relative">
    <div class="w-[50px] h-[50px] absolute left-[-1px] top-[-1px] rounded-md bg-[#fcfcfc] border border-[#96b18f]"></div>
    <img src="chat.vue" class="w-[35px] h-[35px] absolute left-1.5 top-1.5 object-contain" />
  </div>

  <div class="flex-grow h-[50px] relative">
    <div class="w-56 h-[50px] absolute left-[-1px] top-[-1px] rounded-md bg-[#96b18f]"></div>
    <p class="w-56 h-[50px] absolute left-0 top-0 text-base font-bold text-center uppercase text-[#252525]">Ajouter au panier</p>
  </div>
  </div>
 
<div
  class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[35px] px-5"
>
  <div class="flex-grow-0 flex-shrink-0 w-[137px] h-7">
    <p class="w-[93px] absolute left-16 top-[3px] text-base text-left text-[#252525]">
      1, 50€/kilo
    </p>
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 absolute left-5 top-0"
      preserveAspectRatio="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 14.5C3 8.14872 8.14872 3 14.5 3C20.8512 3 26 8.14872 26 14.5C26 20.8512 20.8512 26 14.5 26C8.14872 26 3 20.8512 3 14.5ZM12.9082 11.625C13.4115 10.726 14.2729 9.9 15.3623 9.9C15.9766 9.9 16.5918 10.1672 17.1361 10.7124C17.5848 11.1619 18.3129 11.1626 18.7625 10.7139C19.2119 10.2652 19.2126 9.53708 18.7639 9.08757C17.8665 8.18856 16.6898 7.6 15.3623 7.6C13.7282 7.6 12.3367 8.48579 11.393 9.74416C10.9783 10.2971 10.6398 10.9325 10.3905 11.625H9.9C9.26488 11.625 8.75 12.1399 8.75 12.775C8.75 13.3018 9.10425 13.7459 9.58752 13.882C9.69562 13.9125 9.80647 13.925 9.91855 13.925C9.89394 14.305 9.89394 14.695 9.91855 15.075C9.80647 15.075 9.69562 15.0875 9.58752 15.118C9.10425 15.2541 8.75 15.6982 8.75 16.225C8.75 16.8601 9.26488 17.375 9.9 17.375H10.3905C10.6398 18.0675 10.9783 18.7029 11.393 19.2558C12.3367 20.5143 13.7282 21.4 15.3623 21.4C16.6898 21.4 17.8665 20.8114 18.7639 19.9125C19.2126 19.4629 19.2119 18.7348 18.7625 18.2861C18.3129 17.8374 17.5848 17.8381 17.1361 18.2875C16.5918 18.8327 15.9766 19.1 15.3623 19.1C14.2729 19.1 13.4115 18.2741 12.9082 17.375H14.5C15.1351 17.375 15.65 16.8601 15.65 16.225C15.65 15.5899 15.1351 15.075 14.5 15.075H12.225C12.1921 14.6995 12.1921 14.3005 12.225 13.925H15.65C16.2851 13.925 16.8 13.4101 16.8 12.775C16.8 12.1399 16.2851 11.625 15.65 11.625H12.9082Z"
        fill="#323232"
      ></path>
    </svg>
  </div>
  <div class="flex-grow-0 flex-shrink-0 w-[294px] h-[30px]">
    <p class="w-[254px] absolute left-[60px] top-[65px] text-xs text-left text-[#252525]">
      Ferme du maraicher, 68390 Sausheim
    </p>
    <p class="w-32 absolute left-[60px] top-[81px] text-[10px] text-left text-[#868686]">
      1,7 km ~ 22min à pieds
    </p>
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 absolute left-5 top-[63px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M16.2 13.4C17.88 13.4 19.2 12.08 19.2 10.4C19.2 8.72 17.88 7.4 16.2 7.4C14.52 7.4 13.2 8.72 13.2 10.4C13.2 12.08 14.52 13.4 16.2 13.4ZM16.2 2C20.88 2 24.6 5.72 24.6 10.4C24.6 16.64 16.2 26 16.2 26C16.2 26 7.8 16.64 7.8 10.4C7.8 5.72 11.52 2 16.2 2ZM5.4 10.4C5.4 15.8 11.52 23.24 12.6 24.56L11.4 26C11.4 26 3 16.64 3 10.4C3 6.56 5.52 3.44 9 2.36C6.84 4.28 5.4 7.16 5.4 10.4Z"
        fill="black"
      ></path>
    </svg>
  </div>
  <div class="flex-grow-0 flex-shrink-0 w-[304px] h-7">
    <p class="w-[264px] absolute left-[60px] top-[132px] text-xs text-left text-[#252525]">
      Publié par le 12 avril 2023
    </p>
    <p class="w-[113px] absolute left-[121px] top-[132px] text-xs text-left text-[#252525]">
      Bernard Meunier
    </p>
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 absolute left-5 top-32"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M13.5 26C6.59625 26 1 20.4037 1 13.5C1 6.59625 6.59625 1 13.5 1C20.4037 1 26 6.59625 26 13.5C26 20.4037 20.4037 26 13.5 26ZM12.63 21.5825C13.4175 21.5825 14.295 21.2225 15.375 19.76L16.5138 18.235C16.547 18.1904 16.5711 18.1396 16.5845 18.0856C16.5979 18.0316 16.6003 17.9755 16.5917 17.9205C16.5831 17.8656 16.5636 17.8129 16.5343 17.7656C16.505 17.7182 16.4666 17.6773 16.4212 17.645C16.3254 17.5773 16.2078 17.5475 16.0912 17.5613C15.9747 17.5752 15.8674 17.6317 15.79 17.72L13.9463 19.8188C13.9038 19.867 13.8471 19.9004 13.7844 19.9141C13.7216 19.9278 13.6562 19.9211 13.5975 19.895C13.5406 19.87 13.4943 19.8257 13.4668 19.7699C13.4394 19.7141 13.4325 19.6504 13.4475 19.59L15.77 10.2825C15.7957 10.1811 15.7954 10.0748 15.7692 9.97348C15.7431 9.87217 15.6918 9.77907 15.6202 9.70275C15.5487 9.62643 15.459 9.56935 15.3596 9.53676C15.2602 9.50417 15.1541 9.49712 15.0513 9.51625L10.8637 10.2825C10.7814 10.2976 10.7051 10.336 10.644 10.3932C10.5828 10.4504 10.5394 10.5239 10.5187 10.605L10.4113 11.0225C10.3994 11.0687 10.3983 11.1171 10.4081 11.1638C10.4178 11.2105 10.4381 11.2544 10.4674 11.292C10.4968 11.3297 10.5343 11.3601 10.5772 11.381C10.6202 11.4019 10.6673 11.4127 10.715 11.4125H12.8775L11.0325 18.815C10.965 19.1075 10.8525 19.6025 10.8525 19.9625C10.8525 20.795 11.3475 21.5825 12.63 21.5825ZM14.9175 8.4125C15.795 8.4125 16.47 7.895 16.65 7.1075C16.695 6.9275 16.7175 6.725 16.7175 6.59C16.7175 5.96 16.2225 5.375 15.3 5.375C14.4225 5.375 13.7475 5.8925 13.5675 6.68C13.5257 6.84944 13.5031 7.02302 13.5 7.1975C13.5 7.8275 13.995 8.4125 14.9175 8.4125Z"
        fill="black"
      ></path>
    </svg>
  </div>
</div>

<div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[18px] px-5">
  <div class="flex-grow-0 flex-shrink-0 w-[257px] h-7">
    <p class="w-[217px] absolute left-[60px] top-1.5 text-xs text-left text-[#252525]">Idée Recettes avec des carottes</p>
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 absolute left-5 top-0"
      preserveAspectRatio="none"
    >
      <path
        d="M7.15789 21.4737H24V2H7.15789C5.41632 2 4 3.41632 4 5.15789V23.2721C4 24.8926 5.41632 26.2105 7.15789 26.2105H24V25.1579H7.15789C6.01684 25.1579 5.05263 24.2942 5.05263 23.2721C5.05263 22.2637 5.97737 21.4737 7.15789 21.4737ZM20.1626 17.6347C20.06 17.7379 19.9247 17.7895 19.7895 17.7895C19.6553 17.7895 19.5205 17.7384 19.4184 17.6358L15.9853 14.2179L15.0589 15.1442L14.0874 14.1553L15.7468 12.4958L20.1611 16.89C20.3668 17.0953 20.3679 17.4284 20.1626 17.6347ZM9.41368 6.21421L13.4837 10.3095L11.8816 11.9116L9.38421 9.36842C8.50947 8.49368 8.52316 7.0721 9.41368 6.21421ZM8.38368 16.8911L15.2384 10.0363C15.2205 9.99158 15.1947 9.95053 15.1821 9.90368C14.9721 9.10947 15.0126 8.10053 15.7321 7.38947C16.8011 6.28737 18.6253 5.81632 19.4153 6.59737C20.2053 7.42421 19.7289 9.18105 18.66 10.2374C17.9 10.9889 16.9242 11.0505 16.1337 10.8479C16.0789 10.8337 16.0305 10.8053 15.9789 10.7837L8.60158 17.6353C8.49895 17.7379 8.89053 17.7895 8.75579 17.7895C8.62105 17.7895 8.48632 17.7379 8.38368 17.6353C8.1779 17.4295 8.1779 17.0968 8.38368 16.8911Z"
        fill="black"
      ></path>
    </svg>
  </div>

  <div class="flex-grow-0 flex-shrink-0 w-[390px] h-[125px] relative">
    <img
      src="pexels-ahcène-brioua-10364149-1.png"
      class="w-[195px] h-[90px] absolute left-5 top-[-1px] rounded-[5px] object-none"
      style="box-shadow: -2px 2px 10px 0 rgba(0,0,0,0.15);"
    />
    <p class="absolute left-[21px] top-[93px] text-xs font-light text-left uppercase text-[#324e2b]">Tagliatelles de carottes</p>
    <p class="absolute left-[245px] top-[93px] text-xs font-light text-left uppercase text-[#324e2b]">Purée de carottes</p>
    <p
      class="absolute left-[469px] top-[93px] text-xs font-light text-left uppercase text-[#324e2b]"
    >
      salade de carottes
    </p>
    <p class="absolute left-[21px] top-[109px] text-[10px] font-light text-left text-[#868686]">
      par Stéphanie
    </p>
    <p class="absolute left-[245px] top-[109px] text-[10px] font-light text-left text-[#868686]">
      par Laurent
    </p>
    <p class="absolute left-[469px] top-[109px] text-[10px] font-light text-left text-[#868686]">
      par Mélanie
    </p>
    <img
      src="pexels-ahcène-brioua-10364149-2.png"
      class="w-[195px] h-[90px] absolute left-[244px] top-[-1px] rounded-[5px] object-none"
      style="box-shadow: -2px 2px 10px 0 rgba(0,0,0,0.15);"
    /><img
      src="pexels-ahcène-brioua-10364149-3.png"
      class="w-[195px] h-[90px] absolute left-[468px] top-[-1px] rounded-[5px] object-none"
      style="box-shadow: -2px 2px 10px 0 rgba(0,0,0,0.15);"
    />
  </div>
</div>
</template>