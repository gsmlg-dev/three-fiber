(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./LamborghiniUrus/LamborghiniUrus.stories.tsx":"./src/LamborghiniUrus/LamborghiniUrus.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/LamborghiniUrus/LamborghiniUrus.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Exhibition",(function(){return Exhibition}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),three_module=__webpack_require__("./node_modules/three/build/three.module.js"),react_three_fiber_esm=__webpack_require__("./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js"),Environment=__webpack_require__("./node_modules/@react-three/drei/core/Environment.js"),Stage=__webpack_require__("./node_modules/@react-three/drei/core/Stage.js"),OrbitControls=__webpack_require__("./node_modules/@react-three/drei/core/OrbitControls.js"),useGLTF=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/@react-three/drei/core/useGLTF.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["modelUrl","modelUpdater"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Model_Model=function Model(_ref){var modelUrl=_ref.modelUrl,modelUpdater=_ref.modelUpdater,props=_objectWithoutProperties(_ref,_excluded),gltf=Object(useGLTF.a)(modelUrl),scene=gltf.scene,nodes=gltf.nodes,materials=gltf.materials;return Object(react.useEffect)((function(){modelUpdater(gltf)}),[scene,nodes,materials,gltf,modelUpdater]),Object(jsx_runtime.jsx)("primitive",Object.assign({},props,{object:scene}))};Model_Model.displayName="Model";try{Model_Model.displayName="Model",Model_Model.__docgenInfo={description:"",displayName:"Model",props:{modelUrl:{defaultValue:null,description:"",name:"modelUrl",required:!0,type:{name:"string"}},modelUpdater:{defaultValue:null,description:"",name:"modelUpdater",required:!0,type:{name:"(gltf: GLTF) => void"}},object:{defaultValue:null,description:"",name:"object",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ModelExhibition/Model.tsx#Model"]={docgenInfo:Model_Model.__docgenInfo,name:"Model",path:"src/ModelExhibition/Model.tsx#Model"})}catch(__react_docgen_typescript_loader_error){}var ModelExhibition_ModelExhibition=function ModelExhibition(_ref){var modelUrl=_ref.modelUrl,environment=_ref.environment,_ref$modelUpdater=_ref.modelUpdater,modelUpdater=void 0===_ref$modelUpdater?function(){}:_ref$modelUpdater,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?{args:["#101010"]}:_ref$backgroundColor,_ref$fogAttributes=_ref.fogAttributes,fogAttributes=void 0===_ref$fogAttributes?{args:["#101010",10,50]}:_ref$fogAttributes,_ref$meshAttributes=_ref.meshAttributes,meshAttributes=void 0===_ref$meshAttributes?{color:"#aFa0b0"}:_ref$meshAttributes;return Object(jsx_runtime.jsxs)(react_three_fiber_esm.a,{dpr:[1,2],shadows:!0,camera:{fov:45},children:[Object(jsx_runtime.jsx)("color",Object.assign({},backgroundColor,{attach:"background"})),Object(jsx_runtime.jsx)("fog",Object.assign({attach:"fog"},fogAttributes)),Object(jsx_runtime.jsxs)(react.Suspense,{fallback:null,children:[null!=environment&&Object(jsx_runtime.jsx)(Environment.a,Object.assign({},environment)),Object(jsx_runtime.jsx)(Stage.a,{environment:null,intensity:1,contactShadowOpacity:1,shadowBias:-.0015,children:Object(jsx_runtime.jsx)(Model_Model,{scale:.01,modelUrl:modelUrl,modelUpdater:modelUpdater})})]}),Object(jsx_runtime.jsxs)("mesh",{"rotation-x":-Math.PI/2,scale:100,children:[Object(jsx_runtime.jsx)("planeGeometry",{}),Object(jsx_runtime.jsx)("meshStandardMaterial",Object.assign({transparent:!0,depthWrite:!0},meshAttributes))]}),Object(jsx_runtime.jsx)(OrbitControls.a,{autoRotate:!0,enableZoom:!1,enablePan:!1,minPolarAngle:Math.PI/2.8,maxPolarAngle:Math.PI/2.8})]})};ModelExhibition_ModelExhibition.displayName="ModelExhibition";try{ModelExhibition_ModelExhibition.displayName="ModelExhibition",ModelExhibition_ModelExhibition.__docgenInfo={description:"",displayName:"ModelExhibition",props:{modelUrl:{defaultValue:null,description:"",name:"modelUrl",required:!0,type:{name:"string"}},modelUpdater:{defaultValue:{value:"() => {}"},description:"",name:"modelUpdater",required:!1,type:{name:"((g: GLTF) => void)"}},backgroundColor:{defaultValue:{value:"{ args: ['#101010'] }"},description:"",name:"backgroundColor",required:!1,type:{name:"object"}},fogAttributes:{defaultValue:{value:"{ args: ['#101010', 10, 50] }"},description:"",name:"fogAttributes",required:!1,type:{name:"object"}},environment:{defaultValue:null,description:"",name:"environment",required:!1,type:{name:"object"}},meshAttributes:{defaultValue:{value:"{ color: '#aFa0b0' }"},description:"",name:"meshAttributes",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ModelExhibition/ModelExhibition.tsx#ModelExhibition"]={docgenInfo:ModelExhibition_ModelExhibition.__docgenInfo,name:"ModelExhibition",path:"src/ModelExhibition/ModelExhibition.tsx#ModelExhibition"})}catch(__react_docgen_typescript_loader_error){}var src_ModelExhibition=ModelExhibition_ModelExhibition;try{ModelExhibition.displayName="ModelExhibition",ModelExhibition.__docgenInfo={description:"",displayName:"ModelExhibition",props:{modelUrl:{defaultValue:null,description:"",name:"modelUrl",required:!0,type:{name:"string"}},modelUpdater:{defaultValue:{value:"() => {}"},description:"",name:"modelUpdater",required:!1,type:{name:"((g: GLTF) => void)"}},backgroundColor:{defaultValue:{value:"{ args: ['#101010'] }"},description:"",name:"backgroundColor",required:!1,type:{name:"object"}},fogAttributes:{defaultValue:{value:"{ args: ['#101010', 10, 50] }"},description:"",name:"fogAttributes",required:!1,type:{name:"object"}},environment:{defaultValue:null,description:"",name:"environment",required:!1,type:{name:"object"}},meshAttributes:{defaultValue:{value:"{ color: '#aFa0b0' }"},description:"",name:"meshAttributes",required:!1,type:{name:"object"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ModelExhibition/index.tsx#ModelExhibition"]={docgenInfo:ModelExhibition.__docgenInfo,name:"ModelExhibition",path:"src/ModelExhibition/index.tsx#ModelExhibition"})}catch(__react_docgen_typescript_loader_error){}var LamborghiniUrus_LamborghiniUrus=function LamborghiniUrus(_ref){var _ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"#101010":_ref$backgroundColor,_ref$meshColor=_ref.meshColor,meshColor=void 0===_ref$meshColor?"#fafafa":_ref$meshColor,_ref$fogColor=_ref.fogColor,fogColor=void 0===_ref$fogColor?"#101010":_ref$fogColor,_ref$wheelColor=_ref.wheelColor,wheelColor=void 0===_ref$wheelColor?"gold":_ref$wheelColor,_ref$carColor=_ref.carColor,carColor=void 0===_ref$carColor?"red":_ref$carColor;return Object(jsx_runtime.jsx)(src_ModelExhibition,{modelUrl:"/webgl/lambo.glb",modelUpdater:function modelUpdater(gltf){var scene=gltf.scene,nodes=gltf.nodes,materials=gltf.materials;scene.traverse((function(obj){return"Mesh"===obj.type&&(obj.receiveShadow=!0,obj.castShadow=!0),!1})),Object.assign(nodes.wheel003_020_2_Chrome_0.material,{metalness:1,roughness:.4,color:new three_module.Color(wheelColor)}),Object.assign(materials.WhiteCar,{roughness:0,metalness:.25,emissive:new three_module.Color(carColor),envMapIntensity:.5})},environment:{path:"/webgl/cube"},backgroundColor:{args:[backgroundColor]},fogAttributes:{args:[fogColor,10,50]},meshAttributes:{color:meshColor}})};LamborghiniUrus_LamborghiniUrus.displayName="LamborghiniUrus";try{LamborghiniUrus_LamborghiniUrus.displayName="LamborghiniUrus",LamborghiniUrus_LamborghiniUrus.__docgenInfo={description:"",displayName:"LamborghiniUrus",props:{backgroundColor:{defaultValue:{value:"#101010"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},meshColor:{defaultValue:{value:"#fafafa"},description:"",name:"meshColor",required:!1,type:{name:"string"}},fogColor:{defaultValue:{value:"#101010"},description:"",name:"fogColor",required:!1,type:{name:"string"}},wheelColor:{defaultValue:{value:"gold"},description:"",name:"wheelColor",required:!1,type:{name:"string"}},carColor:{defaultValue:{value:"red"},description:"",name:"carColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/LamborghiniUrus/LamborghiniUrus.tsx#LamborghiniUrus"]={docgenInfo:LamborghiniUrus_LamborghiniUrus.__docgenInfo,name:"LamborghiniUrus",path:"src/LamborghiniUrus/LamborghiniUrus.tsx#LamborghiniUrus"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"ModelExhibition/LamborghiniUrus",component:LamborghiniUrus_LamborghiniUrus,argTypes:{}};var LamborghiniUrus_stories_Template=function Template(args){return Object(jsx_runtime.jsx)("div",{style:{width:800,height:480},children:Object(jsx_runtime.jsx)(LamborghiniUrus_LamborghiniUrus,Object.assign({},args))})};LamborghiniUrus_stories_Template.displayName="Template";var Exhibition=LamborghiniUrus_stories_Template.bind({});Exhibition.args={backgroundColor:"#101010",meshColor:"#fafafa",fogColor:"#101010",wheelColor:"gold",carColor:"#100010"},Exhibition.parameters=Object.assign({storySource:{source:"(args) => (\n  <div style={{ width: 800, height: 480 }}>\n    <LamborghiniUrus {...args} />\n  </div>\n)"}},Exhibition.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},1:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},2:function(module,exports){}},[[1,5,6]]]);