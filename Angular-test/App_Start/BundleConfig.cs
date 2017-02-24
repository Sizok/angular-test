using System.Web;
using System.Web.Optimization;

namespace Angular_test
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-messages.js",
                      "~/Scripts/angular-ui-router.js",
                      "~/Scripts/ng-infinite-scroll.js",
                      "~/app/Services/angular-local-storage.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular-comp").Include(
                      "~/app/main-module.js",
                      "~/app/Home/home.js",
                      "~/app/Home/homeController.js",
                      "~/app/Home/homeComponent.js",
                      "~/app/Home/homeService.js",
                      "~/app/Feed/feed.js",
                      "~/app/Feed/feedService.js",
                      "~/app/Feed/feedComponent.js",
                      "~/app/layout/topMenuComponent.js",
                      "~/app/layout/topMenuService.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/sass/main.css"));
        }
    }
}
