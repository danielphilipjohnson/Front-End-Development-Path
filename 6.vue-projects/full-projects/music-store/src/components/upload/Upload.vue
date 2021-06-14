<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">
      <!-- Upload Dropbox -->
      <div
        class="
          w-full
          px-10
          py-20
          rounded
          text-center
          cursor-pointer
          border border-dashed border-gray-400
          text-gray-400
          transition
          duration-500
          hover:text-white
          hover:bg-green-400
          hover:border-green-400
          hover:border-solid
        "
        :class="{ 'bg-green-400 border-green-400 border-solid': is_dragover }"
        @drag.prevent.stop=""
        @dragstart.prevent.stop=""
        @dragend.prevent.stop="is_dragover = false"
        @dragover.prevent.stop="is_dragover = true"
        @dragenter.prevent.stop="is_dragover = true"
        @dragleave.prevent.stop="is_dragover = false"
        @drop.prevent.stop="upload($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <input type="file" multiple @change="upload($event)" />
      <hr class="my-6" />
      <!-- Progess Bars -->
      <div class="mb-4" v-for="upload in uploads" :key="upload.name">
        <!-- File Name -->
        <div class="font-bold text-sm" :class="upload.text_class">
          <i :class="upload.icon"></i> {{ upload.name }}
        </div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar"
            :class="upload.variant"
            :style="{ width: upload.current_progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage, auth, songsCollection } from "@/includes/firebase";

export default {
  name: "Upload",
  data() {
    return {
      is_dragover: false,
      uploads: [],
    };
  },
  methods: {
    upload($event) {
      this.is_dragover = false;

      const files = $event.dataTransfer
        ? [...$event.dataTransfer.files]
        : [...$event.target.files];

      files.forEach((file) => {
        if (file.type !== "audio/mpeg") {
          return;
        }

        try {
          const response = this.checkSongForCopyright(file);
          response.then((response) => {
            const { status, result } = response;
            // const { result } = response;

            console.log(status);
            console.log(result);
            // (status !== "success")
            if (status !== "success") {
              const storageRef = storage.ref(); // music-c2596.appspot.com
              const songsRef = storageRef.child(`songs/${file.name}`); // music-c2596.appspot.com/songs/example.mp3
              const task = songsRef.put(file);

              const uploadIndex =
                this.uploads.push({
                  task,
                  current_progress: 0,
                  name: file.name,
                  variant: "bg-blue-400",
                  icon: "fas fa-spinner fa-spin",
                  text_class: "",
                }) - 1;

              task.on(
                "state_changed",
                (snapshot) => {
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  this.uploads[uploadIndex].current_progress = progress;
                },
                (error) => {
                  this.uploads[uploadIndex].variant = "bg-red-400";
                  this.uploads[uploadIndex].icon = "fas fa-times";
                  this.uploads[uploadIndex].text_class = "text-red-400";
                  console.log(error);
                },
                async () => {
                  const song = {
                    uid: auth.currentUser.uid,
                    display_name: auth.currentUser.displayName,
                    original_name: task.snapshot.ref.name,
                    modified_name: task.snapshot.ref.name,
                    genre: "",
                    comment_count: 0,
                  };

                  song.url = await task.snapshot.ref.getDownloadURL();
                  songsCollection.add(song);
                  // const songRef = await songsCollection.add(song);
                  // const songSnapshot = await songRef.get();

                  // this.addSong(songSnapshot);

                  this.uploads[uploadIndex].variant = "bg-green-400";
                  this.uploads[uploadIndex].icon = "fas fa-check";
                  this.uploads[uploadIndex].text_class = "text-green-400";
                }
              );
            } else {
              // console.log(result);
              console.log(result.artist, result.title, result.album);
            }
          });
        } catch (error) {
          console.log(error);
        }
      });
    },

    async checkSongForCopyright(file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("return", "apple_music,spotify");
      // formData.append("api_token", "ebc0c53dcb3a1645f270ebc85837488d");
      formData.append("api_token", "test");

      const settings = {
        method: "POST",
        body: formData,
      };

      let response = await fetch("https://api.audd.io/", settings);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const content = await response.json();

      return content;
    },
    cancelUploads() {
      this.uploads.forEach((upload) => {
        upload.task.cancel();
      });
    },
  },
  beforeUnmount() {
    this.uploads.forEach((upload) => {
      upload.task.cancel();
    });
  },
};
</script>

<style></style>
