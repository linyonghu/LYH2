(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'林拥护',
        ab:'',
        name1:'林拥护',
        phone:'13067295265',
        phone1:'13067295265',
        createTime:'2017-9-28 15:30:00',
        email:'541495404@qq.com',
        hylx:'111'
      });
    });
  }])
})();
