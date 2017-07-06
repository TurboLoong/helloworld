'use strict';


angular.module('inspinia', [
  'ngCookies',
  // 'ngTouch',
  'ui.router',
  'ui.bootstrap',
  "oc.lazyLoad",
  // 'rzModule',
  'ngImgCrop',
  'me-lazyload',
  "ngMessages",
  "pascalprecht.translate",
  'ngDragDrop'

]).config(function ($stateProvider, $urlRouterProvider, $logProvider, $httpProvider, $ocLazyLoadProvider, $sceProvider) {

  $logProvider.debugEnabled(true);

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('login', {

      url: "/login",
      templateUrl: "templ/user/login.html",
      data: {pageTitle: 'Login', specialClass: 'login-bg'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              name: 'angular-ladda',
              files: ['plugins/ladda/spin.min.js', 'plugins/ladda/ladda.min.js', 'plugins/ladda/ladda-themeless.min.css', 'plugins/ladda/angular-ladda.min.js']
            }
          ]);
        }
      }
    })

    //admin
    .state('admin', {
      abstract: true,
      url: "/admin",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })


    .state('admin.setting', {
      url: "/setting",
      templateUrl: "templ/admin/admin_setting.html",
      controller: "adminSettingCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },

            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },

          ]);
        }
      }
    })

    .state('admin.userManage', {
      url: "/userManage",
      templateUrl: "templ/admin/userManage.html",
      controller: "userManageCtrl",
      data: {pageTitle: 'userManage'},

      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },


          ]);
        }
      }
    })

    .state('admin.roleManage', {
      url: "/roleManage",
      templateUrl: "templ/admin/roleManage.html",
      controller: "roleManageCtrl",
      data: {pageTitle: 'roleManage'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              name: 'datePicker',
              files: ['plugins/datapicker/angular-datapicker.css', 'plugins/datapicker/angular-datepicker.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win8-n/ui.fancytree.css']
            }

          ]);
        }
      }
    })

    .state('admin.menuManage', {
      url: "/menuManage",
      templateUrl: "templ/admin/menuManage.html",
      controller: "menuManageCtrl",
      data: {pageTitle: 'menuManage'},

      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },

            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win7/ui.fancytree.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('admin.orgManage', {
      url: "/orgManage",
      templateUrl: "templ/admin/orgManage.html",

      data: {pageTitle: 'orgManage'},

      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win7/ui.fancytree.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('admin.printModelManage', {
      url: "/dragTable",
      templateUrl: "templ/admin/dragTable/dragTable.html",
      data: {pageTitle: 'dragTable view',},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            // {
            //   files: ['app/admin/dragTable/dragmin.js']
            // },
            {
              files: ['plugins/angular-dragdrop/src/angular-dragdrop.min.js']
            },
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            // {
            //   files:['app/admin/dragTable/dragTable.css']
            // }
          ]);
        }
      }
    })

    .state('admin.doctorManage', {
      url: "/doctorManage",
      templateUrl: "templ/admin/doctorManage.html",
      data: {pageTitle: 'doctorManager view'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js', 'plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win7/ui.fancytree.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css'],
            },
            {
              serie: true,
              files: ['plugins/cutImage/load-image.all.min.js', 'plugins/cutImage/jquery.Jcrop.js']
            },
            {
              serie: true,
              files: ['plugins/imgCrop/ng-img-crop.css', 'plugins/cutImage/jquery.Jcrop.css']
            }

          ]);
        }
      }
    })

    .state('admin.patientManage', {
      url: "/patientManage",
      templateUrl: "templ/admin/patientManage.html",
      data: {pageTitle: 'dragTable2 view'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('admin.dictManage', {
      url: "/dictManage",
      controller: 'dictManageCtrl',
      templateUrl: "templ/admin/dictManage.html",
      data: {pageTitle: 'dictManage'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('admin.setWorkloadUserTimeout', {
      url: "/setWorkloadTimeout",
      templateUrl: "templ/statistics/setWorkloadTimeout.html",
      controller: 'setWorkloadTimeoutCtr',
      data: {pageTitle: 'workload'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('admin.announcementList', {
      url: "/announcementList",
      templateUrl: "templ/admin/announcementList.html",
      controller: 'announcementListCtrl',
      data: {pageTitle: ''},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            }
          ]);
        }
      }
    })

    .state('admin.chatHistory', {
      url: "/chatHistory",
      templateUrl: "templ/chat/chatHistory.html",
      controller: 'chatHistoryCtrl',
      data: {pageTitle: ''},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })
    //nurse
    .state('nurse', {
      abstract: true,
      url: "/nurse",
      templateUrl: "app/components/common/content.html",

      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })

    .state('nurse.register', {
      url: "/nurseRegister",
      templateUrl: "templ/user/register.html",
      data: {pageTitle: 'nurseRegister'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('nurse.entryHospitalList', {
      url: "/entryHospitalList",
      templateUrl: "templ/nurse/entryHospitalList.html",
      controller: 'entryHospitalList',
      data: {pageTitle: 'entryHospitalList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js',]
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('nurse.hospitalizedCard', {
      url: "/hospitalizedCard/:params",
      templateUrl: "templ/nurse/hospitalizedCard.html",
      data: {pageTitle: 'hospitalizedCard'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              // serie: true,
              files: ['plugins/moment/moment.min.js', 'plugins/lodash/lodash.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              name: 'ui.knob',
              files: ['plugins/jsKnob/jquery.knob.min.js', 'plugins/jsKnob/angular-knob.js']
            },

          ]);
        }
      }
    })

    .state('nurse.dragSickbed', {
      url: "/dragSickbed",
      templateUrl: "templ/nurse/dragSickbed.html",
      data: {pageTitle: 'dragSickbed'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win8-n/ui.fancytree.css']
            }
          ]);
        }
      }
    })

    .state('nurse.nurseDetailList', {
      url: "/nurseDetailList/:params",
      templateUrl: "templ/nurse/nurseDetailList.html",
      data: {pageTitle: 'nurseDetailList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('nurse.distributeDoctor', {
      url: "/distributeDoctor/:params",
      templateUrl: "templ/nurse/distributeDoctor.html",
      data: {pageTitle: 'distributeDoctor'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('nurse.distributeSickbed', {
      url: "/distributeSickbed/:params",
      templateUrl: "templ/nurse/distributeSickbed.html",
      data: {pageTitle: 'distributeSickbed'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('nurse.sickbedDetail', {
      url: "/sickbedDetail",
      templateUrl: "templ/nurse/sickbedDetail.html",
      data: {pageTitle: 'sickbedDetail'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              name: 'oitozero.ngSweetAlert',
              files: ['plugins/sweetalert/angular-sweetalert.min.js']
            },
          ]);
        }
      }
    })

    .state('nurse.hospitalizedCardDetail', {
      url: "/hospitalizedCardDetail/:params",
      templateUrl: "templ/nurse/hospitalizedCardDetail.html",
      data: {pageTitle: 'hospitalizedCardDetail'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js', 'plugins/lodash/lodash.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              name: 'ui.knob',
              files: ['plugins/jsKnob/jquery.knob.min.js', 'plugins/jsKnob/angular-knob.js']
            },

          ]);
        }
      }
    })

    .state('nurse.areaManage', {
      url: "/areaManage",
      templateUrl: "templ/nurse/areaManage.html",
      controller: 'areaManage',
      data: {pageTitle: 'areaManage'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win8-n/ui.fancytree.css']
            }
          ]);
        }
      }
    })


    //modelroom
    .state('model', {
      abstract: true,
      url: "/model",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })


    .state('model.modelhome', {
      url: "/modelhome",
      templateUrl: "templ/model/modelhome.html",
      controller: 'modelhome',
      data: {pageTitle: 'modelhome'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('model.scheduled', {
      url: '/scheduled',
      templateUrl: 'templ/model/scheduled.html',
      controller: "scheduled",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })


    .state('model.modelDetails', {
      url: "/modelDetails/:id/:taskId",
      templateUrl: "templ/model/modelDetails.html",
      controller: 'modelDetails',
      data: {pageTitle: 'modelDetails'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: [
                'plugins/moment/moment.min.js'
              ],
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })

    .state('model.processedtask', {
      url: "/processedtask",
      templateUrl: "templ/model/processedtask.html",
      controller: 'modelroom_processedtask',
      data: {pageTitle: 'processedtask'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('model.details', {
      url: "/detail/:params",
      templateUrl: "templ/model/details.html",
      controller: 'modelroom_details',
      data: {pageTitle: 'details'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },


          ]);
        }
      }
    })


    .state('model.setting', {
      url: "/setting",
      templateUrl: "templ/model/setting.html",
      controller: 'modelroom_setting',
      data: {pageTitle: 'setting'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('model.scheduling', {
      url: '/scheduling',
      templateUrl: 'templ/model/scheduling.html',
      controller: 'modelScheduling',
      data: {pageTitle: 'scheduling'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('model.history', {
      url: '/history/:id/:taskId',
      templateUrl: 'templ/model/history.html',
      controller: 'modelHistory',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })

    .state('model.prescription02', {
      url: "/prescription02",
      templateUrl: "templ/model/prescription02.html",
      controller: 'prescription',
      data: {pageTitle: 'prescription'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    //therapeutist
    .state('therapeutist', {
      abstract: true,
      url: "/therapeutist",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })


    .state('therapeutist.toDoList', {
      url: "/todos",
      templateUrl: "templ/therapeutist/toDoList.html",
      controller: "therapeutistToDoListCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })
    .state('therapeutist.toDoHistory', {
      url: "/history",
      templateUrl: "templ/therapeutist/toDoHistory.html",
      controller: "therapeutistDoneListDetail",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })
    .state('therapeutist.detail', {
      url: "/therapeutist/detail/:id/:taskId",
      templateUrl: "templ/therapeutist/historyDetail.html",
      controller: "therapeutistToDoHistoryDetailCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })
    .state('therapeutist.sortList', {
      url: "/sortList",
      templateUrl: "templ/therapeutist/patientList.html",
      controller: "sortList",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css', 'plugins/lodash/lodash.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })
    .state('therapeutist.sort', {
      url: "/sort",
      templateUrl: "templ/therapeutist/sort.html",
      controller: "therapsort",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/moment/moment.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css'],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })
    .state('therapeutist.opencure', {
      url: "/opencure/:spacil",
      templateUrl: "templ/therapeutist/openCure.html",
      controller: "opencure",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })
    .state('therapeutist.preDetail', {
      url: "/preDetail/:id/:flag",
      templateUrl: "templ/therapeutist/preDetail.html",
      controller: "preDetail",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })

    .state('therapeutist.therapyException', {
      url: "therapyException/:id/:taskId",
      templateUrl: "templ/therapeutist/therapyException.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('therapeutist.therapyExceptionHty', {
      url: "therapyException/:id/:taskId",
      templateUrl: "templ/therapeutist/therapyExceptionHty.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('therapeutist.therapyRecord', {
      url: "therapy/record/:id/:taskId",
      templateUrl: "templ/therapeutist/therapyRecord.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })


    //pricing
    .state('pricing', {
      abstract: true,
      url: "/pricingroom",
      templateUrl: "app/components/common/content.html"
    })
    .state('pricing.beforeTherapy', {
      url: "/beforeTherapy/:id/:taskId",
      templateUrl: "templ/pricing/pricing.html",
      controller: 'beforeTherapyCtrl',
      data: {pageTitle: 'beforeTherapy'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }, {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css', 'plugins/lodash/lodash.min.js']
            }
          ]);
        }
      }
    })
    .state('pricing.afterTherapy', {
      url: "/afterTherapy/:id/:taskId",
      templateUrl: "templ/pricing/afterPricing.html",
      controller: 'afterTherapyCtrl',
      data: {pageTitle: 'afterTherapy'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }, {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css', 'plugins/lodash/lodash.min.js']
            }
          ]);
        }
      }
    })
    .state('pricing.processingtask', {
      url: "/processingtask",
      templateUrl: "templ/pricing/processingtask.html",
      controller: 'pricingroom_processingtask',
      data: {pageTitle: 'processingtask'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']

            }
          ]);
        }
      }
    })
    .state('pricing.processedtask', {
      url: "/processedtask",
      templateUrl: "templ/pricing/processedtask.html",
      controller: 'pricingroom_processedtask',
      data: {pageTitle: 'processedtask'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    //physcists
    .state('physicist', {
      abstract: true,
      url: "/physicist",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })
    .state('physicist.physicistToDoList', {
      url: "/physicistToDoList",
      templateUrl: "templ/physicist/physicistToDoList.html",
      controller: 'physicistToDoListCtrl',
      data: {pageTitle: 'physicistToDoList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('physicist.validateToDoList', {
      url: "/validateToDoList",
      templateUrl: "templ/physicist/validateToDoList.html",
      controller: 'validateToDoListCtrl',
      data: {pageTitle: 'validateToDoList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('physicist.validateDoneList', {
      url: "/validateDoneList",
      templateUrl: "templ/physicist/validateDoneList.html",
      controller: 'validateDoneListCtrl',
      data: {pageTitle: 'validateDoneList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('physicist.physicistPlan', {
      url: "/physicistPlan/:id/:taskId",
      templateUrl: "templ/physicist/phyTreatmentPlan.html",
      controller: 'phyTreatmentPlanCtrl',
      data: {pageTitle: 'physicistPlan'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/tab.js', 'plugins/bootstrap/collapse.js']
            },
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            }, {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            }
          ]);
        }
      }
    })
    .state('physicist.physicistReplan', {
      url: "/physicistReplan/:id/:taskId/:therapyPlanId",
      templateUrl: "templ/physicist/physistReplan.html",
      controller: 'physicistReplanCtrl',
      data: {pageTitle: 'physicistReplan'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            },
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
          ]);
        }
      }
    })
    .state('physicist.superiorConfirm', {
      url: "/superiorConfirm/:id/:taskId",
      templateUrl: "templ/physicist/superiorConfirm.html",
      controller: 'superiorConfirmCtrl',
      data: {pageTitle: 'superiorConfirm'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })
    .state('physicist.physicistHistory', {
      url: "/physicistHistory",
      templateUrl: "templ/physicist/physicistHistory.html",
      controller: 'physicistHistoryCtrl',
      data: {pageTitle: 'physicistHistory'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              serie: true,
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })
    .state('physicist.physicistDoseVerify', {
      url: "/physicistPlanVerify/:id/:taskId/:processId/:therapyPlanId",
      templateUrl: "templ/physicist/physicistVerifyPlan.html",
      controller: 'physicistVerifyPlan',
      data: {pageTitle: 'physicistVerifyPlan'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/tab.js', 'plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })
    .state('physicist.physicistPlanCheckout', {
      url: "/physicistPlanCheckout/:id/:taskId",
      templateUrl: "templ/physicist/physicistPlanCheckout.html",
      controller: 'physicistPlanCheckoutCtrl',
      data: {pageTitle: 'physicistPlanCheckout'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/tab.js', 'plugins/bootstrap/collapse.js']
            },
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })
    //ct

    .state('ct', {
      abstract: true,
      url: "/ct",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css', 'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })

    .state('ct.toDoList', {
      url: "/toDoList",
      templateUrl: "templ/ct/ctToDoList.html",
      controller: 'ctToDoListCtrl',
      data: {pageTitle: 'toDoList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,

              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },


          ]);
        }
      }
    })

    .state('ct.positionDet', {
      url: "/positionDet?id&taskId",
      templateUrl: "templ/ct/positionDet.html",
      controller: 'positionDet',

      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/moment/moment.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })

    .state('ct.locateForm', {
      url: "/locateForm",
      templateUrl: "templ/ct/ctLocateForm.html",
      controller: 'ctLocateFormCtrl',
      data: {pageTitle: 'ctLocateForm'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('ct.scheduling', {
      url: "/scheduling",
      templateUrl: "templ/ct/scheduling.html",
      controller: "ctSchedulingCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              name: 'oitozero.ngSweetAlert',
              files: ['plugins/sweetalert/angular-sweetalert.min.js']
            },
            {
              files: ['plugins/echarts/echarts.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('ct.main', {
      url: "/main",
      templateUrl: "templ/ct/main.html",
      controller: 'ctMainCtrl',
      data: {pageTitle: 'history'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']

            },
            {
              files: ['plugins/echarts/dist/echarts.min.js']
            }
          ]);
        }
      }
    })

    .state('ct.history', {
      url: "/history",
      templateUrl: "templ/ct/ctHistory.html",
      controller: 'ctHistoryCtrl',
      data: {pageTitle: 'history'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/moment/moment.min.js']
            }
          ]);
        }
      }
    })

    .state('ct.record', {
      url: "/record/:id/:taskId",
      templateUrl: "templ/ct/record.html",
      controller: 'ctRecord',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })

    .state('ct.position', {
      url: "/position/:id/:taskId",
      templateUrl: "templ/ct/position.html",
      controller: 'ctPosition',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            },
          ]);
        }
      }
    })

    .state('ct.detail', {
      url: "/detail/:id/:taskId",
      templateUrl: "templ/ct/ctDetail.html",
      controller: 'ctDetailCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
          ]);
        }
      }
    })

    //mri
    .state('mri', {
      abstract: true,
      url: "/mri",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([]);
        }
      }
    })

    .state('mri.toDoList', {
      url: "/toDoList",
      templateUrl: "templ/mri/mriToDoList.html",
      controller: 'mriToDoListCtrl',
      data: {pageTitle: 'toDoList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,

              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },


          ]);
        }
      }
    })
    .state('mri.detail', {
      url: "/detail?id&taskId",
      templateUrl: "templ/mri/mriDetail.html",
      controller: 'mriDetailCtrl',
      data: {pageTitle: 'detail'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,

              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },


          ]);
        }
      }
    })

    .state('mri.history', {
      url: "/history",
      templateUrl: "templ/mri/mriHistory.html",
      controller: 'mriHistoryCtrl',
      data: {pageTitle: 'history'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,

              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    //viewer
    .state('viewer', {
      abstract: true,
      url: "/viewer",
      templateUrl: "app/components/common/content.html"
    })

    .state('viewer.contouringList', {
      url: "/contouringList",
      templateUrl: "templ/contouring/contouringList.html",
      controller: "contourImageList",
      data: {pageTitle: 'contouringList'},

      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              name: 'datePicker',
              files: ['plugins/datapicker/angular-datapicker.css', 'plugins/datapicker/angular-datepicker.js']
            },

          ]);
        }
      }
    })

    .state('contouring', {
      url: "/contouring?imageId&dicomIds&type&suitId",
      templateUrl: "templ/contouring/viewer.html",
      controller: "viewer",
      data: {pageTitle: 'contouring'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/progressabr/progressbar.min.js']
            },
            {
              files: ['plugins/Viewer/untils/humane.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/nprogress/nprogress.css', 'plugins/nprogress/nprogress.js']
            },
            {
              files: ['plugins/rangeSlider/rangeSlider.js']
            },
            {
              files: ['plugins/loading/loading.js'],
            },
            {
              files: ['plugins/angularjs-slider/dist/rzslider.css', 'plugins/angularjs-slider/dist/rzslider.js'],
              cache: false
            },
            {
              files: ['plugins/jquery-ui/jquery-ui.min.js', 'plugins/jquery-ui/jquery-ui.min.css']
            },
            {
              files: ['plugins/lodash/lodash.min.js']
            },
            {
              files: ['plugins/jsTree/style.css', 'plugins/jsTree/jstree.js']
            },
            {
              name: 'ngJsTree',
              files: ['plugins/jsTree/ngJsTree.min.js']
            },
            {
              files: ['plugins/echarts/echarts.min.js']
            },

            {
              serie: true,
              files: [
                'plugins/Viewer/untils/jquery.hotkeys.js',
                'plugins/Viewer/untils/jquery.browser.js',
                'plugins/Viewer/untils/jquery.slimscroll.min.js',
                'plugins/Viewer/untils/jackedup.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js',
                'plugins/Viewer/untils/jquery.hammer-full.min.js',
                'plugins/Viewer/untils/hammer.min.js',
                'plugins/Viewer/untils/flood.js',
                'plugins/Viewer/untils/marchingsquares-isocontours.js'
              ]
            },
            {
              serie: true,
              files: [
                'plugins/Viewer/lm.core.min.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/untils/cornerstone.js',
                'plugins/Viewer/untils/cornerstoneMath.min.js',
                'plugins/Viewer/untils/cornerstoneTools.js',
                'plugins/Viewer/untils/dicomParser.min.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/untils/cornerstoneWebImageLoader.js',
                'plugins/Viewer/untils/cornerstoneWADOImageLoader.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/lm.core.min.js',
                'plugins/Viewer/lm.msgShow.js',
                'plugins/Viewer/lm.Viewer.js',
                'plugins/Viewer/lm.Viewer.srv.js',
                'plugins/Viewer/lm.Viewer.ui.js',
                'plugins/Viewer/lm.Viewer.colorMap.js',
                'plugins/Viewer/lm.Viewer.RT.DoseGridFrame.js',
                'plugins/Viewer/lm.Viewer.RT.ROIPlane.js',
                'plugins/Viewer/lm.Viewer.RT.DVH.js',
                'plugins/Viewer/lm.Viewer.RT.contour.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/untils/cabbage.js',
                'plugins/Viewer/untils/helpers.js',
                'plugins/Viewer/untils/filters.js',
                'plugins/Viewer/untils/canny.js'
              ]
            }, {
              files: ['plugins/tree-multiselect/jquery.tree-multiselect.css',
                'plugins/tree-multiselect/jquery.tree-multiselect.js']
            },
            {
              serie: true,
              files: ['plugins/jscolor/colorjoe.css',
                'plugins/jscolor/one-color.js',
                'plugins/jscolor/colorjoe.js']
            },
            //threeViewer
            //
            {
              files: [
                'plugins/Viewer/untils/jquery.ui.css',
                'plugins/Viewer/untils/jquery.miniColors.css',
                'plugins/Viewer/untils/jquery.sidebar.css',
                'plugins/Viewer/untils/jquery.ui.js',
                'plugins/Viewer/untils/jquery.miniColors.js',
                'plugins/Viewer/untils/xtk.js',
                'plugins/Viewer/untils/pdfobject.min.js',
                'plugins/Viewer/untils/z-worker.js',
                'plugins/Viewer/untils/inflate.js',
                'plugins/Viewer/untils/zip.js'
              ]
            },
            {
              serie: true,
              name: 'angular-ladda',
              files: ['plugins/ladda/spin.min.js', 'plugins/ladda/ladda.min.js', 'plugins/ladda/ladda-themeless.min.css', 'plugins/ladda/angular-ladda.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('export', {
      url: "/export?pk&suitId",
      templateUrl: "templ/contouring/export.html",
      controller: "export",
      data: {pageTitle: 'export'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/progressabr/progressbar.min.js']
            },
            {
              files: ['plugins/Viewer/untils/humane.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/nprogress/nprogress.css', 'plugins/nprogress/nprogress.js']
            },
            {
              files: ['plugins/rangeSlider/rangeSlider.js']
            },
            {
              files: ['plugins/loading/loading.js'],
            },
            {
              files: ['plugins/angularjs-slider/dist/rzslider.css', 'plugins/angularjs-slider/dist/rzslider.js'],
              cache: false
            },
            {
              files: ['plugins/jquery-ui/jquery-ui.min.js', 'plugins/jquery-ui/jquery-ui.min.css']
            },
            {
              files: ['plugins/lodash/lodash.min.js']
            },
            {
              files: ['plugins/jsTree/style.css', 'plugins/jsTree/jstree.js']
            },
            {
              name: 'ngJsTree',
              files: ['plugins/jsTree/ngJsTree.min.js']
            },
            {
              files: ['plugins/echarts/echarts.min.js']
            },

            {
              serie: true,
              files: [
                'plugins/Viewer/untils/jquery.hotkeys.js',
                'plugins/Viewer/untils/jquery.browser.js',
                'plugins/Viewer/untils/jquery.slimscroll.min.js',
                'plugins/Viewer/untils/jackedup.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js',
                'plugins/Viewer/untils/jquery.hammer-full.min.js',
                'plugins/Viewer/untils/hammer.min.js',
                'plugins/Viewer/untils/flood.js',
                'plugins/Viewer/untils/marchingsquares-isocontours.js'
              ]
            },
            {
              serie: true,
              files: [
                'plugins/Viewer/lm.core.min.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/untils/cornerstone.js',
                'plugins/Viewer/untils/cornerstoneMath.min.js',
                'plugins/Viewer/untils/cornerstoneTools.js',
                'plugins/Viewer/untils/dicomParser.min.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/untils/cornerstoneWebImageLoader.js',
                'plugins/Viewer/untils/cornerstoneWADOImageLoader.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/lm.core.min.js',
                'plugins/Viewer/lm.msgShow.js',
                'plugins/Viewer/lm.Viewer.js',
                'plugins/Viewer/lm.Viewer.srv.js',
                'plugins/Viewer/lm.Viewer.ui.js',
                'plugins/Viewer/lm.Viewer.colorMap.js',
                'plugins/Viewer/lm.Viewer.RT.DoseGridFrame.js',
                'plugins/Viewer/lm.Viewer.RT.ROIPlane.js',
                'plugins/Viewer/lm.Viewer.RT.DVH.js',
                'plugins/Viewer/lm.Viewer.RT.contour.js'
              ]
            },
            {
              serie: true,
              files: ['plugins/Viewer/untils/cabbage.js',
                'plugins/Viewer/untils/helpers.js',
                'plugins/Viewer/untils/filters.js',
                'plugins/Viewer/untils/canny.js'
              ]
            }, {
              files: ['plugins/tree-multiselect/jquery.tree-multiselect.css',
                'plugins/tree-multiselect/jquery.tree-multiselect.js']
            },
            {
              serie: true,
              files: ['plugins/jscolor/colorjoe.css',
                'plugins/jscolor/one-color.js',
                'plugins/jscolor/colorjoe.js']
            },
            //threeViewer
            //
            {
              files: [
                'plugins/Viewer/untils/jquery.ui.css',
                'plugins/Viewer/untils/jquery.miniColors.css',
                'plugins/Viewer/untils/jquery.sidebar.css',
                'plugins/Viewer/untils/jquery.ui.js',
                'plugins/Viewer/untils/jquery.miniColors.js',
                'plugins/Viewer/untils/xtk.js',
                'plugins/Viewer/untils/pdfobject.min.js',
                'plugins/Viewer/untils/z-worker.js',
                'plugins/Viewer/untils/inflate.js',
                'plugins/Viewer/untils/zip.js'
              ]
            },
            {
              serie: true,
              name: 'angular-ladda',
              files: ['plugins/ladda/spin.min.js', 'plugins/ladda/ladda.min.js', 'plugins/ladda/ladda-themeless.min.css', 'plugins/ladda/angular-ladda.min.js']
            }
          ]);
        }
      }
    })

    //doctor
    .state('doctor', {
      abstract: true,
      url: "/doctor",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })

    //phy viewer

    .state('doctor.homepage', {
      url: "/homepage",
      templateUrl: "templ/doctor/doctorhome.html",
      data: {pageTitle: 'homepage'},
      controller: 'doctorHome',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('doctor.processingList', {
      url: "/processingList",
      templateUrl: "templ/doctor/processingList.html",
      data: {pageTitle: 'processingList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })


    .state('doctor.docConfirmResult', {

      url: "/docConfirmResult/:id/:taskId",
      templateUrl: "templ/doctor/docConfirmResult.html",
      data: {pageTitle: 'docConfirmResult'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('doctor.subdoctorTasksList', {

      url: "/subdoctorTasksList/:params",
      templateUrl: "templ/doctor/subdoctorTasks.html",
      data: {pageTitle: 'subdoctorTasks'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('doctor.historyList', {
      url: "/historyList/:params",
      templateUrl: "templ/doctor/processedList.html",
      data: {pageTitle: 'processedList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('doctor.docDetailPage', {
      url: "/docDetailPage/:params",
      templateUrl: "templ/doctor/docDetailPage.html",
      data: {pageTitle: 'docDetailPage'},
      controller: 'docDetailPage',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: [
                'plugins/fullcalendar-3.1.0/fullcalendar.min.css',
                'plugins/fullcalendar-3.1.0/lib/jquery.min.js',
                'plugins/fullcalendar-3.1.0/lib/moment.min.js',
                'plugins/fullcalendar-3.1.0/fullcalendar.min.js',
                'plugins/fullcalendar-3.1.0/locale/zh-cn.js'
              ]
            }
            /*{
             serie: true,
             files: ['plugins/moment/moment.min.js']
             },
             {
             files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
             }*/
          ]);
        }
      }
    })

    .state('doctor.treatmentPlan', {
      url: "/treatmentPlan/:id/:taskId",
      templateUrl: "templ/doctor/treatmentPlan.html",
      data: {pageTitle: 'doctreatmentPlan'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/tab.js', 'plugins/bootstrap/collapse.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },

          ]);
        }
      }
    })

    .state('doctor.docDetailMsg', {
      url: "/docDetailMsg",
      templateUrl: "templ/doctor/docDetailMsg.html",
      data: {pageTitle: 'docDetailMsg'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {

              files: ['plugins/lodash/lodash.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('doctor.modelException', {
      url: "/modelException/:id/:taskId",
      templateUrl: "templ/model/modelException.html",
      data: {pageTitle: 'modelException'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              serie: true,
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })

    .state('doctor.exceptionHistory', {
      url: "/exceptionHistory/:id/:taskId",
      templateUrl: "templ/model/exceptionHistory.html",
      data: {pageTitle: 'exceptionHistory'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('doctor.docWritePrescription', {
      url: "/docWritePrescription/:params",
      templateUrl: "templ/doctor/docContain/docWritePrescription.html",
      data: {pageTitle: 'docPrescriptionDetail'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })

    .state('doctor.docReview', {
      url: "/docReview",
      templateUrl: "templ/doctor/docReview.html",
      data: {pageTitle: 'docReview'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })


    //模版管理
    .state('template', {
      abstract: true,
      url: "/template",
      templateUrl: "app/components/common/content.html",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })
    .state('template.prescriptionTempList', {
      url: "/prescriptionTempList",
      templateUrl: "templ/prescriptionTemp/prescriptionTempList.html",
      controller: 'prescriptionTempListCtrl',
      data: {pageTitle: 'prescriptionTempList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            }
          ]);
        }
      }
    })
    .state('template.prescriptionTemplateUpdate', {
      url: "/prescriptionTemplateUpdate/:icdCodeId/:templateType/:id",
      templateUrl: "templ/prescriptionTemp/prescriptionTemplate.html",
      controller: 'addPrescriptionTemplateCtr',
      data: {pageTitle: 'addPrescriptionTemplate'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })
    .state('template.prescriptionTemplateAdd', {
      url: "/prescriptionTemplateAdd",
      templateUrl: "templ/prescriptionTemp/prescriptionTemplate.html",
      controller: 'addPrescriptionTemplateCtr',
      data: {pageTitle: 'addPrescriptionTemplate'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })
    .state('template.CTTemplate', {
      url: "/CTTemplate",
      templateUrl: "templ/prescriptionTemp/prescriptionCTTemplate.html",
      controller: 'prescriptionCTTemplateCtrl',
      data: {pageTitle: 'prescriptionCTTemplate'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })
    .state('template.therapyPlanTempList', {
      url: "/therapyTempList",
      templateUrl: "templ/prescriptionTemp/therapyPlanTempList.html",
      controller: 'therapyPlanTempListCtrl',
      data: {pageTitle: 'therapyPlanTempList'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })
    .state('template.therapyPlanTemplateAdd', {
      url: "/therapyPlanTemplateAdd",
      templateUrl: "templ/prescriptionTemp/therapyPlanTemplate.html",
      controller: 'therapyPlanTempLateCtrl',
      data: {pageTitle: 'therapyTemplate'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })
    .state('template.therapyPlanTemplateUpdate', {
      url: "/therapyPlanTemplateUpdate/:id",
      templateUrl: "templ/prescriptionTemp/therapyPlanTemplate.html",
      controller: 'therapyPlanTempLateCtrl',
      data: {pageTitle: 'therapyTemplate'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css', 'plugins/lodash/lodash.min.js']
            },
          ]);
        }
      }
    })
    //print
    .state('doctor.printCollects', {
      url: '/printCollect/:id/:taskId',
      templateUrl: 'templ/printPages/printCollect.html',
      data: {pageTitle: 'printCollect'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/lodash/lodash.min.js']
            },
          ]);
        }

      }
    })

    .state('doctor.docConfirmPlan', {
      url: "/docConfirmPlan/:id/:taskId",
      templateUrl: "templ/doctor/docConfirmPlan.html",
      data: {pageTitle: 'confirmPlan'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
          ]);
        }
      }
    })

    .state('doctor.openSimulationForm', {
      url: "/openSimulationForm/:id/:taskId",
      templateUrl: "templ/doctor/openSimulationForm.html",
      data: {pageTitle: 'openSimulationForm'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })
    .state('doctor.confirmDetailPlan', {
      url: "/confirmPhyPlan/:id/:taskId",
      templateUrl: "templ/doctor/confirmPhyPlan.html",
      data: {pageTitle: 'confirmPhyPlan'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
          ]);
        }
      }
    })
    .state('doctor.threeDocConfirm', {
      url: "/threeDocConfirm/:id/:taskId",
      templateUrl: "templ/doctor/threeDocConfirm.html",
      data: {pageTitle: 'threeDocConfirm'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('doctor.docConfirmTreat', {
      url: "/docConfirmTreat/:id/:taskId",
      templateUrl: "templ/doctor/docConfirmTreat.html",
      data: {pageTitle: 'docConfirmTreat'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('doctor.modifyPersonalMsg', {
      url: "/modifyPersonalMsg/:params",
      templateUrl: "templ/admin/modifyPersonalMsg.html",
      data: {pageTitle: 'modifyPersonalMsg'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              name: 'angular-ladda',
              files: ['plugins/ladda/spin.min.js', 'plugins/ladda/ladda.min.js', 'plugins/ladda/ladda-themeless.min.css', 'plugins/ladda/angular-ladda.min.js']
            }
          ]);
        }
      }
    })

    .state('doctor.searchPatients', {
      url: "/searchPatients/:params",
      templateUrl: "templ/doctor/searchPatients.html",
      data: {pageTitle: 'searchPatients'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },

          ]);
        }
      }
    })

    .state('doctor.fields', {
      url: "/fields/:itemId/:planId",
      templateUrl: "templ/doctor/docContain/RTplanModel.html",
      data: {pageTitle: 'fields'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })
    .state('doctor.showFields', {
      url: "/showfields/:pk/:num",
      templateUrl: "templ/doctor/docContain/showFields.html",
      data: {pageTitle: 'showfields'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })

    .state('ct.rotate', {
      url: '/rotate',
      templateUrl: 'templ/ct/rotate.html',
      data: {pageTitle: 'rotate'},
      controller: "rotate",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/moment/moment.min.js']
            }
          ]);
        }
      }
    })

    .state('statistics', {
      abstract: true,
      url: '/statistics',
      templateUrl: 'app/components/common/content.html',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ]
            }
          ]);
        }
      }
    })
    .state('statistics.operation', {
      url: "/operation",
      templateUrl: "templ/statistics/operation.html",
      data: {pageTitle: 'statistics'},
      controller: 'statisticsOperationCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ]
            }
          ]);
        }
      }
    })
    .state('statistics.office', {
      url: "/office",
      templateUrl: "templ/statistics/office.html",
      controller: 'statisticsOfficeCtr',
      data: {pageTitle: 'statisticsOffice'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })
    .state('statistics.workloadPersonal', {
      url: "/workloadPersonal",
      templateUrl: "templ/statistics/office.html",
      controller: 'statisticsOfficeCtr',
      data: {pageTitle: 'workload'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })

    .state('statistics.timeoutTaskDetail', {
      url: "/timeoutTaskDetail/:taskKey/:scope/:statisticsName/:startTime/:endTime/:secondLevelDimension/:taskStatus",
      templateUrl: "templ/statistics/timeoutTaskDetail.html",
      data: {pageTitle: 'timeoutTaskDetail'},
      controller: 'timeoutTaskDetailCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })
    .state('statistics.patientassignTrend', {
      url: "/patientassignTrend/:oneLevelDimension/:oneLevelDimensionId/:secondLevelDimension/:secondLevelDimensionId/:scope/:statisticsName/:startTime/:endTime",
      templateUrl: "templ/statistics/patientTherapySituationTrend.html",
      data: {pageTitle: 'statistics'},
      controller: 'patientTherapySituationTrendCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })
    .state('statistics.ctWorkload', {
      url: "/ctWorkload",
      templateUrl: "templ/statistics/ctWorkloadStatistics.html",
      data: {pageTitle: 'ctStatistics'},
      controller: 'ctStatisticsCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })
    .state('statistics.modelWorkload', {
      url: "/modelWorkload/:status",
      templateUrl: "templ/statistics/modelWorkloadStatistics.html",
      data: {pageTitle: 'modelStatistics'},
      controller: 'modelStatisticsCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })
    .state('statistics.modelWorkloadTrend', {
      url: "/modelWorkloadTrend/:oneLevelDimension/:oneLevelDimensionId/:secondLevelDimension/:secondLevelDimensionId/:scope/:statisticsName/:startTime/:endTime",
      templateUrl: "templ/statistics/modelWorkloadTrend.html",
      data: {pageTitle: 'statistics'},
      controller: 'modelWorkloadTrendCtrl',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              files: ['plugins/echarts/echarts.min.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap/tab.js']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ],
            }
          ]);
        }
      }
    })
    .state('feedback', {
      abstract: true,
      url: '/feedback',
      templateUrl: 'app/components/common/content.html',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    .state('feedback.list', {
      url: '/feedback/list',
      templateUrl: 'templ/feedback/processingtask.html',
      controller: 'feedbackListCtrl',
      resolve: {}
    })
    //系统设置根目录
    .state('system', {
      abstract: true,
      url: '/system',
      templateUrl: 'app/components/common/content.html',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/custom-scrollbar/jquery.mCustomScrollbar.css',
                'plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js']
            },
          ]);
        }
      }
    })

    //设备列表
    .state('system.devices', {
      url: '/devices',
      templateUrl: 'templ/system/devices.html',
      controller: "devices",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    //设备详情
    .state('system.det', {
      url: '/det?id&type',
      templateUrl: 'templ/system/det.html',
      controller: "sysDet",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win7/ui.fancytree.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })

    //上级医生审批
    .state('doctor.approval', {
      url: '/approval/:id/:taskId',
      templateUrl: 'templ/doctor/approval.html',
      controller: "approval",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap/collapse.js']
            }
          ]);
        }
      }
    })


    //后装
    .state('after', {
      abstract: true,
      url: '/after',
      templateUrl: 'app/components/common/content.html'
    })

    .state('after.scheduling', {
      url: '/scheduling',
      templateUrl: 'templ/after/scheduling.html',
      controller: "afterSch",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            },
            {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })
    .state('after.schedulingSetting', {
      url: '/schedulingSetting',
      templateUrl: 'templ/after/schedulingSetting.html',
      controller: "schedulingSettingCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })
    .state('after.setting', {
      url: '/setting',
      templateUrl: 'templ/after/setAfter.html',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
          ]);
        }
      }
    })
    .state('after.scheduleProcessedtask', {
      url: '/scheduleProcessedtask',
      templateUrl: 'templ/after/scheduleProcessedtask.html',
      controller: "scheduleProcessedtaskCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js'
              ]
            }, {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })
    .state('after.processingtask', {
      url: '/processingtask',
      templateUrl: 'templ/after/processingtask.html',
      controller: "afterProcessingtaskCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/moment/moment.min.js']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            },
          ])
        }
      }
    })
    .state('after.openPriscription', {
      url: '/openPriscription/:id/:pId',
      templateUrl: 'templ/after/openPriscription.html',
      controller: "afterPrisCtr",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([

            {
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })
    .state('after.editPriscription', {
      url: '/editPrescription/:id',
      templateUrl: 'templ/after/editPriscription.html',
      controller: "afterPrisEditCtr",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
            },
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })
    .state('after.priscriptionDetail', {
      url: '/priscriptionDetail/:id',
      templateUrl: 'templ/after/priscriptionDetail.html',
      controller: "priscriptionDetailCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })
    .state('after.afterDistributeSickbedCtrl', {
      url: '/afterDistributeSickbedCtrl',
      templateUrl: 'templ/after/afterDistributeSickbed.html',
      controller: "afterDistributeSickbedCtrl",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }, {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min.js',
                'plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css',
                'plugins/moment/moment.min.js'
              ],
            },
            {
              serie: true,
              files: ['plugins/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN.js']
            }
          ]);
        }
      }
    })


    //user
    .state('user', {
      abstract: true,
      url: '/user',
      templateUrl: 'app/components/common/content.html',
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            }
          ]);
        }
      }
    })
    .state('user.messageList', {
      url: "/messageList",
      templateUrl: "templ/user/messageList.html",
      controller: 'messageListCtr',
      data: {pageTitle: 'messageList'}
    })

    //printPages
    .state('print', {
      abstract: true,
      url: '/print',
      templateUrl: 'templ/printPages/printMain.html'
    })

    .state('print.printPrescription', {
      url: '/printPrescription',
      templateUrl: 'templ/printPages/printPrescription.html',
      data: {pageTitle: 'printPrescription'}
    })
    .state('print.afterForm', {
      url: '/afterForm',
      templateUrl: 'templ/printPages/afterForm.html',
      data: {pageTitle: 'afterForm'}
    })
    .state('print.afterCT', {
      url: '/afterCT',
      templateUrl: 'templ/printPages/afterCT.html',
      data: {pageTitle: 'afterCT'}
    })
    .state('print2', {
      abstract: true,
      url: '/print2',
      templateUrl: 'templ/printPages/printMain2.html'
    })
    .state('print2.afterForm', {
      url: '/afterForm',
      templateUrl: 'templ/printPages/afterForm.html',
      data: {pageTitle: 'afterForm'}
    })

    .state('afterPrint', {
      abstract: true,
      url: '/afterPrint',
      templateUrl: 'templ/printPages/printAfter.html'
    })
    .state('afterPrint.after', {
      url: '/after',
      templateUrl: 'templ/printPages/afterList.html',
      data: {pageTitle: 'after'}
    })
    .state('afterPrint.todayAfter', {
      url: '/todayAfter',
      templateUrl: 'templ/printPages/todayAfter.html',
      data: {pageTitle: 'todayAfter'}
    })

    .state('verticalPrint', {
      abstract: true,
      url: '/verticalPrint',
      templateUrl: 'templ/printPages/verticalPrint.html'
    })
    .state('verticalPrint.verticalSort', {
      url: '/verticalSort',
      templateUrl: 'templ/printPages/verticalSort.html',
      data: {pageTitle: 'verticalSort'}
    })

    .state('train', {
      abstract: true,
      url: '/train',
      templateUrl: 'app/components/common/content.html'
    })
    .state('train.edit', {
      url: '/editVideo',
      templateUrl: 'templ/training/editVideo.html',
      data: {pageTitle: 'editVideo'},
      controller: "editVideo",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win7/ui.fancytree.css']
            },
            {
              serie: true,
              name: 'angular-ladda',
              files: ['plugins/ladda/spin.min.js', 'plugins/ladda/ladda.min.js', 'plugins/ladda/ladda-themeless.min.css', 'plugins/ladda/angular-ladda.min.js']
            }
          ]);
        }
      }
    })
    .state('train.manage', {
      url: '/manageVideo',
      templateUrl: 'templ/training/manageVedio.html',
      data: {pageTitle: 'manageVideo'},
      controller: "manageVideo",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/fancytree/dist/jquery.fancytree-all.js', 'plugins/fancytree/dist/skin-win7/ui.fancytree.css']
            }
          ]);
        }
      }
    })
    // .state('train.play', {
    //   url: '/playVideo',
    //   templateUrl: 'templ/training/playVideo.html',
    //   data: {pageTitle: 'playVideo'},
    //   controller: "playVideo",
    //   resolve: {
    //     loadPlugin: function ($ocLazyLoad) {
    //       return $ocLazyLoad.load([
    //         {
    //           files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
    //         },
    //         {
    //           files: ['plugins/video/mediaelement-and-player.min.js', 'plugins/video/mediaelementplayer.min.css']
    //         }
    //       ]);
    //     }
    //   }
    // })
    .state('playVideo', {
      url: '/playVideo/:id/:pid',
      templateUrl: 'templ/training/playVideo.html',
      data: {pageTitle: 'playVideo'},
      controller: "playVideo",
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              files: ['plugins/video/mediaelement-and-player.min.js', 'plugins/video/mediaelementplayer.min.css']
            }
          ]);
        }
      }
    })



    //detail
    .state('common', {
      abstract: true,
      url: '/common',
      templateUrl: 'app/components/common/content.html'
    })
    .state('common.detail', {
      url: "/detail/:id/:taskId",
      templateUrl: "app/components/detail/main/commonDetail.html",
      controller: 'commonDetailCtrl',
      data: {pageTitle: 'commondetail'},
      resolve: {
        loadPlugin: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            {
              serie: true,
              files: ['plugins/sweetalert/sweetalert.min.js', 'plugins/sweetalert/sweetalert.css']
            },
            {
              serie: true,
              files: ['plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css', 'plugins/bootstrap/bootstrap.min.js']
            }
          ]);
        }
      }
    })
}).run(function ($rootScope, $state, $templateCache) {
  $rootScope.state = $state;
  $rootScope.SocketCreated = false;
  $rootScope.ws = null;

});

