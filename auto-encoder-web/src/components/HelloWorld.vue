<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#ffffff" light>
          <v-card-title class="headline">1.输入生肉和字幕文件名</v-card-title>
          <v-list-item two-line>
            <v-list-item-content>
              <v-text-field label="生肉文件名" hide-details="auto" v-model="video"></v-text-field>
              <v-text-field label="字幕文件名" hide-details="auto" v-model="ass"></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text @click="addtask" :disabled="btnState">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#ffffff" light>
          <v-card-title class="headline">2.等待压制</v-card-title>
          <v-card-text class="text--primary">{{response}}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#ffffff" light>
          <v-card-title class="headline">3.正在执行的任务</v-card-title>
          <!-- <v-card-text class="text--primary">{{output}}</v-card-text> -->
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="#ffffff" light>
          <v-card-title class="headline">4.已完成的任务</v-card-title>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in output" :key="i">
                <v-list-item-content>
                  <!-- <v-list-item-title v-html="taskstate(item)"></v-list-item-title> -->
                  <v-list-item-title :class="item['data']['color']" v-text="item['data']['video']"></v-list-item-title>
                  <v-list-item-subtitle class="text--primary" v-text="item['data']['ass']"></v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item['data']['uid']"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    video: "",
    ass: "",
    response: "请输入生肉和字幕文件名",
    btnState: false,
    output: [{ 'data': { 'color': '', 'video': 'loading...' } }]
  }),
  methods: {
    addtask: function () {
      this.btnState = true
      this.axios.get('https://enc.acedroidx.top:8888/api/add?video=' + this.video + '&ass=' + this.ass)
        .then(response => {
          if (response['data']['code'] == 0) {
            this.response = `压制任务创建成功，任务id:${response['data']['data']['uid']},视频:${response['data']['data']['video']},字幕:${response['data']['data']['ass']}`;
            this.btnState = false
            this.getTask()
          } else {
            this.response = '压制任务创建失败';
            console.log(response);
            this.btnState = false
          }
        })
        .catch(error => { // 请求失败处理
          console.log(error);
          this.response = error
          this.btnState = false
        });
    },
    getTask: function () {
      this.axios.get('https://enc.acedroidx.top:8888/api/output')
        .then(response => {
          if (response['data']['code'] == 0) {
            var tmp = response['data']['data']['output'];
            if (tmp.length == 0) {
              this.output = [{ 'data': { 'color': '', 'video': '没有已完成的压制任务' } }]
            } else {
              this.output = tmp
            }
          } else {
            this.output = [{ 'data': { 'color': '', 'video': '压制任务获取失败' } }]
            console.log(response);
          }
        })
        .catch(error => { // 请求失败处理
          console.log(error);
          this.output = [{ 'data': { 'color': '', 'video': error } }]
        });
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      this.getTask()
    })
  }
};
</script>
