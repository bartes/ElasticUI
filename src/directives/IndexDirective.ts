module elasticui.directives {
    export class IndexDirective {
        constructor() {
            var directive: ng.IDirective = {};
            directive.restrict = 'EAC';
            directive.scope = false;

            directive.controller = controllers.IndexController;
            directive.link = function (scope, element, attrs: any, indexCtrl: controllers.IndexController) {
                scope.$watch(attrs.euiIndex, (val) => {
                    indexCtrl.indexVM.index = val;
                });
                indexCtrl.indexVM.index = scope.$eval(attrs.euiIndex);

                scope.$watch(attrs.euiType, (val) => {
                    indexCtrl.indexVM.type = val;
                });
                indexCtrl.indexVM.type = scope.$eval(attrs.euiType);
            }
            return directive;
        }
    }
    directives.directive('euiIndex', IndexDirective);
}