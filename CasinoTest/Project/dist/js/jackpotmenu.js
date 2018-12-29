new Vue({
  el: '#jackpotmenu',
  data: {
      grandgold: "7 859 352",
      grandsilver: "2 148 759",
      grandbronze: "1 589 654",
      countview: 3,
      winner: [
        {game: "GHOTIC",         icon: "img/4_bottom_menu/img_ghotic.png",          winvalue: "185.00$", playername: "PlayerName"},
        {game:"GAME OF THRONES", icon: "img/4_bottom_menu/img_game_of_thrones.png", winvalue: "185.00$", playername: "PlayerName"},
        {game:"ROBYN",           icon: "img/4_bottom_menu/img_robyn.png",           winvalue: "185.00$", playername: "PlayerName"},
        {game: "GHOTIC",         icon: "img/4_bottom_menu/img_ghotic.png",          winvalue: "185.00$", playername: "PlayerName"},
        {game:"GAME OF THRONES", icon: "img/4_bottom_menu/img_game_of_thrones.png", winvalue: "185.00$", playername: "PlayerName"},
        {game:"ROBYN",           icon: "img/4_bottom_menu/img_robyn.png",           winvalue: "185.00$", playername: "PlayerName"}
      ]
  },
    computed: {
      value () {
        return this.winner.length
      }
    },
    methods: {
      nextSlide() {
        if (this.countview < this.value){
        this.countview++
      }
      },
      prevSlide() {
        if (this.countview > 3){
        this.countview--
      }
    }}
});
