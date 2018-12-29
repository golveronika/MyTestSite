Vue.component('game-item', {
    data: function () {
    return {
        games: [
          {gamename: "LUCKY MAGIC",  img: "img/5_game/LuckyMagic.png"},
          {gamename: "ANUBIS' SECRET",  img: "img/5_game/AnubisSecret.png"},
          {gamename: "DREAM OF KNIGHT",  img: "img/5_game/DreamOfKnight.png"},
          {gamename: "LUCKY MAGIC",  img: "img/5_game/LuckyMagic.png"},
          {gamename: "ANUBIS' SECRET",  img: "img/5_game/AnubisSecret.png"},
          {gamename: "DREAM OF KNIGHT",  img: "img/5_game/DreamOfKnight.png"},
          {gamename: "LUCKY MAGIC",  img: "img/5_game/LuckyMagic.png"},
          {gamename: "ANUBIS' SECRET",  img: "img/5_game/AnubisSecret.png"},
          {gamename: "DREAM OF KNIGHT",  img: "img/5_game/DreamOfKnight.png"},
          {gamename: "SUBMARINE ADVENTURE", img: "img/5_game/Submarine.png"},
          {gamename: "THE BIG MONEY SCENT", img: "img/5_game/MoneyScent.png"},
          {gamename: "LUCKY MAGIC", img: "img/5_game/LuckyMagic.png"},
          {gamename: "ANUBIS' SECRET", img: "img/5_game/AnubisSecret.png"},
          {gamename: "DREAM OF KNIGHT", img: "img/5_game/DreamOfKnight.png"},
          {gamename: "SUBMARINE ADVENTURE", img: "img/5_game/Submarine.png"},
          {gamename: "THE BIG MONEY SCENT", img: "img/5_game/MoneyScent.png"},
          {gamename: "LUCKY MAGIC", img: "img/5_game/LuckyMagic.png"},
          {gamename: "ANUBIS' SECRET", img: "img/5_game/AnubisSecret.png"},
          {gamename: "DREAM OF KNIGHT", img: "img/5_game/DreamOfKnight.png"},
          {gamename: "SUBMARINE ADVENTURE", img: "img/5_game/Submarine.png"},
          {gamename: "THE BIG MONEY SCENT", img: "img/5_game/MoneyScent.png"}
        ],
        promotions: [
          {img: "img/5_game/promotion.png"}
        ]
    }
  },
  template: '<div class="items"><div class="promotion"><div class="promrow1"><span>PROMOTIONS</span></div><div id="promslider"><div id="promviewport"><ul data-current="0" id="promslidewrapper" v-for="(promotion,i) in promotions"><li class="promslide"><img :src="promotion.img" :alt="i+1" class="promslide-img"></li></ul></div></div></div><div v-for="game in games"><div class="item"><img :src="game.img"><div class="hrefy_2"><a class="play_now" href="#">PLAY NOW</a><a class="demo" href="#">DEMO</a></div><span class="gamename_bottom">{{ game.gamename }}</span></div></div></div>'
})
new Vue({el: "#root"});

/*not ready yet*/

/*
<div class="promrow1"><span></span></div>
<div id="promslider">
   <div id="promviewport">
      <ul id="promslidewrapper" v-for="(promotion,i) in promotions">
          <li class="promslide"><img :src="promotion.img" :alt="i+1" class="promslide-img"></li>
      </ul>
  </div>

</div>
*/


/*
<div class="items">
  <div class="promotion">promotion</div>
  <div v-for="game in games">
    <div class="item">
      <img src="img/5_game/LuckyMagic.png">
      <div class="hrefy_2">
        <a class="play_now" href="#">PLAY NOW</a>
        <a class="demo" href="#">DEMO</a>
      </div>
      <span class="gamename_bottom">{{ game.gamename }}</span>
    </div>
  </div>
</div>
*/
