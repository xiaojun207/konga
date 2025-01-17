
(function() {
    'use strict';

    angular.module('frontend.cluster', []);

    // Module configuration
    angular.module('frontend.cluster')
        .config([
            '$stateProvider',
            function config($stateProvider) {
                $stateProvider
                    .state('cluster', {
                        parent: 'frontend',
                        url: '/cluster',
                        data : {
                            activeNode : true,
                            pageName : __("Cluster"),
                            // displayName : "node info",
                            // pageDescription : __("Generic details about the node")
                        },

                        views: {
                            'content@': {
                                templateUrl: 'js/app/cluster/views/index.html',
                                controller: 'ClusterListController'
                            }
                        },

                    })
                ;
            }
        ])
    ;
}());
