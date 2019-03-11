<template>
  <div>
    <h1>Personas en el espacio</h1>
    <ul v-if="people.length">
      <li v-for="person in people">
        {{ person.name }}
      </li>
    </ul>
    <p v-else>No people left!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import axios from "axios";

export default {
  computed: {
    ...mapGetters({
      itemList: "itemList",
      isLoading: "isProcessing"
    }),
    peopleItems: function() {
      console.log("HAHAHAH");
      return this.itemList;
    }
  },

  created() {
    axios
      .get(`http://api.open-notify.org/astros.json`)
      .then(response => {
        this.people = response.data.people;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  mounted() {
    console.log("PEOPLE VIEW");
  },

  data() {
    return {
      people: [],
      isBusy: true
    };
  }
};
</script>
