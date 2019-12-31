<template>
    <div class="score-section">
        <!-- 左侧：进球时间、赛事名 -->
        <div class="section-left">
            <p class="score-time">{{ messageInfo.ext.minute }}'</p>
            <p class="race-name">
                {{
                setting.lang === 'zh'
                ? messageInfo.event.name_js || messageInfo.event.name
                : messageInfo.event.name_e
                }}
            </p>
        </div>

        <!-- 分隔线 -->
        <div class="separation-line" />

        <!-- 右侧：主客队队名、比分 -->
        <div class="section-right">
            <div class="team-msg home">
                <div>
                    <i class="icon-football iconfont" />
                    <span class="team-name active-team-name">{{
                setting.lang === 'zh'
                  ? messageInfo.home.name
                  : messageInfo.home.name_e || messageInfo.home.name
              }}</span>
                </div>
                <div class="team-score active-score">
                    {{ messageInfo.score.home }}
                </div>
            </div>

            <div class="team-msg guest">
                <div>
                    <i class="icon-football iconfont" />
                    <span class="team-name">{{
                setting.lang === 'zh'
                  ? messageInfo.guest.name
                  : messageInfo.guest.name_e || messageInfo.guest.name
              }}</span>
                </div>
                <div class="team-score">{{ messageInfo.score.guest }}</div>
            </div>
        </div>

        <!-- 关闭按钮 -->
        <div class="close-btn" @click="onCloseSocketMessage">
            <i class="iconfont icon-clean" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "ui-notify"
    }
</script>

<style lang="scss" scoped>
    .score-section {
        width: 396px;
        height: 54px;
        padding: 20px;
        position: relative;
        overflow: hidden;
        font-family: $font-family-no-number;

        .separation-line {
            left: 120px;
            top: 28px;
            position: absolute;
            width: 1px;
            height: 38px;
            opacity: 0.1;
            background: #0037af;
        }

        .section-left {
            width: 80px;
            height: 100%;
            float: left;
            text-align: center;
        }

        .score-time {
            font-size: $font-size-large;
            color: $color-red;
            font-weight: bold;
            margin-top: 6px;
            margin-bottom: 4px;
        }

        .race-name {
            font-size: $font-size-small;
            color: $color-font-base;
        }

        .section-right {
            width: 275px;
            height: 100%;
            float: right;

            .active-score {
                font-size: 20px;
                color: $color-active;
            }

            .active-team-name {
                font-size: 18px;
                color: $color-active;
            }
        }

        .team-msg {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .icon-football {
                font-size: 16px;
            }
        }

        .ctx-normal {
            font-size: $font-size-middle;
            color: $color-font-base;
        }

        .close-btn {
            position: absolute;
            top: 50%;
            right: -34px;
            transform: translateY(-50%);
            border-radius: 50%;
            width: 22px;
            height: 22px;
            background: rgba(0, 55, 175, 0.5);
            box-shadow: 0 0 3px 1px rgba(0, 55, 175, 0.27);
            .icon-clean {
                font-size: 12px;
            }
        }
    }
</style>