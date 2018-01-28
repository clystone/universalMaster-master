/* verson 1.0 */

(function () {
  'use strict';
  //todo://摆上服务器修改请求的地址
  const url = 'http://192.168.2.117:8080';
  // const url = 'https://shifu.jack-kwan.com';
  var myApp = angular.module("myApp", ['ui.router']);
  myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    // console.log(config.url);
    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('timestampMarker');
    $stateProvider
      .state("blankPage", {
        url: "/",
        templateUrl: "blankPage/blankPage.view.html",
        controller: 'blankPageCtr'
      })
      .state("index", {
        url: "/index",
        templateUrl: "index.html",
        controller: 'indexCtr'
      })
      .state("firstOrder", {
        url: "/firstOrder",
        templateUrl: "firstOrder/firstOrder.view.html",
        controller: 'firstOrderCtr'
      })
      .state("secondOrder", {
        url: "/secondOrder",
        templateUrl: "secondOrder/secondOrder.view.html",
        controller: 'secondOrderCtr'
      })
      .state("thirdOrder", {
        url: "/thirdOrder",
        templateUrl: "thirdOrder/thirdOrder.view.html",
        controller: 'thirdOrderCtr'
      })
      .state("payOrder", {
        url: "/payOrder",
        templateUrl: "payOrder/payOrder.view.html",
        controller: 'payOrderCtr'
      })
      .state("orderDetail", {
        url: "/orderDetail",
        templateUrl: "orderDetail/orderDetail.view.html",
        controller: 'orderDetailCtr',
        params: {args: {}}
      })
      .state("orderReceive", {
        url: "/orderReceive/:orderId",
        templateUrl: "orderReceive/orderReceive.view.html",
        controller: 'orderReceiveCtr'
      })
      .state("money", {
        url: "/money/:orderId",
        templateUrl: "money/money.view.html",
        controller: 'moneyCtr'
      })
      .state("serviceComplete", {
        url: "/serviceComplete/:orderId",
        templateUrl: "serviceComplete/serviceComplete.view.html",
        controller: 'serviceCompleteCtr'
      })

      .state("orderComplete", {
        url: "/orderComplete/:orderId",
        templateUrl: "orderComplete/orderComplete.view.html",
        controller: 'orderCompleteCtr'
      })
      .state("user", {
        url: "/user",
        templateUrl: "user/user.view.html",
        controller: 'userCtr'
      })
      .state("wallet", {
        url: "/wallet/:masterId",
        templateUrl: "wallet/wallet.view.html",
        controller: 'walletCtr'
      })
      .state("serviceData", {
        url: "/serviceData",
        templateUrl: "serviceData/serviceData.view.html",
        controller: 'serviceDataCtr'
      })
      .state("card", {
        url: "/card/:masterId/:bName/:brank/:brankNo",
        templateUrl: "card/card.view.html",
        controller: 'cardCtr'
      })
      .state("aliPay", {
        url: "/aliPay/:masterId/:aName/:aliPay",
        templateUrl: "aliPay/aliPay.view.html",
        controller: 'aliPayCtr'
      })
      .state("register", {
        url: "/register",
        templateUrl: "register/register.view.html",
        controller: 'registerCtr'
      })
      .state("submitData", {
        url: "/submitData",
        templateUrl: "submitData/submitData.view.html",
        controller: 'submitDataCtr'
      })
      .state("audit", {
        url: "/audit",
        templateUrl: "audit/audit.view.html",
        controller: 'auditCtr'
      })
      .state("freeze", {
        url: "/freeze",
        templateUrl: "freeze/freeze.view.html",
        controller: 'freezeCtr'
      })
      .state("city", {
        url: "/city",
        templateUrl: "city/city.view.html",
        controller: 'cityCtr'
      })
      .state("messagePush", {
        url: "/messagePush",
        templateUrl: "messagePush/messagePush.view.html",
        controller: 'messagePushCtr'
      })
      .state("productList", {
        url: "/productList",
        templateUrl: "productList/productList.view.html",
        controller: 'productListCtr'
      })
  });

  myApp.controller('appCtr', ['$scope', 'locals', '$state', '$http', '$timeout', function ($scope, locals, $state, $http, $timeout) {
    // let token = getQueryString("token");
    // let state = getQueryString("state");
    // let id = getQueryString("orderId");
    // // let id = 183;
    //
    // if (id) {
    //   $http.get(url + '/api/order/findneedid/' + id)
    //   // $http.get(url + '/api/order/findneedid/183')
    //     .then(function (res) {
    //       console.log(res.data);
    //       if (res.data.info === '4') {
    //         // alert('订单已被抢');
    //         // $.weui.alert({text: '订单已被抢'});
    //         // console.log(111);
    //         $scope.robOrder = true;
    //         $timeout(function () {
    //           $scope.robOrder = false;
    //         }, 500);
    //       }
    //       else if (res.data.info == 1) {
    //         let need = res.data.parms.need;
    //         $state.go("orderDetail", {
    //           args: {
    //             bookTime: need.time,
    //             orderId: need.orderId,
    //             addr: need.addr,
    //             province: need.province,
    //             city: need.city,
    //             district: need.district,
    //             createTime: need.createTime,
    //             headUrl: need.headUrl,
    //             remark: need.remark,
    //             skill: need.skill,
    //             urgent: need.urgent,
    //             nickname: need.nickname
    //           }
    //         })
    //       }
    //     });
    // }
    // locals.set("userToken", token);
    // locals.set("userState", state);
    // console.log(locals.get("userToken"));
    // console.log(locals.get("userState"));

    // orderDetail({args:{bookTime:need.time,orderId:need.orderId,addr:need.addr,province:need.province,city:need.city,district:need.district,createTime:need.createTime,headUrl:need.headUrl,remark:need.remark,skill:need.skill,urgent:need.urgent,nickname:need.nickname}})

    // console.log(window.location);
    // console.log(token);
    // console.log(state);

    $.weui = {};
    $.weui.alert = function (options) {
      options = $.extend({title: '警告', text: '警告内容'}, options);
      var $alert = $('.weui_dialog_alert');
      $alert.find('.weui_dialog_title').text(options.title);
      $alert.find('.weui_dialog_bd').text(options.text);
      $alert.on('touchend click', '.weui_btn_dialog', function () {
        $alert.hide();
      });
      $alert.show();
    };

    function getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }]);

  myApp.controller('blankPageCtr',['$scope','locals','$state','$http','$window',function ($scope, locals, $state, $http,$window) {
    let token = getQueryString("token");
    let state = getQueryString("state");
    let id = getQueryString("orderId");

    locals.set("userToken", token);
    locals.set("userState", state);
    locals.set("orderId", id);
    if (state == 0) {
      $state.go("register");
    }
    else if (state == 1) {
      $state.go("submitData");
    }
    else if (state == 2) {
      $state.go("audit");
    }
    else if(state == 4){
      $state.go("freeze")
    }
    else if (state == 3 && token){
      window.location.href = "http://localhost:8083/universalMaster/app.html#/index";
      //todo:摆上服务器改
      // window.location.href = "http://shifu.jack-kwan.com/universalMaster/app.html#/index"
    }
    else if(!token){
      //todo:摆上服务器改
      // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb969b27be3b86b16&redirect_uri=http%3a%2f%2fshifu.jack-kwan.com%2fapi%2fpc%2frelate&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect"
    }


    console.log(locals.get("userToken"));
    console.log(locals.get("userState"));
    function getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }]);

  myApp.controller('indexCtr', ['$scope', 'locals', '$state', '$http','$timeout', function ($scope, locals, $state, $http,$timeout) {
    document.body.style.backgroundColor = '#eeeeee';
    $scope.skill = '家电维修';
    // $scope.city = '广州市';
    // let userState = locals.get("userState");
    let userToken = locals.get("userToken");
    let id = locals.get("orderId");

    if (id) {
      $http.get(url + '/api/order/findneedid/' + id)
      // $http.get(url + '/api/order/findneedid/183')
        .then(function (res) {
          console.log(res.data);
          if (res.data.info === '4') {
            // alert('订单已被抢');
            // $.weui.alert({text: '订单已被抢'});
            // console.log(111);
            $scope.robOrder = true;
            $timeout(function () {
              $scope.robOrder = false;
            }, 1500);
            locals.set("orderId","")
          }
          else if (res.data.info == 1) {
            let need = res.data.parms.need;
            $state.go("orderDetail", {
              args: {
                bookTime: need.time,
                orderId: need.orderId,
                addr: need.addr,
                province: need.province,
                city: need.city,
                district: need.district,
                createTime: need.createTime,
                headUrl: need.headUrl,
                remark: need.remark,
                skill: need.skill,
                urgent: need.urgent,
                nickname: need.nickname
              }
            })
          }
        });
    }

    $http.get(url + '/api/skill/findAll/1001')
      .then(res=>{
        console.log(res.data.parms.skill);
        $scope.skills = [];
        angular.forEach(res.data.parms.skill,function (data,index,array) {
          $scope.skills.push(data.skill)
        });
        console.log( $scope.skills);
        var mobileSelect = new MobileSelect({
          trigger: '#trigger1',
          title: '选择服务类型',
          wheels: [
            {data:$scope.skills}
          ],
          position:[0], //初始化定位
          callback:function () {
            $http.get(url + '/api/order/findneedcity/' + $("#trigger1").text() + '/' + $scope.currentCity + '?page=1&size=10', {headers: {"TOKEN": userToken}})
              .then(function (res) {
                console.log(res.data);
                $scope.needs = res.data.parms.needs;
                $scope.maxSize = res.data.parms.maxSize;
              })
              .catch(err => {
                // alert('请求失败');
                console.log(err);
              });
          }
        });
      })
      .then(res=>{
        //todo://测试城市改为湛江市
        $http.get(url + '/api/master/findMyMyCity', {headers: {"TOKEN": userToken}})
          .then(res => {
            // var time = res.config.responseTimestamp - res.config.requestTimestamp;
            // console.log('The request took ' + (time / 1000) + ' seconds.');
            console.log(res.data);
            $scope.currentCity = res.data.parms.city.city;
            if ($scope.currentCity == '广州市'){
              $("#city-picker").val("广东省 广州市");
            }
            else if ($scope.currentCity == '武汉市'){
              $("#city-picker").val("湖北省 武汉市");
            }
            else if ($scope.currentCity == '合肥市'){
              $("#city-picker").val("安徽省 合肥市");
            }
            // $scope.currentCity = '湛江市';

          }).then(res => {
          $http.get(url + '/api/order/findneedcity/' + $scope.skills[0] + '/' + $scope.currentCity + '?page=1&size=10', {headers: {"TOKEN": userToken}})
            .then(function (res) {
              console.log(res.data);
              $scope.needs = res.data.parms.needs;
              $scope.maxSize = res.data.parms.maxSize;
            })
            .catch(err => {
              // alert('请求失败');
              console.log(err);
            });
        });

      });



    $http.get(url + '/api/master/find', {headers: {"TOKEN": userToken}})
      .then(function (res) {
        console.log(res.data);
        let masterId = res.data.parms.master.id;
        locals.set("masterId", masterId);
        $http.get(url + '/api/master/getlocation/' + masterId, {headers: {"TOKEN": userToken}})
          .then(function (res) {
            console.log(res.data);
          })
      })
      .catch(err => {
        // alert('请求失败');
        console.log(err);
      });

    // $http.get(url + '/api/skill/findAll/1001')
    //   .then(res=>{
    //     console.log(res.data.parms.skill);
    //     $scope.skills = [];
    //     angular.forEach(res.data.parms.skill,function (data,index,array) {
    //       $scope.skills.push(data.skill)
    //     });
    //     console.log( $scope.skills);
    //   });

    $("#city-picker").cityPicker({
      title: "服务地区",
      showDistrict: false,
      onClose: () => {
        let temp = $("#city-picker").val();
        let list = temp.split(' ');
        // $scope.city = list[1];
        // console.log($scope.city);
        // $http.get(url + '/api/order/findneedcity/' + $scope.skill + '/' + $scope.city + '?page=1&size=10', {headers: {"TOKEN": userToken}})
        //   .then(function (res) {
        //     console.log(res.data);
        //     let masterId = res.data.parms.master.id;
        //     locals.set("masterId", masterId);
        //     $http.get(url + '/api/master/getlocation/' + masterId, {headers: {"TOKEN": userToken}})
        //       .then(function (res) {
        //         console.log(res.data);
        //       })
        //   })
        //   .catch(err => {
        //     // alert('请求失败');
        //     console.log(err);
        //   });
      }
    });

    let list = $scope.skills;



    $("#picker1").picker({
      title: "请选择您的服务类型",
      cols: [
        {
          textAlign: 'center',
          values: list
        }
      ],
      // values: ["空调维修", "风扇维修", "冰箱维修", "电路维修", "抽油烟机", "洗衣机", "燃气灶", "热水器", "其他"],
      onClose: () => {
        $scope.skill = $("#picker1").val();
        console.log($scope.skill);
        // console.log(typeof (list));
        $http.get(url + '/api/order/findneedcity/' + $scope.skill + '/' + $scope.currentCity + '?page=1&size=10', {headers: {"TOKEN": userToken}})
          .then(function (res) {
            console.log(res.data);
            $scope.needs = res.data.parms.needs;
            $scope.maxSize = res.data.parms.maxSize;
            //   let masterId = res.data.parms.master.id;
            //   locals.set("masterId", masterId);
            //   $http.get(url + '/api/master/getlocation/' + masterId, {headers: {"TOKEN": userToken}})
            //     .then(function (res) {
            //       console.log(res.data);
            //     })
            // })
            // .catch(err => {
            //   // alert('请求失败');
            //   console.log(err);
          });
      }
    });

    $scope.test1 = function () {

      // $.fn.cityPicker.prototype.defaults = '广州';
      // $("#city-picker").cityPicker("setValue", ["广东省", "广州市", "白云区"]);
    };

    function getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }

  }]);

  myApp.controller('registerCtr', ['$scope', 'locals', '$http', '$state', function ($scope, locals, $http, $state) {
    document.body.style.backgroundColor = '#3ea38f';
    let countdown = 60;
    $scope.getSms = () => {
      let phone = $scope.phone + '';
      console.log(phone);
      console.log($scope.phone);
      if (!$scope.phone) {
        $.alert({text: '请先输入手机号'});
      }
      else if (phone.length != 11) {
        $.alert({text: '请输入正确手机号'});
      }
      else {
        $http.get(url + '/api/sms/send/master/' + $scope.phone)
          .then(function (res) {
            console.log(res.data);
            if (res.data.info == 14) {
              $.alert({text: '手机已被注册'});
            }
            else if (res.data.info == 1) {
              var obj = $(".getCode");
              settime(obj);
            }
          })
      }
    };
    // $scope.code = 0;

    $scope.registerMaster = function () {
      console.log("注册");
      console.log($scope.phone);
      if (!$scope.phone) {
        $.alert({text: '请先输入手机号'});

      }
      else if (!$scope.code) {
        $.alert({text: '请先输入验证码'});
      }
      else{
        let userToken = locals.get("userToken");
        $http.post(url + '/api/master/udphone/' + $scope.phone + '/' + $scope.code, {}, {headers: {"TOKEN": userToken}})
          .then(res => {
            console.log(res.data);
            if (res.data.info == 1) {
              $state.go("submitData")
            }
          })
      }
    };

    function settime(obj) { //发送验证码倒计时
      if (countdown == 0) {
        obj.attr('disabled', false);
        //obj.removeattr("disabled");
        obj.val("免费获取验证码");
        countdown = 60;
        return;
      } else {
        obj.attr('disabled', true);
        obj.val("重新发送(" + countdown + ")");
        countdown--;
      }
      setTimeout(function () {
          settime(obj)
        }
        , 1000)
    }
  }]);

  myApp.controller('auditCtr', ['$scope', function ($scope) {
    document.body.style.backgroundColor = '#3ea38f';
  }]);

  myApp.controller('freezeCtr', ['$scope', function ($scope) {
    document.body.style.backgroundColor = '#3ea38f';
  }]);

  myApp.controller('submitDataCtr', ['$scope', 'locals', '$state', '$http', '$timeout', function ($scope, locals, $state, $http, $timeout) {
    document.body.style.backgroundColor = '#eeeeee';
    // $scope.filesPic=[];
    $scope.formData = new FormData();
    let userToken = locals.get("userToken");
    $http.get(url + '/api/master/findCity', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.city = res.data.parms.cities;
      });

    $scope.showCity = function (current, $event) {
      console.log(current.id);
      $scope.select = current.city;
      $scope.selectId = current.id;
    };

    // $scope.subCity = ()=>{
    //   $http.post(url + '/api/master/udCity/' + $scope.selectId,{}, {headers: {"TOKEN": userToken}})
    //     .then(res => {
    //       console.log(res.data);
    //     })
    // };

    $scope.subPic = function () {
      // var myForm = new FormData($("#form0")[0]);


      $.ajax({
        type: "POST",
        url: url + "/api/file/ulmasteridcard/0",
        data: $scope.formData,
        headers: {
          TOKEN: userToken
        },
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
          console.log(res);
          if(res.info == 1){
            alert('上传0成功')
          }
        }
      });
      $.ajax({
        type: "POST",
        url: url + "/api/file/ulmasteridcard/1",
        data: $scope.formData1,
        headers: {
          TOKEN: userToken
        },
        cache: false,
        contentType: false,
        processData: false,
        success: function (res) {
          console.log(res);
          if(res.info == 1){
            alert('上传1成功')
          }
        }
      })
    };

    $scope.submitData = () => {
      // console.log($scope.realName);
      if (!$scope.realName) {
        $.weui.alert({text: '请先输入姓名'});
      }
      else if (!$scope.idCard) {
        $.weui.alert({text: '请输入身份证号'});
      }
      else if ($scope.idCard.length < 15 || $scope.idCard.length>18) {
        $.weui.alert({text: '身份证号码错误'});
      }
      else if (!$scope.select) {
        $.weui.alert({text: '请选择城市'});
      }
      else if ($(".int0").val() == '') {
        $.weui.alert({text: '请上传身份证正面'});
      }
      else if ($(".int1").val() == '') {
        $.weui.alert({text: '请上传身份证反面'});
      }
      else {

        $http.post(url + '/api/master/udCity/' + $scope.selectId, {}, {headers: {"TOKEN": userToken}})
          .then(res => {
            console.log(res.data);
          });

        $http.get(url + '/api/master/find', {headers: {"TOKEN": userToken}})
          .then(function (res) {
            console.log(res.data);
            let masterId = res.data.parms.master.id;
            locals.set("masterId", masterId);

          })
          .catch(err => {
            console.log(err);
          });
        $http.post(url + '/api/master/udIdcard', {
          realName: $scope.realName,
          idCard: $scope.idCard
        }, {headers: {"TOKEN": userToken}})
          .then(res => {
            if(res.data.info == 1){
              $scope.uploading = true;
              $timeout(function () {
                $scope.uploading = false;
              }, 10000);
              console.log(res.data);
              // var myForm = new FormData($("#form0")[0]);
              // var myForm1 = new FormData($("#form1")[0]);

              $.ajax({
                type: "POST",
                url: url + "/api/file/ulmasteridcard/0",
                data: $scope.formData,
                headers: {
                  TOKEN: userToken
                },
                // async:false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (res) {
                  console.log(res);
                  // alert("上传成功");
                  $.ajax({
                    type: "POST",
                    url: url + "/api/file/ulmasteridcard/1",
                    data: $scope.formData1,
                    headers: {
                      TOKEN: userToken
                    },
                    // async:false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (res) {
                      console.log(res);
                      // alert("上传成功");
                      $state.go("audit")
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                      // alert("上传失败");
                    }
                  });
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                  // alert("上传失败");
                }
              });
            }
            else{
              $.weui.alert({text: res.data.msg});
            }

          });
      }
    };

    $.weui = {};
    $.weui.alert = function (options) {
      options = $.extend({title: '警告', text: '警告内容'}, options);
      var $alert = $('.weui_dialog_alert');
      $alert.find('.weui_dialog_title').text(options.title);
      $alert.find('.weui_dialog_bd').text(options.text);
      $alert.on('touchend click', '.weui_btn_dialog', function () {
        $alert.hide();
      });
      $alert.show();
    };

    $(function () {
      // 允许上传的图片类型
      var allowTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
      // 1024KB，也就是 1MB
      // var maxSize = 1024 * 1024;
      // 图片最大宽度
      var maxWidth = 100*1024;
      // 最大上传图片数量
      var maxCount = 1;
      $('.js_file').on('change', function (event) {
        var files = event.target.files;
        // 如果没有选中文件，直接返回
        if (files.length === 0) {
          return;
        }

        for (var i = 0, len = files.length; i < len; i++) {
          var file = files[i];
          var reader = new FileReader();

          // 如果类型不在允许的类型范围内
          if (allowTypes.indexOf(file.type) === -1) {
            $.weui.alert({text: '该类型不允许上传'});
            continue;
          }

          if ($('.weui_uploader_file').length >= maxCount) {
            $.weui.alert({text: '最多只能上传' + maxCount + '张图片'});
            return;
          }

          reader.onload = function (e) {
            var img = new Image();
            img.onload = function () {
              // 不要超出最大宽度
              var that = this;
              // 默认按比例压缩
              var w = that.width,
                h = that.height;
              var ratio;
              if ((ratio = w * h / 4000000)>1) {
                ratio = Math.sqrt(ratio);
                w /= ratio;
                h /= ratio;
              }else {
                ratio = 1;
              }
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');

              var tCanvas = document.createElement("canvas");
              var tctx = tCanvas.getContext("2d");
              // 设置 canvas 的宽度和高度
              canvas.width = w;
              canvas.height = h;
              //铺底色
              ctx.fillStyle = "#fff";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              //如果图片像素大于100万则使用瓦片绘制
              var count;
              if ((count = w * h / 1000000) > 1) {
                count = ~~(Math.sqrt(count)+1); //计算要分成多少块瓦片

//            计算每块瓦片的宽和高
                var nw = ~~(w / count);
                var nh = ~~(h / count);

                tCanvas.width = nw;
                tCanvas.height = nh;

                for (var i = 0; i < count; i++) {
                  for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                  }
                }
              } else {
                ctx.drawImage(img, 0, 0, w, h);
              }
              // tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
              // ctx.drawImage(img, 0, 0, w, h);
              var base64 = canvas.toDataURL('image/jpeg',0.3);

              var $preview = $('<li class="weui_uploader_file" style="background-image:url(' + base64 + ')"></li>');
              $('.weui_uploader_files').append($preview);
              var num = $('.weui_uploader_file').length;
              $('.js_counter').text(num + '/' + maxCount);
              $scope.formData = new FormData();
              var bl = convertBase64UrlToBlob(base64);
              $scope.formData.append("file", bl,"file_"+Date.parse(new Date())+".jpg");
              console.log($scope.formData);
            };

            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
      $('.js_file1').on('change', function (event) {
        var files = event.target.files;
        // 如果没有选中文件，直接返回
        if (files.length === 0) {
          return;
        }

        for (var i = 0, len = files.length; i < len; i++) {
          var file = files[i];
          var reader = new FileReader();

          // 如果类型不在允许的类型范围内
          if (allowTypes.indexOf(file.type) === -1) {
            $.weui.alert({text: '该类型不允许上传'});
            continue;
          }

          if ($('.weui_uploader_file1').length >= maxCount) {
            $.weui.alert({text: '最多只能上传' + maxCount + '张图片'});
            return;
          }

          reader.onload = function (e) {
            var img = new Image();
            img.onload = function () {
              // 不要超出最大宽度
              // var w = Math.min(maxWidth, img.width);
              // // 高度按比例计算
              // var h = img.height * (w / img.width);
              var that = this;
              var w = that.width,
                h = that.height;
              var ratio;
              if ((ratio = w * h / 4000000)>1) {
                ratio = Math.sqrt(ratio);
                w /= ratio;
                h /= ratio;
              }else {
                ratio = 1;
              };
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext('2d');

              var tCanvas = document.createElement("canvas");
              var tctx = tCanvas.getContext("2d");
              // 设置 canvas 的宽度和高度
              canvas.width = w;
              canvas.height = h;
              //铺底色
              ctx.fillStyle = "#fff";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              //如果图片像素大于100万则使用瓦片绘制
              var count;
              if ((count = w * h / 1000000) > 1) {
                count = ~~(Math.sqrt(count)+1); //计算要分成多少块瓦片

//            计算每块瓦片的宽和高
                var nw = ~~(w / count);
                var nh = ~~(h / count);

                tCanvas.width = nw;
                tCanvas.height = nh;

                for (var i = 0; i < count; i++) {
                  for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                  }
                }
              } else {
                ctx.drawImage(img, 0, 0, w, h);
              }
              // ctx.drawImage(img, 0, 0, w, h);
              var base64 = canvas.toDataURL('image/jpeg',0.3);

              var $preview = $('<li class="weui_uploader_file1" style="background-image:url(' + base64 + ')"></li>');
              $('.weui_uploader_files1').append($preview);
              var num = $('.weui_uploader_file1').length;
              $('.js_counter1').text(num + '/' + maxCount);
              $scope.formData1 = new FormData();
              var bl = convertBase64UrlToBlob(base64);
              $scope.formData1.append("file", bl,"file_"+Date.parse(new Date())+".jpg");
              console.log($scope.formData1);
            };

            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    });
    function convertBase64UrlToBlob(urlData){
      var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
    }
  }]);

  myApp.controller('firstOrderCtr', ['$scope', 'locals', '$state', '$http', function ($scope, locals, $state, $http) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    $http.get(url + '/api/order/findsomemaster/2?page=1&size=10', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.maxSize = res.data.parms.maxSize;
        $scope.orders = res.data.parms.orders;
      })
  }]);

  myApp.controller('payOrderCtr', ['$scope', 'locals', '$state', '$http', function ($scope, locals, $state, $http) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    $http.get(url + '/api/order/findsomemaster/3?page=1&size=10', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.maxSize = res.data.parms.maxSize;
        $scope.orders = res.data.parms.orders;
      })
  }]);

  myApp.controller('secondOrderCtr', ['$scope', 'locals', '$state', '$http', function ($scope, locals, $state, $http) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    $http.get(url + '/api/order/findsomemaster/4?page=1&size=10', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.maxSize = res.data.parms.maxSize;
        $scope.orders = res.data.parms.orders;
      })
  }]);

  myApp.controller('thirdOrderCtr', ['$scope', 'locals', '$state', '$http', function ($scope, locals, $state, $http) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    $http.get(url + '/api/order/findsomemaster/5?page=1&size=10', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.maxSize = res.data.parms.maxSize;
        $scope.orders = res.data.parms.orders;
      })
  }]);

  myApp.controller('orderDetailCtr', ['$scope', 'locals', '$state', '$http', '$stateParams', '$sce', function ($scope, locals, $state, $http, $stateParams, $sce) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken1 = locals.get("userToken");
    let params = $stateParams;
    console.log(params);
    // let orderId = params.orderId;
    $scope.order = params.args;
    // console.log($scope.order.bookTime);
    // $scope.bookTime = $scope.order.bookTime;
    // console.log($scope.order.createTime);
    let orderId = params.args.orderId;

    // var audio = document.getElementById('audio');
    // audio.play();

    // $http.get(url+'/api/order/findmaster/'+orderId,{headers: {"TOKEN": userToken1}})
    //   .then(res=>{
    //     console.log(res.data);
    //     $scope.order = res.data.parms.order
    //   });

    $scope.formData = {
      "name": "音频",
      "mediaUrl": "https://www.jiuzi.top/images/orders/" + orderId + "/recode.mp3"//视频路径
    };
    $scope.sceControl = $sce.trustAsResourceUrl;//第一种处理方式

    $scope.showBig0 = function () {
      $scope.bigPic0 = true;
    };

    $scope.hideBig0 = function () {
      $scope.bigPic0 = false;
    };

    $scope.showBig1 = function () {
      $scope.bigPic1 = true;
    };

    $scope.hideBig1 = function () {
      $scope.bigPic1 = false;
    };

    $scope.showBig2 = function () {
      $scope.bigPic2 = true;
    };

    $scope.hideBig2 = function () {
      $scope.bigPic2 = false;
    };

    $scope.receiveOrder = () => {
      let userToken = locals.get("userToken");
      $http.post(url + '/api/order/ac/' + orderId, {}, {headers: {"TOKEN": userToken}})
        .then(res => {
          console.log(res.data);
          if (res.data.info == 1) {
            $state.go("firstOrder")
          }
          else {

          }
        })
    }

  }]);

  myApp.controller('orderReceiveCtr', ['$scope', 'locals', '$stateParams', '$state', '$http', '$sce', function ($scope, locals, $stateParams, $state, $http, $sce) {

    document.body.style.backgroundColor = '#eeeeee';
    let userToken1 = locals.get("userToken");
    let params = $stateParams;
    let orderId = params.orderId;
    console.log(params);
    $http.get(url + '/api/order/findmaster/' + orderId, {headers: {"TOKEN": userToken1}})
      .then(res => {
        console.log(res.data);
        $scope.order = res.data.parms.order
      });

    $scope.showBig = function () {
      $scope.bigPic = true;
    };

    $scope.hideBig = function () {
      $scope.bigPic = false;
    };

    $scope.showBig1 = function () {
      $scope.bigPic1 = true;
    };

    $scope.hideBig1 = function () {
      $scope.bigPic1 = false;
    };

    $scope.showBig2 = function () {
      $scope.bigPic2 = true;
    };

    $scope.hideBig2 = function () {
      $scope.bigPic2 = false;
    };

    $scope.formData = {
      "name": "音频",
      "mediaUrl": "https://shifu.jack-kwan.com/images/orders/" + orderId + "/recode.mp3"//视频路径
    };
    $scope.sceControl = $sce.trustAsResourceUrl;//第一种处理方式
    


  }]);

  myApp.controller('serviceCompleteCtr', ['$scope', 'locals', '$stateParams', '$state', '$http', '$sce', function ($scope, locals, $stateParams, $state, $http, $sce) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken1 = locals.get("userToken");
    let params = $stateParams;
    let orderId = params.orderId;

    $http.get(url + '/api/order/findmaster/' + orderId, {headers: {"TOKEN": userToken1}})
      .then(res => {
        console.log(res.data);
        $scope.order = res.data.parms.order
      });

    $scope.showBig = function () {
      $scope.bigPic = true;
    };

    $scope.hideBig = function () {
      $scope.bigPic = false;
    };

    $scope.showBig1 = function () {
      $scope.bigPic1 = true;
    };

    $scope.hideBig1 = function () {
      $scope.bigPic1 = false;
    };

    $scope.showBig2 = function () {
      $scope.bigPic2 = true;
    };

    $scope.hideBig2 = function () {
      $scope.bigPic2 = false;
    };

    $scope.formData = {
      "name": "音频",
      "mediaUrl": "https://shifu.jack-kwan.com/images/orders/" + orderId + "/recode.mp3"//视频路径
    };
    $scope.sceControl = $sce.trustAsResourceUrl;//第一种处理方式

  }]);

  myApp.controller('orderCompleteCtr', ['$scope', 'locals', '$stateParams', '$state', '$http', '$sce', function ($scope, locals, $stateParams, $state, $http, $sce) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken1 = locals.get("userToken");
    let params = $stateParams;
    let orderId = params.orderId;

    $http.get(url + '/api/order/findmaster/' + orderId, {headers: {"TOKEN": userToken1}})
      .then(res => {
        console.log(res.data);
        $scope.order = res.data.parms.order
      });

    $scope.showBig = function () {
      $scope.bigPic = true;
    };

    $scope.hideBig = function () {
      $scope.bigPic = false;
    };

    $scope.showBig1 = function () {
      $scope.bigPic1 = true;
    };

    $scope.hideBig1 = function () {
      $scope.bigPic1 = false;
    };

    $scope.showBig2 = function () {
      $scope.bigPic2 = true;
    };

    $scope.hideBig2 = function () {
      $scope.bigPic2 = false;
    };

    $scope.formData = {
      "name": "音频",
      "mediaUrl": "https://shifu.jack-kwan.com/images/orders/" + orderId + "/recode.mp3"//视频路径
    };
    $scope.sceControl = $sce.trustAsResourceUrl;//第一种处理方式
  }]);

  myApp.controller('moneyCtr', ['$scope', '$state', 'locals', '$http', '$stateParams', '$sce', function ($scope, $state, locals, $http, $stateParams, $sce) {
    document.body.style.backgroundColor = '#eeeeee';
    let params = $stateParams;
    let userToken1 = locals.get("userToken");
    let orderId = params.orderId;
    // $scope.material = 0;
    // $scope.price = 0;


    // $.weui = {};
    // $.weui.alert = function (options) {
    //   options = $.extend({title: '警告', text: '警告内容'}, options);
    //   var $alert = $('.weui_dialog_alert');
    //   $alert.find('.weui_dialog_title').text(options.title);
    //   $alert.find('.weui_dialog_bd').text(options.text);
    //   $alert.on('touchend click', '.weui_btn_dialog', function () {
    //     $alert.hide();
    //   });
    //   $alert.show();
    // };

    console.log(params);
    $http.get(url + '/api/order/findmaster/' + orderId, {headers: {"TOKEN": userToken1}})
      .then(res => {
        console.log(res.data);
        $scope.order = res.data.parms.order
      });

    $scope.showBig = function () {
      $scope.bigPic = true;
    };

    $scope.hideBig = function () {
      $scope.bigPic = false;
    };

    $scope.showBig1 = function () {
      $scope.bigPic1 = true;
    };

    $scope.hideBig1 = function () {
      $scope.bigPic1 = false;
    };

    $scope.showBig2 = function () {
      $scope.bigPic2 = true;
    };

    $scope.hideBig2 = function () {
      $scope.bigPic2 = false;
    };

    $scope.formData = {
      "name": "音频",
      "mediaUrl": "https://shifu.jack-kwan.com/images/orders/" + orderId + "/recode.mp3"//视频路径
    };
    $scope.sceControl = $sce.trustAsResourceUrl;//第一种处理方式


    $scope.ensureMoney = () => {
      let userToken = locals.get("userToken");
      // let orderId = 22;
      // let price = 22;
      if ($scope.price == undefined) {
        $.weui.alert({text: '请先输入维修价格'});
        console.log($scope.price);
      }
      else {
        if($scope.material == undefined){
          console.log( $scope.material);
          $http.post(url + '/api/order/price2/' + orderId + '?price='+$scope.price * 100 + '&product=0', {}, {headers: {"TOKEN": userToken}})
            .then(res => {
              if (res.data.info == 1) {
                console.log(res.data);
                $state.go("secondOrder")
              }
            });
        }
        else{
          console.log( $scope.material);
          $http.post(url + '/api/order/price2/' + orderId + '?price='+$scope.price * 100 + '&product=' + $scope.material * 100, {}, {headers: {"TOKEN": userToken}})
            .then(res => {
              if (res.data.info == 1) {
                console.log(res.data);
                $state.go("secondOrder")
              }
            });
        }
        // $http.post(url + '/api/order/price/' + orderId + '/' + $scope.price * 100, {}, {headers: {"TOKEN": userToken}})
        //   .then(res => {
        //     if (res.data.info == 1) {
        //       console.log(res.data);
        //       $state.go("secondOrder")
        //     }
        //
        //   });
      }
    }

  }]);

  myApp.controller('userCtr', ['$scope', 'locals', '$http', function ($scope, locals, $http) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");

    $http.get(url + '/api/master/find', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.master = res.data.parms.master
      })

  }]);

  myApp.controller('walletCtr', ['$scope', '$http', 'locals', '$stateParams', function ($scope, $http, locals, $stateParams) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    let params = $stateParams;
    $scope.masterId = params.masterId;
    // $http.get(url+'/api/master/find',{headers: {"TOKEN": userToken}})
    //   .then(res=>{
    //     console.log(res.data);
    //     // $scope.pocket = res.data.parms.pocket;
    //   });
    $http.get(url + '/api/pocket/find', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.pocket = res.data.parms.pocket;
      });
  }]);

  myApp.controller('serviceDataCtr', ['$scope', 'locals', '$http', '$rootScope', function ($scope, locals, $http, $rootScope) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    $http.get(url + '/api/master/find', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.master = res.data.parms.master;
      });
  }]);

  myApp.controller('cardCtr', ['$scope', '$stateParams', '$http', 'locals', '$state', function ($scope, $stateParams, $http, locals, $state) {
    document.body.style.backgroundColor = 'white';
    let userToken = locals.get("userToken");
    let params = $stateParams;
    let masterId = params.masterId;
    console.log(params);
    $scope.brankNo = params.brankNo;

    $.weui = {};
    $.weui.alert = function (options) {
      options = $.extend({title: '警告', text: '警告内容'}, options);
      var $alert = $('.weui_dialog_alert');
      $alert.find('.weui_dialog_title').text(options.title);
      $alert.find('.weui_dialog_bd').text(options.text);
      $alert.on('touchend click', '.weui_btn_dialog', function () {
        $alert.hide();
      });
      $alert.show();
    };

    var t = document.getElementById("bankInt");
    t.onkeydown = change;
    t.onkeyup = change;
    t.onkeypress = change;

    $scope.showNew = function () {
      $scope.showDIv = true;
    };

    $scope.hideDiv = () => {
      $scope.showDIv = false;
    };

    $scope.submitBank = () => {
      let brankNo = $scope.cardInput.replace(/\s/g, "");
      console.log(brankNo);
      $http.post(url + '/api/pocket/udbank', {
        bName: $scope.nameInput,
        brank: $scope.bankInput,
        brankNo: brankNo
      }, {headers: {"TOKEN": userToken}})
        .then(res => {
          console.log(res.data);
          // let msg = res.data.msg;
          if (res.data.info == 1) {
            $scope.showDIv = false;
            $state.go("user");
          }
          else {
            $.weui.alert({text: res.data.msg});
          }
        });

    };

    $scope.msg = params;
    if ($scope.msg.brankNo) {
      $scope.brankNo = formatBankNumber($scope.msg.brankNo);
    }

    function formatBankNumber(bankNumber) {
      return bankNumber.substr(0, 4) + "********" + bankNumber.substr(-4);
    }

    function change() {
      this.value = this.value.replace(/(\d{4})(?=[^\s])/, '$1 ');//替换空格前4位数字为4位数字加空格
    }
  }]);

  myApp.controller('aliPayCtr', ['$scope', '$stateParams', '$http', '$state', 'locals', function ($scope, $stateParams, $http, $state, locals) {
    document.body.style.backgroundColor = 'white';
    let userToken = locals.get("userToken");
    let params = $stateParams;
    console.log(params);
    $scope.msg = params;
    $scope.aliPay = params.aliPay;

    $.weui = {};
    $.weui.alert = function (options) {
      options = $.extend({title: '警告', text: '警告内容'}, options);
      var $alert = $('.weui_dialog_alert');
      $alert.find('.weui_dialog_title').text(options.title);
      $alert.find('.weui_dialog_bd').text(options.text);
      $alert.on('touchend click', '.weui_btn_dialog', function () {
        $alert.hide();
      });
      $alert.show();
    };

    $scope.showNew = function () {
      $scope.showDIv = true;
    };

    $scope.hideDiv = () => {
      $scope.showDIv = false;
    };

    $scope.submitAlipay = () => {
      $http.post(url + '/api/pocket/udali', {
        aName: $scope.nameInput,
        aliPay: $scope.aliInput
      }, {headers: {"TOKEN": userToken}})
        .then(res => {
          console.log(res.data);
          // let msg = res.data.msg;
          if (res.data.info == 1) {
            $scope.showDIv = false;
            $state.go("user");
          }
          else {
            $.weui.alert({text: res.data.msg});
          }
        });
      // $scope.showDIv = false;
    }

  }]);

  myApp.controller('cityCtr', ['$scope', '$stateParams', '$http', '$state', 'locals', '$timeout', function ($scope, $stateParams, $http, $state, locals, $timeout) {
    document.body.style.backgroundColor = '#fff';
    let userToken = locals.get("userToken");
    let params = $stateParams;

    $http.get(url + '/api/master/findMyMyCity', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.currentCity = res.data.parms.city.city;
      });

    $http.get(url + '/api/master/findCity', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.city = res.data.parms.cities;
      });

    // $scope.city=['广州','武汉','上海','北京','南京','杭州',];

    $scope.showCity = function (current, $event) {
      console.log(current.city);
      $scope.select = current.city;
      $scope.selectId = current.id;
    };

    $scope.ensureCity = function () {
      if (!$scope.select) {
        $.weui.alert({text: '请选择城市'});
      }
      else {
        console.log(111);
        $http.post(url + '/api/master/udCity/' + $scope.selectId, {}, {headers: {"TOKEN": userToken}})
          .then(res => {
            console.log(res.data);
            if (res.data.info == 1) {
              $scope.chooseCity = true;
              $timeout(function () {
                $scope.chooseCity = false;
              }, 1000).then(() => {
                $state.reload();
              });
            }
            else {
              $scope.chooseFalse = true;
              $timeout(function () {
                $scope.chooseFalse = false;
              }, 1000);
            }
          });
      }
      // console.log($scope.select);
      console.log($scope.selectId);
    };

    $.weui = {};
    $.weui.alert = function (options) {
      options = $.extend({title: '警告', text: '警告内容'}, options);
      var $alert = $('.weui_dialog_alert');
      $alert.find('.weui_dialog_title').text(options.title);
      $alert.find('.weui_dialog_bd').text(options.text);
      $alert.on('touchend click', '.weui_btn_dialog', function () {
        $alert.hide();
      });
      $alert.show();
    };

  }]);

  myApp.controller('messagePushCtr', ['$scope', '$stateParams', '$http', '$state', 'locals', '$timeout', function ($scope, $stateParams, $http, $state, locals, $timeout) {
    document.body.style.backgroundColor = '#eee';
    let userToken = locals.get("userToken");

    $http.get(url + '/api/master/findpush', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        // var isOff = res.data.parms.masterMatch.off || 1;
        console.log(res.data.parms.masterMatch.off);
        if(res.data.parms.masterMatch.off === null || res.data.parms.masterMatch.off){
          console.log(111);
          $("#pushInput")[0].checked = true

        }
        else{
          $("#pushInput")[0].checked = false;
          console.log(222)
        }
      });

    $("#pushInput").change(function(){
      console.log($(".weui-switch").is(":checked"));
      $http.post(url + '/api/master/udpasson/'+ $("#pushInput")[0].checked,{}, {headers: {"TOKEN": userToken}})
        .then(res => {
          console.log(res.data);
        })
    });

  }]);

  myApp.controller('productListCtr', ['$scope', 'locals', '$state', '$http', function ($scope, locals, $state, $http) {
    document.body.style.backgroundColor = '#eeeeee';
    let userToken = locals.get("userToken");
    $http.get(url + '/api/orderProduct/findAllmaster?page=1&size=10', {headers: {"TOKEN": userToken}})
      .then(res => {
        console.log(res.data);
        $scope.maxSize = res.data.parms.maxSize;
        $scope.orderProducts = res.data.parms.orderProducts;
        console.log($scope.maxSize)
      })
  }]);

  myApp.factory('locals', ['$window', function ($window) {
    return {        //存储单个属性
      set: function (key, value) {
        $window.localStorage[key] = value;
      },        //读取单个属性
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },        //存储对象，以JSON格式存储
      setObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);//将对象以字符串保存
      },        //读取对象
      getObject: function (key) {
        return JSON.parse($window.localStorage[key] || '{}');//获取字符串并解析成对象
      }

    }
  }]);

  myApp.filter('splitNumberFilter', [function () {
    return function (content) {
      return content ? content.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ") : content;
    }
  }]);

  myApp.factory('timestampMarker', ['$log','$window','locals',function($log,$window,locals) {
    $log.debug('$log is here to show you that this is a regular factory with injection');
    return {
      request: function(config) {
        config.requestTimestamp = new Date().getTime();
        //// let token = locals.get("userToken");
        //// if (!token) {
        ////   $window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb969b27be3b86b16&redirect_uri=http%3a%2f%2fshifu.jack-kwan.com%2fapi%2fpc%2frelate&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect";
        ////   console.log('token null');
        //// }
        return config;
      },
      response: function(response) {
        response.config.responseTimestamp = new Date().getTime();
        if(response.data.info == 18){
          console.log(111);
          // $window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb969b27be3b86b16&redirect_uri=http%3a%2f%2fshifu.jack-kwan.com%2fapi%2fpc%2frelate&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect";
        }
        return response;
      }
    };
  }]);
  // myApp.config(['$httpProvider', function($httpProvider) {
  //
  // }]);

}());

function nofind(obj) {
  $("#noAudio").css('display','inline-block');
  $("#audio1").css('display','none');
}

function noPic1() {
  $("#pic1").css('display','none');
  $("#noPic").css('display','inline-block');
}

// function noVideo() {
//   console.log('noVedio');
// }


