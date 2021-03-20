module.exports = {
    chainWebpack : config => {
        config.plugins.delete('prefetch') // 프리팻치 기능이 삭제 
    }
}