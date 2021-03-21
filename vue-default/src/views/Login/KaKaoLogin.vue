<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
        <br />
        <button @click="kakaoLogout">카카오로그아웃</button>
        <br />
        <button @click="kakaoDisconnect">연결끊기</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code: '',
            };
        },

        methods: {
            kakaoLogin() {
                window.Kakao.Auth.login({
                    scope: 'profile, account_email',
                    success: this.getKakaoAccount,
                });
            },

            kakaoDisconnect() {
                window.Kakao.API.request({
                    url: '/v1/user/unlink',
                    success: function (response) {
                        console.log(response);
                    },
                    fail: function (error) {
                        console.log(error);
                    },
                });
            },

            getKakaoAccount() {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: res => {
                        const kakao_account = res.kakao_account;
                        const nicname = kakao_account.profile.nickname;
                        const email = kakao_account.email;
                        this.$store.commit('setUser', { nicname, email });
                    },
                });
            },

            kakaoLogout() {
                if (!window.Kakao.Auth.getAccessToken()) {
                    console.log('Not logged in.');
                    return;
                }
                window.Kakao.Auth.logout(function () {
                    console.log(window.Kakao.Auth.getAccessToken());
                });
            },
        },
    };
</script>

<style></style>
