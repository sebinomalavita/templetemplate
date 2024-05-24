<template>
  <div class="OutputPictureBtn">
    <Tooltip placement="left">
      <template #title>
        <span style="font-size: 13px">添加到我的项目</span>
      </template>
      <div class="btn_img"><img :src="img_addObjBtn" alt="" /></div>
    </Tooltip>
  </div>
</template>
<script setup lang="ts" name="OutputPictureBtn">

import { ref, watch } from 'vue'
import img_addObjBtn from '@/assets/icons/addObjBtn.svg'
</script>

<style scoped lang="less">
.fade-enter-active {
  transition: all 0.5s;
}

.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
}

.OutputPictureBtn {
  position: absolute;
  z-index: 10;
  top: 80px;
  right: 10px;
  border-radius: 3px;

  .pop {
    background-color: #ffffff;
    transition: all 0.2s;
    border-radius: 6px;
    padding: 10px;
    position: relative;
    margin-top: 20px;

    .topArr {
      position: absolute;
      top: -20px;
      width: 100%;
      img {
        position: absolute;
        top: 5px;
        left: -3px;
      }
    }

    .sumb {
      display: flex;

      align-items: center;
      justify-content: flex-end;
      margin-top: 10px;
      margin-bottom: 2px;
    }

    .generator-btn {
      width: 100px;
      height: 35px;
      font-size: 14px !important;
      background-color: rgb(47, 47, 47);
      border-radius: 2px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
    }

    .generator-btn:hover {
      background-color: rgb(31, 31, 31);
    }

    .generator-btn:active {
      background-color: rgb(47, 47, 47);
    }

    .inputbar {
      margin-top: 36px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .SelectOption {
        margin-left: 10px;
      }
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 12px;
      cursor: pointer;
    }
  }
  .btn_img {
    background-color: #ffffffbc;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: all 0.2s;
    cursor: pointer;
  }

  .btn_img:hover {
    background-color: #ffffffd7;
  }

  .btn_img:active {
    background-color: #ffffffbc;
  }
}

.OutputPictureBtnRight {
  position: absolute;
  z-index: 99;
  top: 10px;
  right: 10px;
  border-radius: 3px;

  .pop {
    background-color: #ffffff;
    transition: all 0.2s;
    border-radius: 6px;
    padding: 10px;
    position: relative;
    margin-top: 50px;

    .topArr {
      position: absolute;
      top: -20px;
      text-align: right;
      width: 100%;
      img {
        position: absolute;
        right: 15px;
        top: 5px;
      }
    }

    .sumb {
      display: flex;

      align-items: center;
      justify-content: flex-end;
      margin-top: 10px;
      margin-bottom: 2px;
    }

    .generator-btn {
      width: 100px;
      height: 35px;
      font-size: 14px !important;
      background-color: rgb(47, 47, 47);
      border-radius: 2px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
    }

    .generator-btn:hover {
      background-color: rgb(31, 31, 31);
    }

    .generator-btn:active {
      background-color: rgb(47, 47, 47);
    }

    .inputbar {
      margin-top: 36px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .SelectOption {
        margin-left: 10px;
      }
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 12px;
      cursor: pointer;
    }
  }
  .btn_img {
    right: 0px;
    position: absolute;
    background-color: #ffffffbc;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: all 0.2s;
    cursor: pointer;
  }

  .btn_img:hover {
    background-color: #ffffffd7;
  }

  .btn_img:active {
    background-color: #ffffffbc;
  }
}
</style>
