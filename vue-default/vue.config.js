module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch'); // 프리팻치 기능이 삭제
    },

    devServer: {
        proxy: {
            '/oauth2.0': {
                target: 'https://nid.naver.com',
            },
        },
    },
};
