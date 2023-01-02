export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: true,//сообщения в браузере
        port: 3000,
    });
}