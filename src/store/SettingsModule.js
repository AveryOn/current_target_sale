export const SettingsModule = {
    state: () => ({
        isShowSettings: false,
        isModalSettings: false
    }),
    mutations: {
        // ДЛЯ КЛАССИЧЕСКОГО ОКНА НАСТРОЕК
        openSettings(state){
            state.isShowSettings = true
        },
        closeSettings(state){
            state.isShowSettings = false
        },
        // ДЛЯ МОДАЛЬНОГО ФОРМАТА НАСТРОЕК
        openSettingsModal(state){
            state.isModalSettings = true
            state.isShowSettings = true
        },
        closeSettingsModal(state){
            state.isModalSettings = false
            state.isShowSettings = false
        },
    },
    namespaced: true,
} 