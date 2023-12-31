const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@src': path.resolve(__dirname, 'src/'),
            '@interfaces': path.resolve(__dirname, 'src/@interfaces/'),
            '@layouts': path.resolve(__dirname, 'src/layouts/'),
            '@styles': path.resolve(__dirname, 'src/@styles/'),
            '@types': path.resolve(__dirname, 'src/@types/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@http': path.resolve(__dirname, 'src/http/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@router': path.resolve(__dirname, 'src/router/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
        },
    };
    return config;
};
