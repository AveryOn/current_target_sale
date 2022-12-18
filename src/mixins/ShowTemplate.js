// Миксин передает с родителя пропс show
// Используется для отображения скрытых компонентов
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
    }
}