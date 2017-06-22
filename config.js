module.exports = {
    rootpath: __dirname,
    prod_webpartStyleoutput: 'CSS',
    prod_webpartScriptoutput: 'JS',
    prod_root: '../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution',
    replacepath: '/_layouts/15/APPSAICSolution/Images/',
    webparts: [
        {
            'name': 'aicGlobal',
            'src': ['webparts/NavigationCom/index.jsx'],
            'style': ['stylelibrary/commonstyle.less', 'webparts/NavigationCom/style.less'],
            'output': 'dist/webpartTest',
            'prod_include': true
        },
    ],

    layouts: [
        {
            'name': 'flexlayout',
            'src': ['layouts/flexlayout/script.jsx'],
            'style': ['layouts/flexlayout/style.less'],
            'output': 'dist/layouts/flexlayout',
            'prod_include': true
        },
         {
            'name': 'stafflayout',
            'src': ['layouts/layouta/script.jsx'],
            'style': ['layouts/layouta/style.less'],
            'output': 'dist/layouts/stafflayout',
            'prod_include': true
        },
        {
            'name': 'organizationlayout',
            'src': ['layouts/organizationlayout/script.jsx'],
            'style': ['layouts/organizationlayout/style.less'],
            'output': 'dist/layouts/organizationlayout',
            'prod_include': true
        }
    ],

    jslibrary: [
        {
            'name': 'react.min',
            'src': 'node_modules/react/dist/react.min.js',
            'output': 'dist/jslibrary',
            'prod_include': true
        },
        {
            'name': 'react-dom.min',
            'src': 'node_modules/react-dom/dist/react-dom.min.js',
            'output': 'dist/jslibrary',
            'prod_include': true
        },
        {
            'name': 'jquery.min',
            'src': 'node_modules/jquery/dist/jquery.min.js',
            'output': 'dist/jslibrary',
            'prod_include': true
        },
    ],

    webglobal: [
        {
            'name': 'aicGlobal',
            'src': ['webparts/Navigation/index.jsx'],
            'style': ['stylelibrary/commonstyle.less', 'webparts/Navigation/style.less'],
            'output': 'dist/webglobal',
            'prod_include': true
        },
    ],
    concats: [
        {
            'name': 'aicGlobal',
            'src': ['../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution/JS/aicGlobal.js', 'jslibrary/Commonjs.js', 'jslibrary/WebpartCommonjs.js'],
            'output': 'dist/jslibrary',
        },
        {
            'name': 'webparts',
            'src': ['../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution/JS/webparts.js', 'jslibrary/WebpartCommonjs.js'],
            'output': 'dist/jslibrary',
        },
        {
            'name': 'stafflayout',
            'src': ['../APPSAICSolution/APPSAICSolution/Layouts/APPSAICSolution/JS/stafflayout.js', 'jslibrary/WebpartCommonjs.js'],
            'output': 'dist/jslibrary',
        }
    ],
    images: [
        {
            'src': ['stylelibrary/images/*'],
            output: 'dist/common/images',
            prod_output: 'Images',
            'prod_include': true

        },
    ],

    font: {
        'src': ['stylelibrary/fonts/*'],
        'output': 'dist/common/fonts',
        prod_output: 'Fonts',
        'prod_include': false
    }
}

