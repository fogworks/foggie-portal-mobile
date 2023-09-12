<template>
  <h2>storage-{{ storageId }}</h2>
  <nut-divider :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 16px' }" />
  <section class="query-info" v-if="queryShow">
    <h3>Query based on date</h3>
    <nut-cell title="Begin Date" :desc="beginPopupDesc" @click="beginShow = true" />
    <nut-popup position="bottom" v-model:visible="beginShow">
      <nut-date-picker
        v-model="beginDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="beginPopupConfirm"
        :is-show-chinese="false"
        :threeDimensional="false"
        ok-text="OK"
        cancel-text="Cancel"
      />
    </nut-popup>
    <nut-cell title="End Date" :desc="endPopupDesc" @click="endShow = true" />
    <nut-popup position="bottom" v-model:visible="endShow">
      <nut-date-picker
        v-model="endDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="endPopupConfirm"
        :is-show-chinese="false"
        :threeDimensional="false"
        ok-text="OK"
        cancel-text="Cancel"
      />
    </nut-popup>
    <nut-button type="primary" @click="queryBtn">Query</nut-button>
  </section>

  <section>
    <nut-cell
      :showIcon="true"
      title="Select Single Date"
      :desc="date && date[0] ? `${date[0]} to ${date[1]}` : 'Please Select Date'"
      @click="openSwitch('isVisible')"
    />
    <nut-calendar
      v-model:visible="isVisible"
      :default-value="date"
      type="range"
      :start-date="date[0]"
      :end-date="date[1]"
      @close="closeSwitch('isVisible')"
      @choose="setChooseValue"
      @select="select"
    />
  </section>

  <section>
    <nut-cell title="Please select a range" :desc="desc" @click="rangeShow = true" />
    <nut-popup position="bottom" v-model:visible="rangeShow">
      <nut-picker
        v-model="value"
        :columns="columns"
        title="Please select a range"
        cancel-text="Cancel"
        ok-text="OK"
        @confirm="rangeConfirm"
        @cancel="rangeShow = false"
      >
        <!-- <nut-button block type="primary">底部按钮</nut-button> -->
      </nut-picker>
    </nut-popup>
  </section>
  <section v-if="detailShow">
    <nut-grid direction="vertica" :column-num="2">
      <nut-grid-item text="Income"> 111111 </nut-grid-item>
      <nut-grid-item text="Expenditure"> 2222 </nut-grid-item>
    </nut-grid>
  </section>
  <section>
    <nut-tabs style="border-bottom: 1px solid #cccccc82" v-model="searchType" class="time_tabs">
      <nut-tab-pane title="All" pane-key="0" />
      <nut-tab-pane title="Income" pane-key="1" />
      <nut-tab-pane title="Expenditure" pane-key="2" />
    </nut-tabs>
    <nut-tabs v-model="timeType" class="time_tabs">
      <nut-tab-pane title="Last month" pane-key="0" />
      <nut-tab-pane title="Three months" pane-key="1" />
      <nut-tab-pane title="Six months" pane-key="2" />
    </nut-tabs>
    <nut-infinite-loading load-more-txt="No more content" v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
      <div class="test" v-for="(item, index) in listData" :key="index">{{ item }}</div>
    </nut-infinite-loading>
  </section>
</template>

<script setup lang="ts">
  import { detailsData } from '../data';

  const router = useRouter();
  let details = reactive<any>({ data: {} });
  const queryShow = ref(false);
  const beginShow = ref(false);
  const endShow = ref(false);
  const beginPopupDesc = ref();
  const endPopupDesc = ref();
  const minDate = new Date(2020, 0, 1);
  const maxDate = new Date(2025, 10, 1);
  const beginDate = ref(new Date());
  const endDate = ref(new Date());
  const storageId = ref('');
  const beginPopupConfirm = ({ selectedValue, selectedOptions }) => {
    console.log(selectedValue, selectedOptions);
    beginDate.value = new Date(selectedValue);
    beginPopupDesc.value = selectedOptions.map((val: any) => val.text).join('');
    beginShow.value = false;
  };
  const endPopupConfirm = ({ selectedValue, selectedOptions }) => {
    console.log(selectedValue, selectedOptions);
    endDate.value = new Date(selectedValue);
    endPopupDesc.value = selectedOptions.map((val: any) => val.text).join('');
    endShow.value = false;
  };

  const queryBtn = () => {
    if (beginDate.value.getTime() >= endDate.value.getTime()) {
      console.log('beginDate must be less than endDate');
    } else {
      // TODO
      queryShow.value = false;
    }
  };

  const detailShow = ref(false);

  const rangeShow = ref(false);
  const desc = ref();
  const value = ref();
  const columns = ref([
    { text: '7 days', value: 'aaa' },
    { text: '1 month', value: 'bbb' },
    { text: '3 months', value: 'ccc' },
  ]);
  const rangeConfirm = ({ selectedOptions }) => {
    desc.value = selectedOptions.map((val: { text: any }) => val.text).join(',');
    rangeShow.value = false;
    detailShow.value = true;
  };

  const state = reactive({
    infinityValue: false,
    hasMore: false,
    listData: [] as any[],
    timeType: '0',
    searchType: '0',
    date: ['2023-07-01', '2023-09-30'],
    isVisible: false,
  });
  const { listData, hasMore, infinityValue, timeType, searchType, date, isVisible } = toRefs(state);
  const loadMore = () => {
    setTimeout(() => {
      listData.value = [1];

      infinityValue.value = false;
    }, 1000);
  };

  const openSwitch = (param) => {
    state[`${param}`] = true;
  };
  const closeSwitch = (param) => {
    state[`${param}`] = false;
  };
  const setChooseValue = (param) => {
    state.date = [...[param[0][3], param[1][3]]];
  };
  const select = (param: string) => {
    console.log(param);
  };

  watch(
    () => router,
    (val) => {
      storageId.value = val.currentRoute.value.query.id as string;
      details.data = detailsData.find((_item, index) => index == parseInt(val.currentRoute.value.query.id as string));
      // details.data = detailsData[0]
    },
    { deep: true, immediate: true },
  );
</script>

<style lang="scss" scoped>
  h2 {
    padding-left: 5vw;

    span {
      float: right;
      font-size: 12px;
    }
  }

  .nut-swiper-item {
    line-height: 500px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .query-info {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 700;
    }

    .nut-cell {
      margin-bottom: 20px;
    }

    .nut-button {
      margin: 10px;
    }
  }

  .tab_top_title {
    margin-top: 20px;
    font-size: 35px;
    font-style: italic;
    font-weight: 600;
  }

  .time_tabs {
    :deep {
      .nut-tabs__titles {
        // background: transparent;
      }

      .nut-tabs__content {
        display: none;
      }
    }
  }
</style>
