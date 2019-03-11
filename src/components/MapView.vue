<template>
  <div>
    <h1>Mapa</h1>
    <p>Coordenadas del Triángulo de las Bermudas:</p>
    <p>{{ this.triangleCoords }}</p>
    <p>Coordenadas Actuales:</p>
    <p>{{ this.coords }}</p>
    <p v-if="isMatching">Pasó por Triángulo de las Bermudas</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: [],
      coords: [],
      isMatching: false,
      matchLat: false,
      matchLong: false,
      triangleCoords: [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 }
      ]
    };
  },

  created: function() {
    this.loadData();
    this.timer = setInterval(this.loadData, 3000);
  },

  methods: {
    loadData: function() {
      axios
        .get(`http://api.open-notify.org/iss-now.json`)
        .then(response => {
          console.log("Actualizando cada 3 segundos");
          this.coords = response.data.iss_position;
          this.triangleCoords.array.forEach(element => {
            if (element.lat == coords.latitude) {
              this.matchLat = true;
            }
            if (element.lng == coords.longitude) {
              this.matchLong = true;
            }
            if (this.matchLong && this.matchLat) {
              this.isMatching = true;
            }
          });
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    cancelAutoUpdate: function() {
      clearInterval(this.timer);
    }
  },

  ready: function() {
    this.loadData();

    this.interval = setInterval(
      function() {
        this.loadData();
      }.bind(this),
      3000
    );
  },

  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>