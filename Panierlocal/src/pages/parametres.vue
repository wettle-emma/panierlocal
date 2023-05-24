<script setup lang="ts">

</script>

<template>
      <div class="w-[69px] h-6">
       <p class="left-5 top-[3px] text-sm text-left">Retour</p>
        <div class="w-[17px] h-6 left-0 top-0">
         <img src="back.png" class="w-[17px] h-6 left-[-1px] top-[-1px] object-contain" />
       </div>
      </div>

      <h1>Votre profil</h1>

      <img src="ellipse-4.png" />
      <p class="text-[10px] text-center text-darkGrey">Modifier la photo de profil</p>
      <p class="text-base text-left uppercase">Stéphanie leveque</p>
      <span class="opacity-100 bg-darkGrey"></span>
      <p class="text-[11px] font-medium text-left text-darkGrey">3 rue du champs, 68390 Baldersheim</p>
      <span class="opacity-100 bg-darkGrey"></span>
      <p class="text-[11px] font-medium text-left text-darkGrey">Secrétaire médicale</p>
      <span class="opacity-100 bg-darkGrey"></span>
      <p class="w-[197px] text-[11px] font-medium text-left text-darkGrey">J’aime cuisiner et partager mes recettes avec autrui</p>
      <span class="opacity-100 bg-darkGrey"></span>

    <div class="w-[340px] h-[24.23px]">
       <div class="w-[340px] h-[24.23px] left-[24.5px] top-[391.5px] rounded-md border border-midGreen"></div>
        <p class="w-[340px] h-[24.23px] left-[25px] top-[392px] text-x2l text-left text-darkGrey">Modifier l’adresse e-mail</p>
    </div>

    <div class="w-[340px] h-[24.23px]">
       <div class="w-[340px] h-[24.23px] left-[24.5px] top-[427.85px] rounded-md border border-midGreen"></div>
       <p class="w-[340px] h-[24.23px] left-[25px] top-[428.35px] text-x2l text-left text-darkGrey">Modifier votre mot de passe</p>
    </div>

    <span class="opacity-100 bg-darkGrey"></span>

    <div class="w-[329px] h-[33px]">
       <div class="w-[329px] h-[33px] left-[29.5px] top-[529.5px] rounded-[10px] bg-Pop">
        <p class="w-[99px] h-[13.34px] left-16 top-[539.83px] text-x2l font-bold text-left uppercase">Vos points</p>
        <p class="w-[97px] h-[13.34px] left-[228px] top-[539.83px] text-x2l font-bold text-left uppercase">500 points</p>
       </div>
    </div>

    <div class="w-[339px] h-[30px] relative">
      <div class="w-[339px] h-[30px] left-[-1px] top-[-1px] rounded-md border border-midGreen">
       <p class="w-[269.21px] h-[17px] left-[34.9px] top-1.5 text-xl text-center">Supprimer un produit</p>
      </div>
    </div>

    <div class="w-[339px] h-[30px] relative">
      <div class="w-[339px] h-[30px] left-[-1px] top-[-1px] rounded-md border border-midGreen">
      <RouterLink to="/favoris"><p class="w-[269.21px] h-[17px] left-[34.9px] top-1.5 text-xl text-center">Favoris</p></RouterLink>
      </div>
    </div>

    <div class="w-[338px] h-[30px]">
      <div class="w-[338px] h-[30px] left-[-1px] top-[-1px] rounded-md border border-midGreen">
       <RouterLink to="/messagerie"><p class="w-[268.41px] h-[17px] left-[34.79px] top-1.5 text-xl text-center">Messagerie</p></RouterLink>
      </div>
    </div>

    <div class="w-[328px] h-[50px] relative">
      <div class="w-[328px] h-[50px] left-[-1px] top-[-1px] rounded-md bg-midGreen">
       <RouterLink to="/ajoutContenu"><p class="w-[328px] h-[50px] left-0 top-0 text-xl font-bold text-center uppercase">Ajouter un contenu</p></RouterLink>
      </div>
    </div>

</template>