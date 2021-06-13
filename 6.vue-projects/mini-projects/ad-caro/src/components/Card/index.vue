<template>
  <div class="card" v-if="currentAd">
    <div class="bg-white md:rounded-md md:max-w-3xl">
      <Header />
      <Post :adName="currentAd.name" :adLogo="currentAd.logo" />
      <Content
        :image="currentAd.img"
        :adText="currentAd.text"
        :adUrl="currentAd.url"
        @prevAd="prevAd"
        @nextAd="nextAd"
      />

      <Footer />
    </div>
  </div>
  <div v-else>Loading....</div>
</template>

<script>
import Header from "./Header.vue";
import Post from "./Post.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
export default {
  name: "card",
  components: { Header, Post, Content, Footer },
  data() {
    return {
      adsArr: null,
      currentAdId: 0,
      currentAd: null,
    };
  },

  methods: {
    fetchAdsMock() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const statusObj = { status: 200 };

          const { status } = statusObj;

          if (status == 200) {
            resolve([
              {
                id: 1,
                name: "freeCodeCamp",
                logo:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455564/carousel/freeCodeCampIcon_lgenkm.jpg",
                img:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455565/carousel/FreeCodeCampLogo_tz1m2q.png",
                text:
                  "Learn to code — for free. Build projects. Earn certifications.",
                url: "https://www.freecodecamp.org/",
              },
              {
                id: 2,
                name: "freeCodeCamp Youtube",
                logo:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455564/carousel/freeCodeCampIcon_lgenkm.jpg",
                img:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455567/carousel/freeCodeCampYt_x42ijv.png",
                text: "Technical courses",
                url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
              },
              {
                id: 3,
                name: "freeCodeCamp News",
                logo:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455564/carousel/freeCodeCampIcon_lgenkm.jpg",
                img:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455566/carousel/freeCodeCampNews_lsspvm.png",
                text: "Keep up to date with the latest trends",
                url: "https://www.freecodecamp.org/news/",
              },
              {
                id: 4,
                name: "freeCodeCamp.org",
                logo:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455564/carousel/freeCodeCampIcon_lgenkm.jpg",
                img:
                  "https://res.cloudinary.com/dpj88/image/upload/v1622455566/carousel/freeCodeCampTwitter_qsaxhh.png",
                text:
                  "Find out when we post new content by following us on twitter.",
                url: "https://twitter.com/freeCodeCamp",
              },
            ]);
          } else {
            reject(` Request failed with ${status}. Could not fetch ads`);
          }
        }, 300);
      });
    },
    nextAd() {
      this.currentAdId++;

      if (this.currentAdId > this.adsArr.length - 1) {
        this.currentAdId = 0;
        this.currentAd = this.adsArr[this.currentAdId];
      }

      this.currentAd = this.adsArr[this.currentAdId];
    },
    prevAd() {
      this.currentAdId--;
      if (this.currentAdId < 0) {
        this.currentAdId = this.adsArr.length - 1;
        this.currentAd = this.adsArr[this.currentAdId];
      }
      this.currentAd = this.adsArr[this.currentAdId];
    },
  },
  mounted() {
    const fetchedAds = this.fetchAdsMock();
    fetchedAds
      .then((ads) => {
        this.adsArr = ads;
        this.currentAd = this.adsArr[this.currentAdId];
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
