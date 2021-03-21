<template>
    <div>
        <div id="naverIdLogin"></div>
        <br />
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                naverLogin: null,
            };
        },
        methods: {
            logout() {
                const accessToken = this.naverLogin.accessToken.accessToken;
                const url = `/oauth2.0/token?grant_type=delete&client_id=QDAQFcIp9eDG0HS60gMa&client_secret=VHa6HO24r3&access_token=${accessToken}&service_provider=NAVER`;
                axios.get(url).then(res => {
                    console.log(res.data);
                });
            },
        },
        mounted() {
            this.naverLogin = new window.naver.LoginWithNaverId({
                clientId: 'QDAQFcIp9eDG0HS60gMa', //개발자센터에 등록한 ClientID
                callbackUrl: 'http://localhost:8080/naverlogin', //개발자센터에 등록한 callback Url
                isPopup: false, // 팝업을 통한 연동처리 여부
                loginButton: { color: 'green', type: 3, height: 60 },
            });

            this.naverLogin.init();

            this.naverLogin.getLoginStatus(status => {
                if (status) {
                    console.log(status);
                    console.log(this.naverLogin.user);

                    //필수적으로 받아야하는 프로필 정보가 있다면 callback 처리 시점에 체크
                    var email = this.naverLogin.user.getEmail();
                    if (email == undefined || email == null) {
                        alert('이메일은 필수정보입니다. 정보제공을 동의해주세요');
                        this.naverLogin.reprompt();
                        return;
                    } else {
                        console.log('callback 처리에 실패');
                    }
                }
            });
        },
    };
</script>

<style></style>
