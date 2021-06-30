
(function() {
    'use strict';

    angular.module('frontend.snapshots', [
    ]);

    // Module configuration
    angular.module('frontend.snapshots')
        .config([
            '$stateProvider',
            function config($stateProvider) {
                $stateProvider
                    .state('snapshots', {
                        url: '/snapshots',
                        parent : 'frontend',
                        data : {
                            access : 2,
                            pageName : __("Snapshots"),
                            pageDescription : __("Take snapshots of currently active nodes.") +
                            "<br>"+__('All')+" <code>"+__('Services')+"</code>, <code>"+__('Routes')+"</code>, <code>"+__('APIs')+"</code>, " +
                            "<code>"+__('Plugins')+"</code>, <code>"+__('Consumers')+"</code>, <code>"+__('Upstreams')+"</code> and <code>"+__('Targets')+"</code>"+__("will be saved and available for later import."),
                            prefix : '<i class="mdi mdi-camera"></i>'
                        },
                        views: {
                            'content@': {
                                templateUrl: 'js/app/snapshots/index.html',
                                controller: 'SnapshotsController'
                            },
                            'list@snapshots': {
                                templateUrl: 'js/app/snapshots/views/snapshots-list.html',
                                controller: 'SnapshotsListController',
                            },
                            'scheduled@snapshots': {
                                templateUrl: 'js/app/snapshots/views/snapshots-scheduled.html',
                                controller: 'SnapshotsScheduledController',
                            },

                        }
                    })
                    .state('snapshots.show', {
                        url: '/:id',
                        parent : 'snapshots',
                        data : {
                            access :  2,
                            pageName : __("Snapshot Details"),
                            displayName : __("snapshot details"),
                            pageDescription : null,
                            prefix : '<i class="mdi mdi-36px mdi-camera"></i>'
                        },
                        views: {
                            'content@': {
                                templateUrl: 'js/app/snapshots/views/snapshot.html',
                                controller: 'SnapshotController'
                            },
                        }
                    });
            }
        ])
    ;
}());
