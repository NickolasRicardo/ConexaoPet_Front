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
            '@assets': path.resolve(__dirname, 'src/Assets/'),
            '@components': path.resolve(__dirname, 'src/Components/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@http': path.resolve(__dirname, 'src/Http/'),
            '@pages': path.resolve(__dirname, 'src/Pages/'),
            '@router': path.resolve(__dirname, 'src/Router/'),
            '@utils': path.resolve(__dirname, 'src/Utils/'),
        },
    };
    return config;
};
