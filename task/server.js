const server = (done) => {
    browserSync.init({
        server: {
            baseDir: path.root
        },
        cors: true,
        notify: true,
        ui: false,
    });
    done();
}

module.exports = server;