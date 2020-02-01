<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#ffffff" light>
          <v-card-title class="headline">1.输入生肉和字幕文件名</v-card-title>
          <v-list-item two-line>
            <v-list-item-content>
              <v-text-field label="生肉文件名" hide-details="auto"></v-text-field>
              <v-text-field label="字幕文件名" hide-details="auto"></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text>OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#ffffff" light>
          <v-card-title class="headline">2.等待压制</v-card-title>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
};
</script>
