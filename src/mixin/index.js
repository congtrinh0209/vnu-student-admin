export const useAccountAuthorization = {
    name: 'useAccountAuthorization',
    data() {
        return {
            mixinText: "MIXIN"
        };
    },
    mounted() {},
    methods: {
        handleAuthorization(text) {
        console.log("function mixin: ", text)
        }
    },
    computed: {
        getAuthorizationAccount() {
            console.log("mixin auth")
        }
    },
}